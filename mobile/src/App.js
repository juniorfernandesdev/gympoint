import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import createRouter from './routes';

// import { Container } from './styles';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Routes = createRouter(signed);
  return <Routes />;
}
