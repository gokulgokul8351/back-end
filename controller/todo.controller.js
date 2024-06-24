let todo = []

// create
export const todoCreate = async (req, res) => {
  const { title, desc } = req.body
  const newTodo = {
    id: todo.length + 1,
    title,
    desc,
  }

  todo.push(newTodo)
  console.log(newTodo)
  res.status(201).json(newTodo)
}

// find
export const todoFind = async (req, res) => {
  res.json(todo)
}

export const todoUpdate = async (req, res) => {}
