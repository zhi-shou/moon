import {
  Outlet,
} from 'react-router-dom';
import { GlobalStyle } from './styles/global.styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div style={{ display: 'flex' }}>
        <Outlet />
      </div>
    </>
  );
}
