import {View} from 'react-native';
import React from 'react';
import Stories from '../components/Stories';
import Post from '../components/Post/Post';

const post = {
  user: {
    imageUri:
      'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/287166766_1028531151370531_1833629095788263918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xO5sowTgL-wAX96vMnz&_nc_ht=scontent-los2-1.xx&oh=00_AT8MOGt7JvKbx51_wraNJt5M15ffDfYBnmQf5sNvjKEaaw&oe=6311AA40',
    name: 'Blessing',
  },
  imageUri:
    'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  caption: 'Beautiful Night City #instagram',
};

const HomeScreen = () => {
  return (
    <View>
      <Stories />
      <Post post={post} />
    </View>
  );
};

export default HomeScreen;
