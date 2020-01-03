import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  CheckinCount,
  CheckinDate,
  Comment,
  Info,
  Res,
} from './styles';

export default function HelpList({data}) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container>
        <Info>
          <CheckinCount>
            {data.answer ? <Res>Respondido</Res> : 'Sem resposta'}
          </CheckinCount>
          <CheckinDate>{dateParsed}</CheckinDate>
        </Info>
        <Comment>{data.question}</Comment>
      </Container>
    </TouchableOpacity>
  );
}
