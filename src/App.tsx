import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import './App.css';

function App() {
    return (
        <div className="bg-background text-foreground flex min-h-screen flex-col">
            <header className="border-border border-b px-4 py-6">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold">OPWA</h1>
                    <nav className="flex gap-4">
                        <Button variant="ghost">Home</Button>
                        <Button variant="ghost">Features</Button>
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Contact</Button>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto flex-1 px-4 py-12">
                <section className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-4 text-4xl font-bold">Welcome to OPWA</h1>
                    <p className="text-muted-foreground mb-8 text-xl">
                        Your modern web application built with React and
                        Tailwind CSS.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg">Get Started</Button>
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </div>
                </section>

                <section
                    className={cn(
                        'mt-24 grid grid-cols-1 gap-8 md:grid-cols-3'
                    )}
                >
                    {['Feature One', 'Feature Two', 'Feature Three'].map(
                        feature => (
                            <div
                                key={feature}
                                className="rounded-lg border p-6 shadow-sm"
                            >
                                <h3 className="mb-2 text-lg font-medium">
                                    {feature}
                                </h3>
                                <p className="text-muted-foreground">
                                    A brief description of this amazing feature
                                    and how it can help users.
                                </p>
                            </div>
                        )
                    )}
                </section>
            </main>

            <footer className="border-border mt-auto border-t px-4 py-6">
                <div className="text-muted-foreground container mx-auto text-center text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} OPWA. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
