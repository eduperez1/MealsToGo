import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/typography/text.component"; 
import { Spacer } from "./../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, Title, ErrorContainer } from "../components/account.styles";
import { isLoaded } from "expo-font";

export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);
    
    return (
        <AccountBackground>
            <AccountCover/>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContextType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large"/>
                <AuthInput
                    label="Password"
                    value={password}
                    textContextType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
                <Spacer size="large"/>
                { error && 
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                }
                <Spacer size="large"/>
                    {!isLoading ? ( 
                        <AuthButton
                            icon="lock-open-outline"                    
                            mode="contained"
                            onPress={() => onLogin(email, password)}
                        >
                            Login
                        </AuthButton> 
                    ) : ( 
                        <ActivityIndicator animating={true} color={Colors.blue300}/>
                    )}
                <Spacer/>
            </AccountContainer>
            <Spacer size="large">
                <AuthButton
                    mode="contained"
                    onPress={() => navigation.goBack()}
                >
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );
} 