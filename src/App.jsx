import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import All from "./pages/All";
import About from './pages/About';
import Our from './pages/Our';
import Contacts from './pages/Contacts';
import Detail from './pages/Detail';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="our" element={<Our />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App