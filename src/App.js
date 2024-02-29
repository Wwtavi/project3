import 'reset-css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import SingleCharacter from './components/SingleCharacter/SingleCharacter'
import About from './components/About/About';
import Help from './components/Help/Help';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './style.scss';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Characters/:id" element={<SingleCharacter />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
