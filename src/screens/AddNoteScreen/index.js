import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '../../common/colors'
import Header from '../../Component/Header'

const AddNoteScreen = (props) => {
  return (
      <SafeAreaView style={styles.container}>
          <StatusBar
              translucent={false}
              backgroundColor={COLORS.MAIN_COLOR}
              style="light"
          />
          <Header {...props} />
          <ScrollView style={{ flex: 1 }}>
              <TextInput
                  placeholder="Title"
                  placeholderTextColor={COLORS.TEXT_HIGHLIGHT_COLOR}
                  style={styles.titleTextInput}
                  multiline
              />
              <TextInput
                  placeholder="Type something..."
                  placeholderTextColor={COLORS.TEXT_HIGHLIGHT_COLOR}
                  style={styles.descTextInput}
                  multiline
              />
          </ScrollView>
      </SafeAreaView>
  );
}

export default AddNoteScreen