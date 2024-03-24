// src/components/Task/Task.jsx

// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from '../../redux/actions';

const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div>
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
