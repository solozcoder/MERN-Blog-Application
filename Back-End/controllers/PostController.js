const createPost = (req, res) => {
  const { title, caption, content } = req.body;

  console.log(req.body);
};

module.exports = { createPost };
