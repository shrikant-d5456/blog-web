const About = require("../models/aboutModel");

const getAboutData = async (req, res) => {
  try {
    const data = await About.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAboutData = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newData = new About({ title, description });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAboutData,
  createAboutData,
};
