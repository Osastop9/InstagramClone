import {View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri}/>
      <Footer />
    </View>
  );
};

export default Post;
