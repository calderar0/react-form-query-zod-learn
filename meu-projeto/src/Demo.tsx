import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addTodo, fetchTodos } from "./api/intex.ts";
import TodoCard from "./components/TodoCard.tsx";

export default function Demo() {
  const queryClient = useQueryClient(); // gerencia o cache das queries

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(""); // evita fazer requisições a cada tecla
  const [title, setTitle] = useState("");

  // Debounce: espera 500ms após o usuário parar de digitar para atualizar a busca
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer); // limpa o timer ao desmontar ou quando search muda
  }, [search]);

  // useQuery: busca dados e gerencia cache automaticamente
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos", { search: debouncedSearch }], // chave única para identificar esta query no cache
    queryFn: () => fetchTodos(debouncedSearch), // função que realmente busca os dados
    staleTime: Infinity, // dados nunca ficam "velhos" (stale)
    gcTime: 0, // garbage collection time - tempo que dados inativos ficam no cache antes de serem removidos
  });

  // useMutation: para operações que modificam dados (POST, PUT, DELETE)
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo, // função que adiciona o todo
    onSuccess: () => {
      // após adicionar com sucesso, invalida o cache de todos para re-buscar os dados atualizados
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <input
          type="text"
          placeholder="Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-100"
        />
      </div>
      <div>
        <input
        className="w-67"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
        className="ml-4"
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}