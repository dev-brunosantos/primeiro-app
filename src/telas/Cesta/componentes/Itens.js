import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import Texto from "../../../components/Texto";

export default function Itens({ titulo, lista }) {
    const renderItem = ({ item: { nome, imagem } }) => <View key={ nome } style={estilos.item}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome} key={nome}>{nome}</Texto>
    </View>

    return <>
        <Texto style={estilos.titulo}> {titulo} </Texto>
        <FlatList
            data={lista}
            renderItem={renderItem}
            keyExtractor={({ nome }) => nome}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#454545",
        lineHeight: 32,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        color: "#464646",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26,
        marginLeft: 11,
    }
})