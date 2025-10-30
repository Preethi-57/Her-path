const Resource = require('../models/Resource');

exports.getResources = async (req, res) => {
  const resources = await Resource.find().sort({ createdAt: -1 });
  res.json(resources);
};

exports.createResource = async (req, res) => {
  const data = req.body;
  const resource = new Resource(data);
  await resource.save();
  res.json(resource);
};

exports.verifyResource = async (req, res) => {
  const { id } = req.params;
  const resource = await Resource.findByIdAndUpdate(id, { verified: true }, { new: true });
  res.json(resource);
};
