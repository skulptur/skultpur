export const withDescription = <T>(description: string, config: T): T & { description: string } => {
  return {
    description,
    ...config,
  }
}
