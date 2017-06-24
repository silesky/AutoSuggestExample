/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flo
 */
import AutoSuggest from 'react-native-autosuggest'
// cloned from the github repo for development purposes
import React, { Component } from 'react'
import {
  TextInput,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
 <View key={1} style={{ flex: 1, padding: 2, justifyContent: 'center' }}>
    <Text>Clear Me!!</Text>
  </View>
/*const myOptionalCustomClearBtn = [
  <View key={1} style={{ flex: 1, padding: 2, justifyContent: 'center' }}>
    <Text>Clear Me!!</Text>
  </View>
]

const Styles = StyleSheet.create({
  TextInput: {
    width: 300,
    paddingLeft: 10,
    fontSize: 12,
    backgroundColor: 'lightgrey',
    height: 40
  },
  AutoSuggest: {
    width: 300,
    paddingLeft: 10,
    fontSize: 12,
    backgroundColor: 'lightgrey',
    height: 40
  }
})
export default class AutosuggestExample extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'dimgrey', paddingTop: 50, paddingLeft: 10 }}>
        <TextInput
          style={Styles.TextInput}
          placeholder="I'm an ordinary, boring TextInput component."
        />
        <AutoSuggest
          containerStyles={{ marginTop: 10, marginBottom: 10 }}
          otherTextInputProps={{ editable: true }}
          textInputStyles={{
            width: 300,
            paddingLeft: 10,
            fontSize: 12,
            backgroundColor: 'lightgrey',
            height: 40
          }}
          onChangeText={(selection) => console.log(`you selected ${selection}`)}
          clearBtn={null}}
          terms={['Apple', 'Banana', 'Orange', 'Strawberry', 'Lemon', 'Cantaloupe', 'Peach', 'Mandarin', 'Date', 'Kiwi']}
          placeholder="I'm a super-awesome TextInput!"
          placeholderTextColor="darkgrey"
        />
        <TextInput
          style={Styles.TextInput}
          placeholder="I'm an ordinary, boring TextInput component."
        />
      </View>
    )
  }
}
*/
AppRegistry.registerComponent('AutosuggestExample', () => AutosuggestExample)
