import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default (props) => {
    return (
        <View style={StyleSheet.header}>
            <Text style={StyleSheet.headerTitle}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: "#f7287b",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black",
        fontSize: 18
    }
})