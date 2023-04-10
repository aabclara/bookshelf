import React from 'react';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput
} from "react-native";
import {styles} from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';

export function Login() {
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.thirdLight}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="key" style={styles.icon} />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.thirdLight}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface title="Entrar" type="secondary" onPressI={() => {console.log('Login') }} />
                <ComponentButtonInterface title="Cadastre-se" type="thirdLight" onPressI={() => {console.log('Cadastro') }} />
            </KeyboardAvoidingView>
        </View>
    )
}
