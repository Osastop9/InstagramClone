import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProfilePicture from '../../ProfilePicture';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} size={40} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: '#3c3c3c',
  },
});

export default Header;
