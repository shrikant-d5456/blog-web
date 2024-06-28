const Data = require("../models/dataModel");

const getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createData = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newData = new Data({ title, content });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllData,
  createData,
};
