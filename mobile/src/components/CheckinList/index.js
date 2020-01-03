import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {TouchableOpacity} from 'react-native';

import {Container, CheckinCount, CheckinDate} from './styles';

export default function CheckinList({data}) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container>
        <CheckinCount>Check-in #{data.id}</CheckinCount>
        <CheckinDate>{dateParsed}</CheckinDate>
      </Container>
    </TouchableOpacity>
  );
}
