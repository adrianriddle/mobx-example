import { ITodo } from "../../../models/ITodo";

export interface ITodosProps {
	todos: ITodo[];
	removeTodo: (todo: ITodo) => void;
}