import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'

// Screens
import HomeScreen from './screens/HomeScreen'
import AddNoteScreen from './screens/AddNoteScreen'


const Stack = createNativeStackNavigator()

const App = () => {

    const [fontsLoad] = useFonts({
        'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
        'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
        'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
    })

    if(!fontsLoad)
        return null

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='AddNote' component={AddNoteScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
