export type SignUpType = {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

export type ErrorType = {
  showError: boolean,
  errorMessage: string | undefined;
}