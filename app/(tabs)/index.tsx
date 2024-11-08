import React, { useState } from 'react';

import { View, Button, Text, TextInput } from 'react-native';

import Slider from '@react-native-community/slider';

export default function HomeScreen() {
const [greeting, setGreeting] = useState('¡Hola, Alumno!');

const [nombre, setNombre] = useState('');

const [fontSize, setFontSize] = useState(24);


return (
<View style={styles.container}>

<Text style={[styles.greetingText, { fontSize }]}>
{greeting}
</Text>

<TextInput
style={styles.input}
placeholder="Escribe tu nombre"
value={nombre}
onChangeText={(text) => setNombre(text)}
/>

<Button
title="Actualizar Saludo"
onPress={() => setGreeting(`¡Hola, ${nombre}!`)}
/>

<Text>Tamaño del Texto</Text>

<Slider
style={styles.slider}
minimumValue={10}
maximumValue={40}
step={1}
value={fontSize}
onValueChange={(value) => setFontSize(value)}
/>

</View>

);
}
const styles = {
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
greetingText: {
fontSize: 24,
marginBottom: 10,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
width: 200,
paddingHorizontal: 10,
marginBottom: 20,
},
slider: {
width: 200,
height: 40,
marginVertical: 20,
},
};