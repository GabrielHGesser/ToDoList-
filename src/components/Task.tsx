import { Trash } from "phosphor-react";
import { useState } from "react";
import { ITasks } from "../App";
import { Checkbox } from "./Checkbox";

interface ITask {
  task: ITasks;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export const Task = ({ task, onComplete, onDelete }: ITask) => {
  return (
    <div className="p-4 flex items-start justify-between gap-3 h-[72px] bg-gray_500 border border-gray_400 rounded-lg">
      <div className="w-[24px] h-[24px]">
        <Checkbox
          id={task.id}
          isCompleted={task.completed}
          onComplete={onComplete}
        />
      </div>
      <div className="flex-1 h-[40px]">
        <p
          className={`text-sm  ${
            task.completed ? `line-through text-gray_300` : `text-gray_100`
          } `}
        >
          {task.description}
        </p>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="group w-[24px] h-[24px] flex item-center justify-center p-[4px] hover:bg-gray_400 rounded-[4px] "
      >
        <Trash size={16} className="text-gray_300 group-hover:text-danger" />
      </button>
    </div>
  );
};
