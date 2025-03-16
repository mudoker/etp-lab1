const FeaturesPage = () => {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-10">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4">
          <div className="h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-3xl" />
        </div>
        <div className="absolute bottom-1/3 left-1/4">
          <div className="bg-primary/5 h-[300px] w-[300px] rounded-full blur-3xl" />
        </div>

        {/* Radial grid pattern */}
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/10" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/10" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1">
          <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
          <span className="text-xs font-medium text-blue-600">
            Staff Access
          </span>
        </div>
        <h1 className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
          Staff Portal
        </h1>
        <p className="text-muted-foreground mt-4 max-w-lg text-xl">
          Access the staff management and operational control systems
        </p>

        <div className="border-border bg-background/80 mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>Authentication required to access staff features</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
