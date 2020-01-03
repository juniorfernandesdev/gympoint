import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';

import PropTypes from 'prop-types';

import api from '../../../services/api';
import {Container, ButtonNewHelp, SubmitInput} from './styles';

export default function HelpList({navigation}) {
  const id = useSelector(state => state.auth.profile.id);

  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`/students/${id}/help-orders`, {
        question,
      });

      Alert.alert(
        'Nova pergunta publicada',
        'Sua pergunta foi publicada com sucesso.',
      );

      navigation.navigate('HelpList');
    } catch {
      Alert.alert('Erro ao publicar a pergunta', 'Tente novamente mais tarde.');
    }
  }

  return (
    <Container>
      <SubmitInput
        autoFocus
        multiline
        placeholder="Inclua seu pedido de auxílio"
        onSubmitEditing={handleSubmit}
        value={question}
        onChangeText={setQuestion}
      />
      <ButtonNewHelp onPress={handleSubmit}>Enviar pedido</ButtonNewHelp>
    </Container>
  );
}

HelpList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
