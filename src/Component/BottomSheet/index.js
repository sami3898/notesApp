import { View, Text, StyleSheet, Modal, SafeAreaView, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp, wp } from '../../common/ResponsiveLayout'
import { COLORS } from '../../common/colors'
import Icon from '@expo/vector-icons/MaterialIcons'
import { FONT_FAMILY } from '../../common/Fonts'


const BottomSheet = (props) => {
    const {visible, onClose} = props
    const leftView = [
        {
            _id: 1,
            icon: 'photo-camera',
            title: 'Take Photo'
        },
        {
            _id: 1,
            icon: 'image',
            title: 'Add Image'
        },
    ]

    const _renderList = (type) => {
        if (type === 'left') {
            return leftView.map((e,i) => {
                return (
                    <View >
                    <TouchableOpacity key={i} style={styles.itemContainer} >
                        <Icon name={e.icon} size={wp(20)} color={COLORS.WHITE} />
                        <Text style={styles.itemTitle} >{e.title}</Text>
                    </TouchableOpacity>
                    </View>
                )
            })
        }
    }

  return (
    <Modal
        transparent
        animationType='slide'
        visible={visible}
        onRequestClose={() => onClose(false)}
    >
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={() => onClose(false)} >
            <View style={styles.sheetContainer} >
                {_renderList('left')}
            </View>
            
        </TouchableOpacity>
      
    </Modal>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        flexDirection: 'column-reverse'
    },
    sheetContainer: {
        // marginHorizontal: wp(24),
        backgroundColor: COLORS.MAIN_COLOR,
        padding: hp(16),
        paddingBottom: Platform.select(
            {ios: hp(36)}
        )
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(16),
        width: '100%'
    },
    itemTitle: {
        fontSize: wp(16),
        fontFamily: FONT_FAMILY.NUNITO_REGULAR,
        color: COLORS.WHITE,
        marginLeft: wp(12)
    }
})