// src/components/TaskCounter/TaskCounter.jsx

// Імпортуємо хук
import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';

const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks); // На базі стану Redux отримуємо похідні дані

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};

export default TaskCounter;
