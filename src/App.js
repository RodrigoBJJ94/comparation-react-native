import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar, Dimensions, StyleSheet } from "react-native";

export default function App() {
    const [randomNumber, setRandomNumber] = useState(0);

    return (
        <View style={Styles.app}>
            <StatusBar backgroundColor="#3d227e" />
            <View style={Styles.mobileView}>
                <Text style={Styles.mobileText}>Mobile Apps</Text>
            </View>
            <TouchableOpacity style={Styles.button}
                onPress={() => setRandomNumber(Math.floor(Math.random() * 10) + 1)}>
                <Text style={Styles.texts}>Click to generate a random number</Text>
            </TouchableOpacity>
            <View style={Styles.imagesView}>
                <Image style={Styles.images} source={require("./images/Flutter.jpg")} />
                <Image style={Styles.images} source={require("./images/ReactNative.png")} />
            </View>
            <Text style={Styles.texts}>
                {randomNumber !== 0 ? `The number is: ${randomNumber}` : ""}</Text>
            <View style={Styles.developerView}>
                <Text style={Styles.developerText}>Desenvolvido por Rodrigo Brentano</Text>
            </View>
        </View>
    ); // Fiz este App de teste em único arquivo, mas costumo a separar cada componente do app
};    // cada título, texto, botão, imagem etc. em uma pasta, com um arquivo de componente
     // e um arquivo de css, deixo o App muito mais organizado e com melhor desempenho
const Styles = StyleSheet.create({ 
    app: {                        
        flex: 1,
        backgroundColor: "#fff",
    },
    mobileView: {
        backgroundColor: "#512da8",
        padding: 15,
    },
    mobileText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    button: {
        marginTop: 90,
        marginBottom: 120,
    },
    texts: {
        fontSize: 20,
        color: "#000",
        textAlign: "center",
    },
    imagesView: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    images: {
        width: Dimensions.get("screen").width / 2,
        height: Dimensions.get("screen").width / 2,
    },
    developerView: {
        backgroundColor: "#512da8",
        padding: 18,
        marginTop: 100,
        width: "90%",
        alignSelf: "center",
    },
    developerText: {
        textAlign: "center",
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold",
    }
});
