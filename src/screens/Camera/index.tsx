import { Camera, CameraCapturedPicture, CameraType,FaceDetectionResult } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Alert, Text, Image, View } from 'react-native';
import { ComponentButtonInterface } from '../../components';
import {styles} from './styles'
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import * as FaceDetector from 'expo-face-detector';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

interface IPhoto {
  height: string
  uri: string
  width: string
}

export  function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
  const [photo,setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false);
  const [permissionQrCode, requestPermissionQr] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(false)
  const [face,setFace] = useState<FaceDetector.FaceFeature>()

  if (!permissionCamera) {
    // Camera permissions estão carregando
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions não foi concedida ainda
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Preciso de permissão para acessar a camera</Text>
        <Button onPress={requestPermissionCamera} title="garanta a permissão" />
      </View>
    );
  }
  if (!permissionMedia) {
    // Camera permissions estão carregando
    return <View />;
  }

  if (!permissionMedia.granted) {
    // Camera permissions não foi concedida ainda
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Preciso de permissão para acessar a galeria</Text>
        <Button onPress={requestPermissionMedia} title="garanta a permissão" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  
  async function takePicture() {
    if(ref.current){
      const picture = await ref.current.takePictureAsync()
      setPhoto(picture)
      setTakePhoto(false)
    }
  }
  async function SavePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("ImagesBook", asset, false)
    Alert.alert("Imagem salva com sucesso!")
  }
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      aspect: [4, 3],
      quality: 1
    })
  if (!result.canceled) {
    setPhoto( result.assets[0])
    }
  }
  const handleBarCodeScanned = ({type,data}: BarCodeScannerResult) =>{
    setScanned(true);
    alert(data);
  }
  const resetQrCode = () => {
    setScanned(false);
  }
  const handleFacesDetected = ({faces}: FaceDetectionResult): void =>{
    if (faces.length > 0){
      const faceDetect = faces[0] as FaceDetector.FaceFeature
      setFace(faceDetect)
      // console.log(faceDetect)
    } else {
      setFace(undefined)

    }
  };
return (
  <View style={styles.container}>
  {takePhoto ?(
      <>
          <ComponentButtonInterface title='Virar' type='primary' onPressI={toggleCameraType}/>
          <Camera style={styles.camera} type={type} ref={ref} ratio='1:1'
           onBarCodeScanned={scanned ? undefined: handleBarCodeScanned}
           onFacesDetected={handleFacesDetected}
           faceDetectorSettings={{
            mode:FaceDetector.FaceDetectorMode.accurate,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.all,
            minDetectionInterval: 1000,
            tracking: true,
           }}/>
          <View style={styles.meio}>
                    {face && face.smilingProbability && face.smilingProbability > 0.1 ? (
                        <Text style={styles.text}>Sorrindo</Text>
                    ) : (
                        <Text style={styles.text}>Não está sorrindo</Text>
                    )}
          </View>
          <ComponentButtonInterface title=' Tirar Foto' type='primary' onPressI={takePicture}/>
          <ComponentButtonInterface title='Qr Code' type='primary' onPressI={resetQrCode}/> 
        </>
  ) : (
      <>
      <View style={styles.takenpic}>
        <ComponentButtonInterface title=' Tirar Foto' type='primary' onPressI={()=>setTakePhoto(true)}/>
        <ComponentButtonInterface title='Salvar' type='primary' onPressI={SavePhoto}/>
        <ComponentButtonInterface title='Abrir imagem' type='primary' onPressI={pickImage}/>

        {photo && photo.uri && (
            <Image source={{uri: photo!.uri}} style={styles.img} />
        )}
      </View>
        </>
        )}
    </View>
  );
}