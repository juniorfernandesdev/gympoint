import styled from 'styled-components/native';
import Button from '../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 0},
})``;

export const ButtonCheckin = styled(Button)``;

export const Item = styled.View``;

export const Number = styled.Text``;

export const Time = styled.Text``;
