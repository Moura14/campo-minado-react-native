import React from 'react'
import {View, StyleSheet} from 'react-native'
import Field from './field'




export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}></Field>
        })
        return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE '
    }
})
