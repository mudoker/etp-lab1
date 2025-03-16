import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '@/layouts/home-layout';
import AboutPage from '@/pages/about-page';
import FeaturesPage from '@/pages/features-page';
import HomePage from '@/pages/home-page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
