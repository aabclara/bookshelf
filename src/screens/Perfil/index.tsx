import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ComponentButtonInterface, ComponentLoading } from "../../components";
import { TabTypes } from "../../navigations/tab.navigation";
import { styles } from "./styles";
import * as Notification from 'expo-notifications';
import { useAuth } from "../../hooks/auth";
/* ou ../Perfil/styles*/
import { registerForPushNotificationsAsync } from '../../services/data/Push'
import { TouchableOpacity } from "react-native-gesture-handler";

Notification.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    })
});
export function Perfil({navigation}:TabTypes){
    const { user } = useAuth();
    const[isLoading, setIsLoading] = useState(true);
    function handleVoltar(){
        const login = navigation.getParent()
        login?.goBack()
    }
    useEffect(() => {
        if (user) {
            setIsLoading(false);
        }
    }, [user]);
    useEffect(() => {
        async function fetchToken() {
            const token = await registerForPushNotificationsAsync()
            console.log(token)
        }
        fetchToken()
    }, []);
    return(
        <>
            {isLoading ? (
                <ComponentLoading />
            ) : (
                <View style={styles.container}>
                    <Text>Perfil</Text>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
            )}   
        </>
    )
}