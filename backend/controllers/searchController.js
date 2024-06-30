const Blog = require("../models/blogModel");
const About = require("../models/aboutModel");
// Add other models as needed

const searchContent = async (req, res) => {
  const { query } = req.query;
  try {
    const blogResults = await Blog.find({
      $text: { $search: query },
    });
    const aboutResults = await About.find({
      $text: { $search: query },
    });
    // Add other model searches as needed

    const results = {
      blogs: blogResults,
      about: aboutResults,
      // Add other results as needed
    };

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  searchContent,
};
