const AboutPage = () => {
    return (
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-10">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-0 top-0">
                  <div className="h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
              </div>
              <div className="absolute bottom-0 right-0">
                  <div className="h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />
              </div>

              {/* Tech pattern */}
              <div className="absolute inset-0">
                  <svg
                      className="absolute h-full w-full opacity-[0.03]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                  >
                      <defs>
                          <pattern
                              id="grid"
                              width="40"
                              height="40"
                              patternUnits="userSpaceOnUse"
                          >
                              <path
                                  d="M 0 10 L 40 10 M 10 0 L 10 40 M 0 20 L 40 20 M 20 0 L 20 40 M 0 30 L 40 30 M 30 0 L 30 40"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="0.5"
                              />
                              <circle cx="10" cy="10" r="1" fill="currentColor" />
                              <circle cx="20" cy="20" r="1" fill="currentColor" />
                              <circle cx="30" cy="30" r="1" fill="currentColor" />
                              <circle cx="10" cy="30" r="1" fill="currentColor" />
                              <circle cx="30" cy="10" r="1" fill="currentColor" />
                          </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
              </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="text-xs font-medium text-primary">System Overview</span>
              </div>
              <h1 className="bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
                  System Info
              </h1>
              <p className="mt-4 max-w-lg text-xl text-muted-foreground">
                  Technical information and system specifications for HCMC Metro OPWA
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl border border-border bg-background/80 p-4 text-center backdrop-blur-sm">
                  <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">Version</span>
                      <span className="font-mono text-sm font-medium">v1.0.235</span>
                  </div>
                  <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">Last Updated</span>
                      <span className="font-mono text-sm font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">Status</span>
                      <span className="flex items-center gap-1 font-mono text-sm font-medium">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></span>
                          Operational
                      </span>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default AboutPage;
