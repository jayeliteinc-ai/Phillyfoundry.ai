export async function reportGenerator(scope) {
  return { scope, generatedAt: new Date().toISOString() };
}
