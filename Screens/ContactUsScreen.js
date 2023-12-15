// ContactUsScreen.js
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Importamos un ícono de la librería de expo


const ContactUsScreen = () => {
  const handleSendMessage = () => {
    Alert.alert("Mensaje Enviado", "Gracias por ponerte en contacto con nosotros.");
    // Aquí podrías agregar lógica para enviar el mensaje o guardar la información del formulario
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contáctanos</Text>
      <Text style={styles.description}>
        Estamos aquí para ayudarte. Si tienes alguna pregunta o comentario, por favor completa el formulario a continuación.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Mensaje"
        multiline
      />

      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleSendMessage}
      >
        <Text style={styles.sendButtonText}>Enviar Mensaje</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default ContactUsScreen;
