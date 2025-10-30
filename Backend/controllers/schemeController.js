const Scheme = require('../models/Scheme');

exports.getSchemes = async (req, res) => {
  const schemes = await Scheme.find().sort({ createdAt: -1 });
  res.json(schemes);
};

exports.createScheme = async (req, res) => {
  const data = req.body;
  const scheme = new Scheme(data);
  await scheme.save();
  res.json(scheme);
};
