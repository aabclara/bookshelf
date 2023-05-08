import React from 'react';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput
} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';
import { LoginTypes } from '../../navigations/login.navigation';

export function Cadastrar({navigation}: LoginTypes) {
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastre-se</Text>
                <View style={styles.formRow}>
                    <AntDesign name="user" style={styles.icon} />
                    <TextInput
                        placeholder="Nome"
                        placeholderTextColor={colors.thirdLight}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
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
                <ComponentButtonInterface 
                    title="Salvar" 
                    type="secondary" 
                    onPressI={() => {navigation.navigate('Drawer') }} 
                />
                <ComponentButtonInterface 
                    title="Voltar" 
                    type="thirdLight" 
                    onPressI={() => { navigation.navigate('Login') }}
                />
            </KeyboardAvoidingView>
        </View>
    )
}
