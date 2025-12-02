import { useState } from "react";
import type { Todo } from "../entities/Todo";

interface TodoProps {
  todo: Todo;
}

// Componente que renderiza um card de todo individual
export default function TodoCard({ todo }: TodoProps) {
  // Estado local para controlar se o todo está marcado ou não
  const [checked, setChecked] = useState(todo.completed);

  return (
    <div>
      {todo.title}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)} // atualiza apenas localmente (não persiste)
      />
    </div>
  );
}