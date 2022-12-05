import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../common/colors'
import { hp, wp } from '../../common/ResponsiveLayout'
import Icon from '@expo/vector-icons/MaterialIcons'
import * as ImagePicker from 'expo-image-picker'
import BottomSheet from '../BottomSheet'

const BottomToolBar = () => {

    const [status, requestPermission] = ImagePicker.useCameraPermissions();

    const _openImagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true
        })
        
    }

    const [isVisible, setIsVisible] = useState(false)

  return (
    <View>
    <View style={styles.container} >
      <View style={{flexDirection: 'row', alignItems: 'center'}} >
        <Icon name='add-box' size={wp(24)} color={COLORS.WHITE} onPress={() => setIsVisible(!isVisible)} />
        <Icon name='color-lens' size={wp(24)} color={COLORS.WHITE} style={{marginLeft: wp(16)}} />
      </View>
      <Icon name='more-vert' size={wp(24)} color={COLORS.WHITE} />
    </View>
    <BottomSheet visible={isVisible} onClose={(val) => setIsVisible(val)} />
    </View>
  )
}

export default BottomToolBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.MAIN_COLOR,
        height: wp(40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(24),
        // position: 'absolute',
        bottom: hp(10)
    }
})