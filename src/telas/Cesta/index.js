import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Topo from "../Cesta/componentes/Topo";
import Detalhes from "../../telas/Cesta/componentes/Detalhes";
import Itens from "./componentes/Itens";


export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo}/>

        <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
            <Itens {...itens}/>
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})