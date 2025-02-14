const config = (key: string): string | undefined => {
  return import.meta.env[key];
};

export default config;
