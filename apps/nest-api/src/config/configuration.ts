export default function registerConfigEnvVars() {
  return {
    port: parseInt(process.env.PORT, 10) || 8000,
  };
}
