import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';

import logo from '../../assets/logo-signin.png';

import {signInRequest} from '../../store/modules/auth/actions';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(id));
  }
  return (
    <>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-autline"
            keyboardType="number-pad"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />
        </Form>
        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Container>
    </>
  );
}
