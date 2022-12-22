import { PlusCircle } from "phosphor-react";
import { useState } from "react";

interface InputProps {
  onTasks: (description: string) => void;
}

export const Input = ({ onTasks }: InputProps) => {
  const [text, setText] = useState<string>('');

  return (
    <div className="flex gap-2 item-center justify-center">
      <div className="h-[3.375rem] flex-1 flex items-center  bg-gray_500 rounded-lg border border-gray_700 ">
        <input
          type="text"
          className="h-[inherit] w-full p-4 bg-transparent outline-none 
          border-transparent rounded-lg border 
          focus:border-purple_dark
          transition-all duration-[.2s]
          text-base text-gray_100 placeholder:text-gray_300"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <button
        onClick={() => onTasks(text)}
        className="max-h-[52px] p-4 bg-blue_dark flex gap-2 items-center 
        justify-center rounded-lg border-none text-gray_100 font-bold text-sm hover:bg-blue transition duration-[.4s]"
      >
        Criar
        <PlusCircle size={18} color="#F2F2F2" />
      </button>
    </div>
  );
};
