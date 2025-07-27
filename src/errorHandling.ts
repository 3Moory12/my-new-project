// Global error handler
export const setupGlobalErrorHandler = () => {
  const handleError = (error: ErrorEvent | PromiseRejectionEvent) => {
    // Log error to console
    console.error('Global error handler:', error);

    // Send error to error reporting service
    reportError(error);
  };

  // Setup error handlers
  window.addEventListener('error', handleError);
  window.addEventListener('unhandledrejection', handleError);
};

// Error reporting configuration
export const reportError = (error: ErrorEvent | PromiseRejectionEvent) => {
  // Placeholder for error reporting logic
  // This could be replaced with actual error reporting service integration
  const errorInfo = {
    message: error.message,
    stack: error.error?.stack,
    type: error.type,
    filename: error.filename,
    lineno: error.lineno,
    colno: error.colno,
  };

  console.error('Reporting error:', errorInfo);
};

// Error logging utilities
export const logError = (error: Error, context?: string) => {
  const errorInfo = {
    message: error.message,
    stack: error.stack,
    context,
  };

  console.error('Error logged:', errorInfo);
};

// Error boundary wrapper
export const withErrorBoundary = (Component: React.ComponentType) => {
  return (props: any) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
};

// Error handling hooks
export const useErrorHandling = () => {
  const handleError = (error: Error, context?: string) => {
    logError(error, context);
    reportError({
      message: error.message,
      error: error,
    } as ErrorEvent);
  };

  return {
    handleError,
  };
};

// Error handling styles
export const errorStyles = {
  errorContainer: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
  `,
  errorMessage: `
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  `,
  errorDetails: `
    font-size: 0.875rem;
    color: #666;
    max-width: 600px;
  `,
};
