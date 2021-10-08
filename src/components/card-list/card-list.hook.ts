import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {CardsDeck, ICard, IDeckResult} from '../../interfaces/interfaces';
import {httpClient} from '../../utils/http-client/http-client';

export const useCardList = () => {
  const [correctGuess, setCorrectGuess] = useState<number>(0);
  const [incorrectGuess, setIncorrectGuess] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [deck, setDeck] = useState<ICard[]>([]);

  const fetchData = () => {
    httpClient.get<IDeckResult>('deck/new/draw/?count=52').then(result => {
      const {success, cards} = result.data;

      if (success) {
        setDeck(cards);
        setCorrectGuess(0);
        setIncorrectGuess(0);
        setCurrentIndex(0);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const endGameAlert = () => {
    Alert.alert(`Score: ${correctGuess}`, 'Play again ?', [
      {
        onPress: fetchData,
        text: 'Yes',
        style: 'default',
      },
      {
        text: 'No',
        style: 'default',
      },
    ]);
  };

  const handleChoicePressed = (value: boolean) => {
    if (currentIndex === deck.length - 1) {
      endGameAlert();
      return;
    }

    const currCardValue = deck[currentIndex].value;
    const nextCardValue = deck[currentIndex + 1].value;
    const result =
      (CardsDeck[nextCardValue] >= CardsDeck[currCardValue]) === value;

    if (result) {
      setCorrectGuess(prev => prev + 1);
    } else {
      setIncorrectGuess(prev => prev + 1);
    }

    setCurrentIndex(prev => prev + 1);
  };

  return {
    correctGuess,
    incorrectGuess,
    currentIndex,
    deck,
    handleChoicePressed,
  };
};
