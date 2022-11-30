import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'
import { styles } from './styles'
import { wp } from '../../common/ResponsiveLayout'
import { COLORS } from '../../common/colors'
import NoDataView from '../../Component/NoDataView'
import AddButton from '../../Component/AddButton'
import { StatusBar } from 'expo-status-bar'
import IconButton from '../../Component/IconButton'

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.container} >
        <StatusBar translucent={false} backgroundColor={COLORS.MAIN_COLOR} style='light' />
        <View style={styles.rowContainer} >
            <Text style={styles.titleText} >Notes</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}} >
                <IconButton name='search' />
                <IconButton name='archive' buttonStyle={{marginLeft: wp(20)}} />
                
            </View>
            
        </View>
        <NoDataView />
        <AddButton onPress={() => props.navigation.navigate('AddNote')} />
      
    </SafeAreaView>
  )
}

export default HomeScreen