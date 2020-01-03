import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 64px;
  border: 1px solid #dddddd;
`;

export const Content = styled.div`
  height: 64px;
  /* max-width: 900px; */
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #999999;
      padding-right: 10px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #666666;
      font-family: 'Roboto';
    }

    button {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #de3b3b;
    }
  }
`;
