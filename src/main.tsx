// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router.tsx';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Router />,
  // </StrictMode>,
);
