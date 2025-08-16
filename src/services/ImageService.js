import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export class ImageService {
  static async requestPermissions() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permisos requeridos', 
        'Por favor concede permisos para acceder a la galería'
      );
      return false;
    }
    return true;
  }

  static async pickImage() {
    try {
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) return null;

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        return result.assets[0].uri;
      }
      
      return null;
    } catch (error) {
      Alert.alert('Error', 'No se pudo seleccionar la imagen');
      return null;
    }
  }


}
