import Todo from "../model/schema.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,

      createdAt: Date.now(),
    });

    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const newTodo = await Todo.find({}).sort({ createdAt: -1 });

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const toggleTodo = async (req, res) => {
  try {
    const refTodo = await Todo.findById(req.params.id);
    const todo = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      { done: !refTodo.done }
    );

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      { data: req.body.data }
    );
    const todo = await Todo.findById(req.params.id);
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
