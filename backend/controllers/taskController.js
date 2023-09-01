```javascript
const Task = require('../models/Task');

// Task Controller methods

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, labels } = req.body;

    const newTask = new Task({
      title,
      description,
      dueDate,
      priority,
      labels,
      createdBy: req.user.id,
    });

    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.id });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get tasks' });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get task' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, labels } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        dueDate,
        priority,
        labels,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
```
