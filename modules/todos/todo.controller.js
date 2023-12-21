const todoModel = require("./todo.model");

const create = async (payload) => {
  return await todoModel.create(payload);
};

const list = async () => {
  return await todoModel.find();
};

const getById = async (id) => {
  return await todoModel.findOne({ id });
};

const updateById = async (id, payload) => {
  return await todoModel.updateOne({ id }, payload);
};

const deleteById = async (id) => {
  return await todoModel.deleteOne({ id });
};
module.exports = { create, list, getById, updateById, deleteById };
