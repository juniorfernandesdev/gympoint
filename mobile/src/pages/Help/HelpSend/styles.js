import styled from 'styled-components/native';
import Button from '../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 15px 20px;
  background: #f5f5f5;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 0},
})``;

export const ButtonNewHelp = styled(Button)``;

export const SubmitInput = styled.TextInput.attrs({
  textAlignVertical: 'top',
})`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  height: 40%;
`;
