const ALLOWED_NAVIGATION_ORIGINS = new Set([
  'https://ka-reer.com',
  'https://api.ka-reer.com',
  'https://accounts.google.com',
]);

export const isAllowedNavigationUrl = (value: string) => {
  try {
    return ALLOWED_NAVIGATION_ORIGINS.has(new URL(value).origin);
  } catch {
    return false;
  }
};

export const isHttpsUrl = (value: string) => {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
};
