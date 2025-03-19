import { NavLink, Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Layout = () => {
  const NavItem = ({ to, label, end = false }: { to: string; label: string; end?: boolean }) => (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <Button
          variant={isActive ? 'secondary' : 'ghost'}
          className={`relative px-3 md:px-6 transition-all duration-300 ${isActive
            ? 'font-medium'
            : 'text-muted-foreground hover:text-foreground'
            }`}
        >
          {label}
          {isActive && (
            <span className="bg-primary absolute right-0 bottom-0 left-0 mx-auto h-0.5 w-1/2" />
          )}
        </Button>
      )}
    </NavLink>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-border bg-background sticky top-0 border-b shadow-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 relative h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full p-1.5">
              <img
                src="/hcmc-metro-logo.png"
                alt="HCMC Metro Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-foreground text-xl md:text-2xl font-bold">OPWA</h1>
              <p className="text-muted-foreground text-xs font-medium">
                HCMC Metro Authority
              </p>
            </div>
          </div>

          <nav className="flex gap-1 md:gap-2 rounded-lg p-1 overflow-x-auto w-full md:w-auto">
            <NavItem to="/" label="Dashboard" end={true} />
            <NavItem to="/features" label="Staff Portal" />
            <NavItem to="/about" label="System Info" />
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-6 md:py-12">
        <Outlet />
      </main>

      <footer className="border-border bg-muted/50 mt-auto border-t px-4 py-4 md:py-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 h-6 w-6 rounded p-1">
                  <img
                    src="/hcmc-metro-logo.png"
                    alt="HCMC Metro Logo"
                    className="h-full w-full"
                  />
                </div>
                <span className="font-semibold">HCMC Metro Authority</span>
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                OPerator Web Application (OPWA) - v1.0
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
