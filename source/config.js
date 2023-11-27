// File config.js
import AsyncStorage from '@react-native-async-storage/async-storage';
const WebURL = "http://192.168.1.39:/api/APIHT"; 
const saveConfig = async (configData) => {
  try {
    await AsyncStorage.setItem('config', JSON.stringify(configData));
  } catch (error) {
    console.error('Error saving config:', error);
  }
};
const readConfig = async () => {
    try {
      let configString = await AsyncStorage.getItem('config');
      if (!configString) {
        // Nếu không có dữ liệu config trong AsyncStorage, bạn có thể tạo dữ liệu mặc định ở đây
        const defaultConfig = {
          SERVER_URL: WebURL,
          // Các cấu hình khác...
        };
        console.log(defaultConfig);
        await AsyncStorage.setItem('config', JSON.stringify(defaultConfig));
        configString = JSON.stringify(defaultConfig);
   
      }
      return JSON.parse(configString);
    } catch (error) {
      console.error('Error reading config:', error);
      return null;
    }
  };

export { saveConfig, readConfig };