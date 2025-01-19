import { cn } from "@/utils/general.util";
import { CiStar } from "react-icons/ci";
import { FaRegTrashAlt, FaStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Task {
  id        : number;
  title     : string;
  isSelected: boolean;
  isFavorite: boolean;
}

interface Props {
  task      : Task;
  isSelected: boolean;
  isFavorite: boolean;
  onSelect  : (id: number) => void;
  onFavorite: (id: number) => void;
  onDelete  : (id: number) => void;
}

export const TaskCard = (props: Props) => {
  const { task, isSelected, isFavorite, onSelect, onFavorite, onDelete } = props;
  return (
    <div
      className={cn(
        "border rounded-xl p-6 flex justify-between items-center gap-5",
        isSelected ? "bg-primary" : "bg-light-100 border-secondary/20"
      )}
    >
      <div className="flex items-center gap-5">
        <input
          id={`checkbox-${task.id}`}
          type="checkbox"
          className="w-6 h-6 bg-transparent border-2 border-gray-400 focus:outline-none checked:bg-transparent checked:border-blue-500"
          checked={isSelected}
          onChange={() => onSelect(task.id)}
        />
        <label
          htmlFor={`checkbox-${task.id}`}
          className={cn(
            "font-medium",
            isSelected ? "text-light-100" : "text-dark-100/80"
          )}
        >
          {task.title}
        </label>
      </div>

      {isSelected ? (
        <button
          className={cn(
            "bg-light-100/20 py-3 px-5 rounded-lg",
            isSelected ? "text-light-100" : "text-dark-100/70"
          )}
          onClick={() => onDelete(task.id)}
        >
          <FaRegTrashAlt />
        </button>
      ) : (
        <div className="flex items-center gap-5">
          {isFavorite ? (
            <FaStar
              className="text-orange-500 cursor-pointer"
              size={30}
              onClick={() => onFavorite(task.id)}
            />
          ) : (
            <CiStar
              className="text-gray-400 cursor-pointer"
              size={30}
              onClick={() => onFavorite(task.id)}
            />
          )}

          <IoCloseCircleOutline size={30} className="text-gray-400" />
        </div>
      )}
    </div>
  );
};
