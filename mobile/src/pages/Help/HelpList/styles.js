import styled from 'styled-components/native';
import Button from '../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 5px 20px 2px;
  background: #f5f5f5;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {marginTop: 15, paddingBottom: 15},
})`
  width: 100%;
`;

export const Item = styled.TouchableOpacity`
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  min-height: 46px;
  justify-content: center;
  align-self: stretch;
  margin-bottom: 10px;
  padding: 20px;
`;

export const ItemHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AnswerContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AnswerText = styled.Text`
  font-weight: bold;
  color: ${props => (props.answer ? '#32CD32' : '#999999')};
  margin-left: 5px;
`;

export const Time = styled.Text`
  color: #666666;
`;

export const Info = styled.Text`
  color: #666666;
  margin-top: 10px;
`;
