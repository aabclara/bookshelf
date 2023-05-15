import React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import { ComponentButtonInterface } from '../../components';
interface IPhoto {
  height: string
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState<IPhoto>()
  const ref = useRef(null)

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Clique para permitir o acesso a sua câmera.</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  
  async function takePicture() {
    if(ref.current){
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  }

  return (
    <View style={styles.container}>
      <ComponentButtonInterface title='Flip' type='secondary' onPressI={toggleCameraType} />
      <Camera style={styles.camera} type={type} ref={ref} />
      <ComponentButtonInterface title='Tirar Foto' type='secondary' onPressI={takePicture}/>
      {photo && photo.uri && (
        <Image source={{uri: photo.uri}} style={styles.img}/>
      )} 
    </View>
  );
}