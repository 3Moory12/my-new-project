// Content Security Policy (CSP) configuration
export const csp = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-eval'"],
  'style-src': ["'self'"],
  'img-src': ["'self'"],
  'connect-src': ["'self'", 'https://api.example.com'],
  'font-src': ["'self'"],
  'frame-src': ["'none'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'upgrade-insecure-requests': [],
};

// Security headers configuration
export const securityHeaders = {
  'Content-Security-Policy': Object.entries(csp)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
    .join('; '),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'no-referrer-when-downgrade',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

// Function to apply security headers
export const applySecurityHeaders = (headers: Record<string, string>) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    headers[key] = value;
  });
};
