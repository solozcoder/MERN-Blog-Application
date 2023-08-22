const isAuthenticated = (req, res, next) => {
  const userIsAuthenticated = true;

  if (userIsAuthenticated) {
    next();
  } else {
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = {
  isAuthenticated,
};
