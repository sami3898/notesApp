import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { wp } from '../../common/ResponsiveLayout'
import { COLORS } from '../../common/colors'
import IconButton from '../IconButton'

const Header = (props) => {
  return (
    <View style={styles.container} >
      <IconButton name='arrow-back' onPress={() => props.navigation.goBack()} />
      <IconButton name='save' />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: wp(24),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.MAIN_COLOR,
        justifyContent: 'space-between'
    }
})