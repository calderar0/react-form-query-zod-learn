import type { Todo } from "../entities/Todo";

// Array mock que simula um banco de dados
// Os dados ficam apenas na memória e são perdidos ao recarregar a página
const todos = [
  {
    id: 1,
    title: "Learn HTML",
    completed: false,
  },
  {
    id: 2,
    title: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Javascript",
    completed: false,
  },
  {
    id: 4,
    title: "Learn React",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Next.js",
    completed: false,
  },
];

/**
 * Mock function that mimics fetching todos from a database.
 * Simula uma chamada assíncrona com delay de 1 segundo
 */
export const fetchTodos = async (query = ""): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simula delay de rede

  console.log("fetched todos");

  // Filtra os todos baseado na query de busca
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  // Uncomment the line below to trigger an error
  // throw new Error(); // simula erro de API

  return [...filteredTodos]; // retorna cópia do array
};

/**
 * Mock function that mimics adding a todo to a database.
 * Adiciona um novo todo no array em memória
 */
export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simula delay de rede

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  // Todo is stored in memory and cleared on page reload
  todos.push(newTodo); // adiciona no array mock

  return newTodo;
};