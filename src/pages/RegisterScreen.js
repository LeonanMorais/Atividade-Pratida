import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica de registro aqui
  };

  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}

export default RegisterScreen;