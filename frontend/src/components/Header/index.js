import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/login-default.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gym" />
          <Link to="/student">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/memberships">MATRÍCULAS</Link>
          <Link to="/helporder">PEDIDOS DE AUXÍO</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/" onClick={handleSignOut}>
                sair do sistema
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
