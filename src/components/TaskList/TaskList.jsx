// import css from './TaskList.module.css';

// Імпортуємо хук
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
// Імпортуємо об'єкт значень фільтра
import statusFilters from '../../redux/constans';
import { getTasks } from '../../redux/selectors';
import { getStatusFilter } from '../../redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);

  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(getStatusFilter);

  // Обчислюємо масив завдань,
  // які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul>
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
