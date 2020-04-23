export const RealAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      RealAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      RealAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };