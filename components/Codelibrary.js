 const WebURL = "http://192.168.1.39:"; 
/* import path from "../source/config.json"; */
/* const WebURL = path.SERVER_URL; */
/* const WebURL = "http://192.168.1.39:8087/api/APIHT";  */
import { saveConfig, readConfig } from '../source/config';

export async function sendUserData(userData) {
  try {
    const config = await readConfig();

   const API_URL = config.SERVER_URL + "/api/APIHT/CheckLoingID";
    console.log(API_URL);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const responseData = await response.json();
    return responseData;
    console.log(responseData)
  } catch (error) {
    console.error("Error sending user data:", error);
    throw error;
  } 
}

export async function sendData_Alarm_App(data_alarm) {
  try {
    const config = await readConfig();

    const API_URL = config.SERVER_URL + "/api/APIHT/sp_Stored";

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_alarm),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending user data:", error);
    throw error;
  }
}