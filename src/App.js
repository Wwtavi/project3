import 'reset-css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import Chronology from './components/Chronology/Chronology';
import Help from './components/Help/Help';
import './style.scss';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Chronology" element={<Chronology />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
