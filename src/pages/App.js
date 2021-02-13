import {
  Switch,
  Route
} from 'react-router-dom'

import Header from '../components/Header/Header.js';
import CalculatorPage from './CalculatorPage/CalculatorPage.js';
import Footer from '../components/Footer/Footer.js';
import './App.css';

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={CalculatorPage} />
        <Route exact path="/calculator" component={CalculatorPage} />
        <Route exact path="/loans" />
      </Switch>
      <Footer />
    </main>
  );
}
