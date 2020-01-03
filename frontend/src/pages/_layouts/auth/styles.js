import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 370px;
  text-align: center;
  background: #fff;
  border: 0;
  border-radius: 4px;
  margin: 70px 70px;
  padding: 20px 20px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #dddddd;
      margin: 0 0 10px;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }

  small {
    color: #444444;
    font-size: 14px;
    font-weight: bold;
    align-self: flex-start;
    padding: 15px 0;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #ee4d64;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#ee4d64')};
    }
  }
`;
