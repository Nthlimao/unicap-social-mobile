import React, { useState } from 'react';
import { View, ImageBackground, TextInput, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useMutation } from '@apollo/react-hooks';
import { useNavigation } from 'react-navigation-hooks';
import { login } from '../../providers/auth';
import { getErrorGraphql } from '../../helpers/error.helper';
import schemas from '../../services/schemas.graphql';
import styles from './styles.css';

const background = require('../../assets/images/bg_unicap.jpg');

export default Login = () => {
    const [ variables, setVariables ] = useState({ matricula: '', digito: '', senha: '' });  
    const [submit, { data, loading, error }] = useMutation(schemas.LOGIN);
    const { navigate } = useNavigation();

    let message = '';

    if(error) {
        message = getErrorGraphql(error);
    }

    const handleChange = (value, target) => {
        setVariables(variables => ({ ...variables, [target]: value }));
    }

    const matriculationChange = (value, target) => {
        if(value.length <= 9) {
            handleChange(value, target)
        }
    }

    const digitChange = (value, target) => {
        if(value.length <= 1) {
            handleChange(value, target)
        }
    }

    const handleSubmit = () =>{
        submit({ variables });
    }

    if(loading === false && data !== undefined) {
        const { login: { token, session }} = data;
        login(data.login);
        navigate('Loading');
    }

    return (
        <ImageBackground source={background} style={styles.imageBackground}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image style={styles.logo} source={require('../../assets/images/unicap_logo.png')} />
                    <View style={styles.row}>
                        <View style={styles.col10}>
                            <TextInput
                                style={styles.inputMat}
                                value={variables.matricula}
                                placeholder="Matrícula"
                                keyboardType="numeric"
                                onChangeText={(text) => matriculationChange(text, 'matricula')}
                            />
                        </View>
                        <View style={styles.col2}>
                            <TextInput
                                style={styles.inputDigit}
                                value={variables.digito}
                                keyboardType="numeric"
                                onChangeText={(text) => digitChange(text, 'digito')}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <TextInput
                                style={styles.inputSenha}
                                secureTextEntry={true}
                                keyboardType="numeric"
                                value={variables.senha}
                                placeholder="Senha"
                                onChangeText={(text) => handleChange(text, 'senha')}
                            />
                        </View>
                    </View>
                    <Button 
                        title="Entrar" 
                        loading={loading}
                        buttonStyle={styles.button} 
                        titleStyle={styles.buttonTitle}
                        onPress={() => handleSubmit()} 
                    />
                <Text style={styles.warning}>{message}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

Login.navigationOptions = {
    headerStyle: {
        elevation: 0,
        height: 0,
    },
};