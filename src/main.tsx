import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle.ts';
import Portfolio from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router basename="/portfolio">
    <Reset />
    <GlobalStyle />
    <Portfolio />
  </Router>,
);
