import { StyleSheet } from 'react-native'
import { COLORS } from '../../common/colors'
import { FONT_FAMILY } from '../../common/Fonts'
import { hp, wp } from '../../common/ResponsiveLayout'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.MAIN_COLOR
    },
    titleTextInput: {
        marginHorizontal: wp(24),
        marginTop: hp(40),
        fontSize: wp(38),
        fontFamily: FONT_FAMILY.NUNITO_REGULAR,
        color: COLORS.WHITE
    },
    descTextInput: {
        marginHorizontal: wp(24),
        marginTop: hp(40),
        fontSize: wp(23),
        fontFamily: FONT_FAMILY.NUNITO_REGULAR,
        color: COLORS.WHITE
    }
})