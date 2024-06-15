// import logo from './logo.svg';
import './App.css';
import Header from '../components/Header/Header'
import Aboutme from '../components/Aboutme/Aboutme'
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Aboutme/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
