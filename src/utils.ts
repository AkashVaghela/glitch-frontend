export const validateUsername = (username: string): boolean => {
  const regex = /^[a-zA-Z0-9_]{1,31}$/;
  return regex.test(username);
}

export const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}