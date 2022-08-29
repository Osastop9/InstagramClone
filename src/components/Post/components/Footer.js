import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Footer = ({likesCount, caption, timePosted}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.timePosted}>{timePosted}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  timePosted: {
    color: '#8c8c8c',
    margin: 3,
    fontSize: 14
  },
});

export default Footer;
