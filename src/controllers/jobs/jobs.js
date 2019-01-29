const mongoose = require('mongoose');
const Job = require('../../models/Job');

const controllers = {
  index: (req, res) => {
    Job
    .find()
    .exec()
    .then(data => {
      res
        .json({
          type: "Reading Jobs",
          data: data
        })
        .status(200)
    })
    .catch(err => {
      console.log(`caugth error : ${err}`);
      return res.status(500).json(err);
    })
  },
  create: (req, res) => {
    console.log(req.body)
    const newJob = new Job ({
      _id: mongoose.Types.ObjectId(),
      description: req.body.description,
      hiringDate: req.body.hiringDate,
      salary: req.body.salary,
      location: req.body.location,
      contactEmail: req.body.contactEmail,
      isStillAvailable: req.body.isStillAvailable
    });
    console.log(newJob)
    newJob
      .save()
      .then(data => {
        res
          .json({
            type: "Job created",
            data: data
          })
          .status(200)
      })
      .catch(err => {
        console.log(`caugth error: ${err}`);
        return res.status(500).json(err);
      })
  },
  findBy: (req, res) => {
    id = req.params.jobId
    Job
     .findById(id, function (err, adventure) {})
     .exec()
     .then(data => {
       res
         .json({
           type: "Reading Job",
           data: data
         })
         .status(200)
     })
     .catch(err => {
       console.log(`caugth error : ${err}`);
       return res.status(500).json(err);
     })
  },
  replace: (req, res) => {
    Job
      .updateOne({_id: req.params.jobId},
        {description: req.body.description,
        hiringDate: req.body.hiringDate,
        salary: req.body.salary,
        location: req.body.location,
        contactEmail: req.body.contactEmail,
        isStillAvailable: req.body.isStillAvailable}
      )
      .then(data => {
        res.json({
          type: "Job modified",
          data: data
        })
        .status(200)
      })
      .catch(err => {
        console.log(`caugth error : ${err}`);
        return res.status(500).json(err);
      })
  },
  removeBy: (req, res) => {
    Job
    .deleteOne({ _id: req.params.jobId})
    .then(data => {
      res.json({
        type: "Job removed",
        data: data
      })
      .status(200)
    })
    .catch(err => {
      console.log(`caugth error : ${err}`);
      return res.status(500).json(err);
    })
  },
};

module.exports = controllers;
