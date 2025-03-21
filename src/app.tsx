import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '@/layouts/home-layout';
import AboutPage from '@/pages/about-page';
import FeaturesPage from '@/pages/features-page';
import HomePage from '@/pages/home-page';

import NavigationBar from './pages/dashboard/components/navigation-bar';

// import Dashboard from './pages/dashboard/page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard />}> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
