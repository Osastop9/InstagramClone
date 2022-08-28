import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const ProfilePicture = ({uri}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 76,
    width: 76,
    margin: 7,
    borderRadius: 38,
    borderWidth: 3,
    borderColor: '#ae22e0',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});

export default ProfilePicture;
