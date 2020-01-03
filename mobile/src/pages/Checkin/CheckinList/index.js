import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {useSelector} from 'react-redux';
import {withNavigation} from 'react-navigation';

import api from '../../../services/api';

import CheckinList from '../../../components/CheckinList';

import {Container, List, ButtonCheckin} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
//function
function Checkin() {
  const id = useSelector(state => state.auth.profile.id);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  async function loadCheckins() {
    try {
      setLoading(true);
      const response = await api.get(`students/${id}/checkins?page=${page}`);

      const data = response.data.map(checkin => ({
        ...checkin,
        date: formatRelative(parseISO(checkin.createdAt), new Date(), {
          locale: pt,
          addSuffix: true,
        }),
      }));

      console.tron.log(data);

      setCheckins({...checkins, data});

      setLoading(false);
    } catch {
      setLoading(false);
      setLastPage(0);
    }
  }

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${id}/checkins`);

      setCheckins(response.data);
    }
    //asdasd
    loadCheckins();
  }, [id, page]);

  async function handleSubmit() {
    try {
      await api.post(`students/${id}/checkins`);

      // loadCheckins();

      Alert.alert('Novo check-in', 'Seu check-in foi realizado com sucesso!');
    } catch {
      Alert.alert(
        'Limite de check-ins alcançado',
        'Você realizou mais de 5 check-ins essa semana.',
      );
    }
  }

  function handlePagination() {
    if (!lastPage) {
      setPage(page + 1);
    }
  }

  return (
    <Container>
      {/* <ButtonCheckin onPress={handleSubmit}>Novo check-in</ButtonCheckin>
      <List
        data={checkins}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <CheckinList data={item} />}
      /> */}

      <ButtonCheckin onPress={handleSubmit}>Novo check-in</ButtonCheckin>
      {loading ? (
        <ActivityIndicator size={30} color="#e25965" marginTop={50} />
      ) : (
        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          onEndReached={handlePagination}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => <CheckinList data={item} />}
        />
      )}
    </Container>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({tintColor}) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
export default withNavigation(Checkin);
