import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import params from '../params'
import Mine from './mine'
import Flag from './flag'


export default props => {

    const {mined, opended, nearMines, exploded, flagged} = props

    const styleField = [styles.field]
    if(opended) styleField.push(styles.opended)
    if(exploded) styleField.push(styles.exploded)
    if(flagged) styleField.push(styles.flagged)
    if(!opended && !exploded) styleField.push(styles.regular)

    let color = null
    if(nearMines > 0){
        if(nearMines == 1) color = '#2A28D7'
        if(nearMines == 2) color = '#2B520F'
        if(nearMines > 2 && nearMines < 6) color = '#F9060A'
        if(nearMines >= 6) color = '#F221A9'
    }

    return (
        <View style={styleField}>
            {!mined && opended && nearMines > 0 ? 
            <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
                : false
        }
        {mined && opended ? <Mine></Mine> : false}
        {flagged && !opended ? <Flag></Flag> : false}
        </View>
    )
}


const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    opended: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    }
})