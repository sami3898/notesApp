import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../../common/ResponsiveLayout'
import { COLORS } from '../../common/colors'
import { FONT_FAMILY } from '../../common/Fonts'

const NoDataView = () => {
  return (
    <View style={styles.container} >
      <Image 
        source={require('../../../assets/images/rafiki.png')}
        resizeMode='contain'
      />
      <Text style={styles.noteText} >Create your first note!</Text>
    </View>
  )
}

export default NoDataView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noteText: {
        fontSize: wp(20),
        marginTop: hp(6),
        color: COLORS.WHITE,
        fontFamily: FONT_FAMILY.NUNITO_LIGHT,
        color: COLORS.WHITE
    }
})