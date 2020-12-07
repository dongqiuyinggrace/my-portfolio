import { Route, Switch } from 'react-router-dom';
import HomePage from '../../components/home/HomePage';
import Navbar from '../../components/navbar/Navbar/Navbar';
import AboutPage from './../../components/about/AboutPage';
import PortfolioPage from './../../components/portfolio/PortfolioPage';
import ResumePage from './../../components/resume/ResumePage';
import ContactPage from './../../components/contact/ContactPage';


function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Switch>
        <Route path='/about' component={AboutPage}/>
        <Route path='/portfolio' component={PortfolioPage}/>
        <Route path='/resume' component={ResumePage}/>
        <Route path='/contact' component={ContactPage}/>
      </Switch>
    </div>
  );
}

export default App;
