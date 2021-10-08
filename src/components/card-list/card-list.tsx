import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Card} from '../card/card';
import {useCardList} from './card-list.hook';
import {styles} from './card-list.styles';

export const CardList = () => {
  const {
    correctGuess,
    incorrectGuess,
    currentIndex,
    deck,
    handleChoicePressed,
  } = useCardList();

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text>{`Score: ${correctGuess}`}</Text>
        <Text>{`Cards left: ${deck.length - (correctGuess + incorrectGuess)}`}</Text>
      </View>
      <View style={styles.cardsContainer}>
        {deck.map((card, index) => {
          if (index < currentIndex) {
            return null;
          }

          return (
            <Card
              key={card.code}
              image={card.image}
              style={{bottom: index * 4, zIndex: -index}}
            />
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Text>Next card is: </Text>
        <Button title="Higher" onPress={() => handleChoicePressed(true)} />
        <Button title="Lower" onPress={() => handleChoicePressed(false)} />
      </View>
    </View>
  );
};
