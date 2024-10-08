import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Liste des tâches</h1>
      <div className="flex items-center space-x-2 mb-4">
        <input
          className="w-full p-2 rounded-lg bg-gray-700 text-light focus:outline-none"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Ajouter une tâche"
        />
        <button
          onClick={handleAddTask}
          className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Ajouter
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between bg-gray-700 p-2 rounded-lg">
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="bg-danger hover:bg-red-600 text-white px-4 py-1 rounded-lg"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
