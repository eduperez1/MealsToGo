import React, { useState, useEffect, useRef, useContext } from "react"; 
import { Camera, CameraType } from 'expo-camera';
import styled from "styled-components/native"; 
import { Button } from "react-native-paper";
import { View , TouchableOpacity} from "react-native";
import AsyncStorage  from "@react-native-async-storage/async-storage";

import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`;

const CameraContainer = styled.View`
    width: 100%;
    height: 100%;
`;

const CameraButton = styled(Button).attrs({
    mode: "contained",
    icon: "camera"
})`
    position: absolute;
    top: 525px;
    left: 140px;
`;

export const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(false);
    const cameraRef = useRef(null);
    const { user } = useContext(AuthenticationContext); 

    const snap = async () => {
        if(cameraRef){
            const photo = await cameraRef.current.takePictureAsync();
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
            navigation.goBack();
        }
    };
        
    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
      
      if(hasPermission === null){
        return <View/>
      }

      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
        <CameraContainer>
                <TouchableOpacity onPress={snap}>
                    <ProfileCamera
                        ref={(camera) => (cameraRef.current = camera)}
                        type={CameraType.front}
                        ratio={"16:9"}
                        onCameraReady={() => {
                        console.log("Camera Ready");
                        }}
                    />
                </TouchableOpacity>
            <CameraButton onPress={snap}>Snap!</CameraButton>
        </CameraContainer>

    );
};

         