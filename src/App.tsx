import { Routes, Route } from 'react-router-dom';

import EcgLayout from './layout/EcgLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tech from './pages/Tech/Tech';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';

const Portfolio = () => {
  return (
    <EcgLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </EcgLayout>
  );
};

export default Portfolio;
