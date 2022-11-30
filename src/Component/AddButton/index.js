import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp, wp } from '../../common/ResponsiveLayout'
import { COLORS } from '../../common/colors'
import Icon from '@expo/vector-icons/MaterialIcons'

const AddButton = (props) => {

  const {onPress} = props

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer} onPress={() => onPress()} >
      <Icon name='add' size={wp(48)} color={COLORS.WHITE} />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: wp(70),
        width: wp(70),
        backgroundColor: COLORS.MAIN_COLOR,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        right: wp(35),
        bottom: hp(50)
    }
})