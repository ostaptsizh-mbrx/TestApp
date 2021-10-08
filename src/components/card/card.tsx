import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface CardProps {
  image: string;
  style: any;
}

export const Card = ({image, style}: CardProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 300,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
