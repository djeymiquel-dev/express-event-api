class UnauthorizedError extends Error {
  constructor() {
    super(`Invalid Credentials dit is een test`);
    this.name = "UnauthorizedError";
  }
}

export default UnauthorizedError;
