export function getEnvVar(
  value: string | undefined,
  name: string,
): string {
  if (!value) {
    throw new Error(`Environment variable ${name} is not configured.`);
  }

  return value;
}
