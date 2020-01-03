import React from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  AnswerContainer,
  AnswerHeader,
  Time,
  AnswerText,
  AnswerStrong,
} from './styles';

export default function HelpDetail({navigation}) {
  const item = navigation.getParam('item');
  return (
    <>
      <Container>
        <AnswerContainer>
          <AnswerHeader>
            <AnswerStrong>PERGUNTA</AnswerStrong>
            <Time>{item.date}</Time>
          </AnswerHeader>
          <AnswerText>{item.question}</AnswerText>
          <AnswerStrong>RESPOSTA</AnswerStrong>
          <AnswerText>{item.answer || ''}</AnswerText>
        </AnswerContainer>
      </Container>
    </>
  );
}

HelpDetail.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
