import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <header className="py-6 px-4 border-b border-border">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">OPWA</h1>
                    <nav className="flex gap-4">
                        <Button variant="ghost">Home</Button>
                        <Button variant="ghost">Features</Button>
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Contact</Button>
                    </nav>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-12">
                <section className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to OPWA</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Your modern web application built with React and Tailwind CSS.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Get Started</Button>
                        <Button variant="outline" size="lg">Learn More</Button>
                    </div>
                </section>

                <section className={cn("mt-24 grid grid-cols-1 md:grid-cols-3 gap-8")}>
                    {["Feature One", "Feature Two", "Feature Three"].map((feature) => (
                        <div key={feature} className="p-6 border rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium mb-2">{feature}</h3>
                            <p className="text-muted-foreground">
                                A brief description of this amazing feature and how it can help users.
                            </p>
                        </div>
                    ))}
                </section>
            </main>

            <footer className="py-6 px-4 border-t border-border mt-auto">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} OPWA. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
