import { useState, useEffect } from 'react';
import { fetchTasks } from '../utils/api';

const useKanban = () => {
  const [tasks, setTasks] = useState([]);
  const [grouping, setGrouping] = useState(() => localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(() => localStorage.getItem('sorting') || 'priority');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const data = await fetchTasks();
        setTasks(data.tickets);
        setError(null);
      } catch (err) {
        setError('Failed to fetch tasks');
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem('sorting', sorting);
  }, [sorting]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const groupTasks = () => {
    const grouped = {};
    tasks.forEach(task => {
      const key = grouping === 'status' ? task.status :
                  grouping === 'user' ? task.userId :
                  grouping === 'priority' ? getPriorityLabel(task.priority) :
                  'Other';
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(task);
    });
    return grouped;
  };

  const sortTasks = (taskList) => {
    return taskList.sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  const getPriorityLabel = (priority) => {
    const labels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    return labels[priority] || 'Unknown';
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return {
    tasks: groupTasks(),
    grouping,
    setGrouping,
    sorting,
    setSorting,
    loading,
    error,
    sortTasks,
    theme,
    toggleTheme
  };
};

export default useKanban;