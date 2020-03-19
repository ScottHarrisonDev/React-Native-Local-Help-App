import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class OfferScreen extends React.Component {

  listItem({item}) {
    return (
        <View style={{flexDirection: 'row'}}>
          <Text style={{ flex: 1, padding: 10}}>{item.name}: {item.message}</Text>
          <TabBarIcon name="md-mail" style={{flex: 1}} />
        </View>
    );
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Text>If you feel you are in a position to help others in some way, check the requests for help below</Text>
            </View>
          </ScrollView>
          <Text style={{fontSize: 25, margin: 20}} >Help Requests</Text>
          <FlatList
              contentContainerStyle={{marginLeft: 20, marginRight: 20}}
              data={[{name: 'Scott', message: 'This is a test'}, {name: 'Stuart', message: 'this is another test'}]}
              renderItem={this.listItem}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
