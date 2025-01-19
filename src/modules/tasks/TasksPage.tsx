import { useState } from "react";
/* Components */
import { Title } from "@/components/ui/title/Title";
import { Button } from "@/components/ui/button/Button";
import { TaskCard } from "@/components/modules/tasks/TastCard";
/* Data */
import { taskData } from "@/data/taskData";
import NewTaskModal from "@/components/modules/tasks/NewTaskModal";

interface Task {
  id: number;
  title: string;
  isSelected: boolean;
  isFavorite: boolean;
}

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(taskData);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSelect = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isSelected: !task.isSelected } : task
      )
    );
  };

  const handleFavorite = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="space-y-7">
        <div className="flex justify-between items-center">
          <Title size="h3">Tareas</Title>

          <Button onClick={() => setShowModal(true)}>Agregar Tarea</Button>
        </div>

        <div className="space-y-5">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              isSelected={task.isSelected}
              isFavorite={task.isFavorite}
              onSelect={handleSelect}
              onFavorite={handleFavorite}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <NewTaskModal
          onCloseModal={() => setShowModal(false)}
          showModal={showModal}
        />
      )}
    </>
  );
};

export default TasksPage;
