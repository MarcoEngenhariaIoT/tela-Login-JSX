import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";

const tamanhoLogo = 200;
const tamanhoTitulo = 24;
const tamanhoTexto = 16;
const tamanhoCopyRight = 12;
const usuario = "Marco";
const senha = "2025";

export default function App() {
  const [usuarioIn, setUsuario] = useState("");
  const [senhaIn, setSenha] = useState("");

  const fazerLogin = () => {
    if (usuarioIn === usuario && senhaIn === senha) {
      Alert.alert("Login realizado com sucesso!");
      console.log("Login efetuado com sucesso");
    } else {
      Alert.alert("Sai fora maluco, esse aplicativo é de uso restrito!!!!");
      console.log("Algo saiu errado");
    }
  };

  const debugAlert = () => {
    console.log("passo 1");
    Alert.alert("Funcionou");
    console.log("passo 2");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/alientecLogo.png")}
        style={{ width: tamanhoLogo, height: tamanhoLogo }}
      />

      <Text style={styles.fonteVermelha}>Faça seu Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuarioIn}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senhaIn}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <Button title="Login" onPress={fazerLogin} />

      <Text style={styles.copyRight}>
        CopyRight: Eng. Marco Aurélio Machado
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  fonteVermelha: {
    color: "red",
    fontSize: tamanhoTitulo,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: "80%",
    padding: 10,
    marginBottom: 15,
    fontSize: tamanhoTexto,
  },
  copyRight: {
    color: "blue",
    fontSize: tamanhoCopyRight,
    marginTop: 20,
  },
});
