import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, ImageBackground } from "react-native";

import Texto from "../../../components/Texto";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style={estilos.nome}> { nome } </Texto>

        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}> { nomeFazenda } </Texto>
        </View>

        <Texto style={estilos.descricao}> { descricao } </Texto>
        <Texto style={estilos.preco}> { preco } </Texto>

        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{ botao }</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
    },
    fazenda: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 40,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26,
        textAlign: "center",
    }
})