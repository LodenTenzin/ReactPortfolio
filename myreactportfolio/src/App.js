import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Styles
import './styles/app.scss';

//Components
import Nav from './components/Nav';
import HomeMyInfo from "./components/HomeMyInfo";
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomeMyInfo/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
