import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
// import {parseISO, formatRelative} from 'date-fns';
// import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import api from '../../../services/api';

import {
  Container,
  SubmitButton,
  List,
  Item,
  ItemHeader,
  AnswerContent,
  AnswerText,
  Time,
  Info,
} from './styles';

function HelpList({navigation, isFocused}) {
  const id = useSelector(state => state.auth.profile.id);
  const [helpLists, setHelpLists] = useState([]);

  useEffect(() => {
    async function loadHelpOrdens() {
      const response = await api.get(`students/${id}/help-orders`);

      setHelpLists(response.data);
    }
    if (isFocused) {
      loadHelpOrdens();
    }
  }, [id, isFocused]);

  return (
    <Container>
      <SubmitButton onPress={() => navigation.navigate('HelpSend')}>
        Novo pedido de auxílio
      </SubmitButton>
      {helpLists && (
        <List
          data={helpLists}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Item
              disabled={!item.answer}
              onPress={() => navigation.navigate('HelpDetail', {item})}>
              <ItemHeader>
                <AnswerContent>
                  <Icon
                    name="check-circle"
                    color={item.answer ? '#32CD32' : '#999'}
                    size={20}
                  />
                  <AnswerText answer={item.answer}>
                    {item.answer ? 'Respondido' : 'Sem resposta'}
                  </AnswerText>
                </AnswerContent>
                <Time>{item.date}</Time>
              </ItemHeader>
              <Info>{item.question}</Info>
            </Item>
          )}
        />
      )}
    </Container>
  );
}

export default withNavigationFocus(HelpList);

HelpList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
