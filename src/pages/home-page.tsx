const HomePage = () => {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-10">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform">
          <div className="h-[500px] w-[800px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2">
          <div className="bg-primary/5 h-[300px] w-[300px] rounded-full blur-3xl" />
        </div>
        <div className="absolute right-0 bottom-0">
          <div className="h-[400px] w-[400px] rounded-full bg-blue-700/5 blur-3xl" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="bg-primary/10 mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1">
          <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
          <span className="text-primary text-xs font-medium">
            HCMC Metro Operator Portal
          </span>
        </div>
        <h1 className="from-primary to-primary bg-gradient-to-r via-blue-600 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-4 max-w-lg text-xl">
          This is the main control center for HCMC Metro OPWA system operations
        </p>

        <div className="border-border bg-background mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Select a module from the navigation to continue</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
