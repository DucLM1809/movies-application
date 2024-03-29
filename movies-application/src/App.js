import 'swiper/swiper.min.css';
import './assets/boxicons-2.1.1/boxicons-2.1.1/css/boxicons.min.css'
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Router from './config/Routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
