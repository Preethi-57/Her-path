const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
  const jobs = await Job.find().sort({ postedAt: -1 });
  res.json(jobs);
};

exports.createJob = async (req, res) => {
  const data = req.body;
  const job = new Job(data);
  await job.save();
  res.json(job);
};
