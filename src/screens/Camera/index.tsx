import React from 'react';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ComponentButtonInterface } from '../../components';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigations/login.navigation';

interface IPhoto {
  height: string
  uri: string
  width: string
}

export function CameraScreen({navigation}: LoginTypes) {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions()
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)

  if (!permissionCamera) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Clique para permitir o acesso a sua câmera.</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  
  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  }

  async function SavePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("ImagesBook", asset, true)
    Alert.alert("Imagem salva com sucesso")
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
  }
  /*if (!result.canceled) {
    setPhoto( result.assets[0])
  }*/

return (
  <View style={styles.container}>
  {photo && photo.uri ? (
    <>
      <View style={styles.camera2}>
        <View>
          <View style={styles.ladinho}>
            <TouchableOpacity onPress={() => {navigation.navigate('Photo')}} style={styles.botaocima}>
              <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={SavePhoto} style={styles.botaocima} /*Para salvar */>
                  <MaterialIcons name="save" size={40} color={colors.secondary} />
                </TouchableOpacity>
              </View>
              <Image source={{ uri: photo.uri }} style={styles.img} />
              </View>
          </View>
        </>
  ) : (
    <Camera style={styles.camera} type={type} ref={ref}>
      <View style={styles.ladinho}>
        <TouchableOpacity onPress={() => navigation.navigate('Photo')} style={styles.botaocima} /*Para voltar para o tab */>
            <Ionicons name="caret-back-circle" size={40} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.botao1} /* Para tirar  a foto */>
          <MaterialIcons name="camera" size={100} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCameraType} style={styles.botao2} /* Para mudar a câmera */>
          <MaterialCommunityIcons name="camera-flip" size={70} color={colors.white} />
        </TouchableOpacity>
      </View>
    </Camera>
  )}

</View>
);
}