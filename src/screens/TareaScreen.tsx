import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
            <View style={ styles.cajaAzul } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center', // ejercicio 2, 7, 8
        // justifyContent: 'space-between'  // ejercicio 4
        flexDirection: 'row', //ejercicio 5, 10
        // justifyContent: 'space-between' //ejercicio 5
        alignItems: 'center' // ejercicio 7, 8
        
    },
    cajaMorada: {
        // flex: 1, //ejercicio 6
        width: 100, //ejercicio 6
        height: 100, //ejercicio 5
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // alignSelf: "flex-end" // ejercicio 3, 4
        // top: 100 // ejercicio 9
        
        
    },
    cajaNaranja: {
        // flex: 1,  //ejercicio 1, 6
        width: 100, //ejercicio 6
        height: 100, //ejercicio 5
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: "center" //ejercicio 4
        // right: -100 // ejercicio 8, 9
        top: 50 // ejercicio 10
        
        
    },
    cajaAzul: {
        // flex: 2, //ejercicio 6
        // flexDirection: 'row', // ejercicio 2
        width: 100, //ejercicio 6
        height: 100, //ejercicio 5
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'center' // ejercicio 3
        
    },
});
