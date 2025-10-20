export const environment = {
  production: true,
  apiBaseUrl: (window as any)['__env__']?.API_BASE_URL || 'http://localhost:8080'
};
