export const authResponse = (user, token, message) => ({
  message,
  user: {
    username: user.username,
    email: user.email,
  },
  token,
});