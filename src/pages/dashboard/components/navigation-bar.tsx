import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';

const ListOfPage = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'About Us',
    to: '/',
  },
  {
    title: 'People',
    to: '/',
  },
  {
    title: 'Contact',
    to: '/',
  },
  {
    title: 'Login',
    to: '/',
  },
];

const NavigationBar = () => {
  const [currentPage, setPage] = useState('Home');
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-row items-start justify-between">
      <span>WonderCar</span>
      <div className={`flex ${width < 1024 ? 'flex-col' : 'flex-row'}`}>
        {width < 1024 && (
          <Button variant="outline" onClick={() => setOpen(!open)}>
            <Menu />
          </Button>
        )}

        {(open || width >= 1024) &&
          ListOfPage.map((data, index) => (
            <NavLink to={data.to} key={index}>
              <Button
                variant="ghost"
                onClick={() => setPage(data.title)}
                className={`${data.title == currentPage ? 'text-black' : 'text-neutral-400'}`}
              >
                {data.title}
              </Button>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default NavigationBar;
