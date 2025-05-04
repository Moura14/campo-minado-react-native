import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props => {
    return (
        <View style={styles.contianer}>
          <View style={styles.flagpole}> </View>  
          <View style={styles.flags}></View>
          <View style={styles.base1}></View>
          <View style={styles.base2}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    contianer: {
        marginTop: 2
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flags: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    }
})