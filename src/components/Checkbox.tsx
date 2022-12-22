import { Check } from "phosphor-react";
import { useState } from "react";

interface CheckedProps {
  isCompleted: boolean;
  onComplete: (taskId: string) => void;
  id: string;
}

export const Checkbox = ({ isCompleted, onComplete, id }: CheckedProps) => {
  

  return (
    <div
      className={
        isCompleted
          ? `w-[18px] h-[18px] bg-purple_dark rounded-full cursor-pointer 
      flex item-center justify-center p-[2px] transition duration-[.4s] hover:bg-purple`
          : `w-[18px] h-[18px] 
      border border-blue rounded-full cursor-pointer hover:bg-blueHover
      flex item-center justify-center p-[2px] transition duration-[.4s]`
      }
      onClick={() => onComplete(id)}
    >
      {isCompleted && (
        <div>
          <Check size={14} color="#F2F2F2" />
        </div>
      )}
    </div>
  );
};
