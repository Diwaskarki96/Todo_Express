const todoModel = require("./todo.model");

const create = async (payload) => {
  await todoModel.create(payload);
};

const list = () => {};

const getById = (id) => {};

const updateById = (id, payload) => {};

const deleteById = (id) => {};

module.exports = { create, list, getById, updateById, deleteById };
