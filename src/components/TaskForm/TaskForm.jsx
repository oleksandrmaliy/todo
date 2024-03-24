// import Button from '../Button/Button';
// import css from './TaskForm.module.css';
// src/components/TaskForm/TaskForm.jsx

// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { addTask } from '../../redux/actions';

const TaskForm = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target; // Викликаємо генератор екшену // Відправляємо результат – екшен створення завдання

    // та передаємо текст завдання для поля payload
    dispatch(addTask(form.elements.text.value));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
