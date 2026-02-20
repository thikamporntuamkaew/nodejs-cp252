const tags = [];
let num = 0

const getTags = (req, res) => {
  tags.push(num++)
  res.json({ tags });
};

// Implement other controllers related to tags

module.exports = {
  getTags,
  // Export other tag controllers
};
