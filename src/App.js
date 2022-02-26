import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import { Courses } from './pages/Courses';
import { Layout } from './components/Layout';
import 'aos/dist/aos.css'; 
import { Experiencia } from './pages/Experiencia';



function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="proyectos" element={<Projects/>}/>
            <Route path="contacto" element={<Contact/>}/>
            <Route path="cursos" element={<Courses/>}/>
            <Route path="experiencia" element={<Experiencia/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Route>
        </Routes>
      </HashRouter>
  );
}

export default App;