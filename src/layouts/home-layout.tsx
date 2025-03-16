import { NavLink, Outlet } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const Layout = () => {
    return (
        <div className="bg-background text-foreground flex min-h-screen flex-col">
            <header className="border-border border-b px-4 py-6 bg-[#0056a8]">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/metro-logo.svg"
                            alt="HCMC Metro Logo"
                            className="h-8 w-8"
                        />
                        <h1 className="text-2xl font-bold text-white">OPWA | HCMC Metro</h1>
                    </div>
                    <nav className="flex gap-4">
                        <NavLink to="/" end>
                            {({ isActive }) => (
                                <Button variant={isActive ? "secondary" : "ghost"} className="text-white hover:text-white hover:bg-[#0069d9]">
                                    Dashboard
                                </Button>
                            )}
                        </NavLink>
                        <NavLink to="/features">
                            {({ isActive }) => (
                                <Button variant={isActive ? "secondary" : "ghost"} className="text-white hover:text-white hover:bg-[#0069d9]">
                                    Staff Portal
                                </Button>
                            )}
                        </NavLink>
                        <NavLink to="/about">
                            {({ isActive }) => (
                                <Button variant={isActive ? "secondary" : "ghost"} className="text-white hover:text-white hover:bg-[#0069d9]">
                                    System Info
                                </Button>
                            )}
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto flex-1 px-4 py-12">
                <Outlet />
            </main>

            <footer className="border-border mt-auto border-t px-4 py-6 bg-gray-100">
                <div className="container mx-auto text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Ho Chi Minh City Metro Authority. All rights reserved.</p>
                    <p className="text-muted-foreground mt-1">OPerator Web Application (OPWA) - v1.0</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
