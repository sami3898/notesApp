import { StyleSheet } from 'react-native'
import { COLORS } from '../../common/colors'
import { FONT_FAMILY } from '../../common/Fonts'
import { wp } from '../../common/ResponsiveLayout'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.MAIN_COLOR,
    },
    titleText: {
        fontSize: wp(42),
        fontWeight: '600',
        color: COLORS.WHITE,
        fontFamily: FONT_FAMILY.NUNITO_SEMIBOLD
    },
    rowContainer: {
        flexDirection: 'row',
        paddingHorizontal: wp(24),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer: {
        height: wp(50),
        width: wp(50),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.HIGHLIGHT_COLOR,
        borderRadius: 15
    }
})