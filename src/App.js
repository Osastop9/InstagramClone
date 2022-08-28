import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
};

export default App;
