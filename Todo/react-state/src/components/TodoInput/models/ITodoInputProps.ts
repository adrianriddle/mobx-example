import { ITodo } from "../../../models/ITodo";

export interface ITodoInputProps {
	addTodo: (todo: ITodo) => void;
}