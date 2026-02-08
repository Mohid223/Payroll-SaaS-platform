const Employee = require("../models/employeeModel");

exports.getAll = (req, res) => {
  Employee.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getOne = (req, res) => {
  Employee.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data[0]);
  });
};

exports.create = (req, res) => {
  Employee.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.update = (req, res) => {
  Employee.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "updated" });
  });
};

exports.remove = (req, res) => {
  Employee.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "deleted" });
  });
};
