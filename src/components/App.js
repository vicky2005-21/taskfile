import React from 'react';
import Board from './Board';
import ControlPanel from './ControlPanel';
import LoadingAnimation from './LoadingAnimation';
import useKanban from '../hooks/useKanban';

const App = () => {
  const { tasks, grouping, setGrouping, sorting, setSorting, loading, error, sortTasks, theme, toggleTheme } = useKanban();

  if (loading) return <LoadingAnimation />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className={`app ${theme}`}>
      <ControlPanel
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Board tasks={tasks} sortTasks={sortTasks} />
    </div>
  );
};

export default App;