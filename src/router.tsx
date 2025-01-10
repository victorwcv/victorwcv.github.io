import { BrowserRouter, Routes, Route } from 'react-router';

import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
