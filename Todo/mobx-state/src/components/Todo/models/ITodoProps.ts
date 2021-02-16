import { ITodo } from "../../../models/ITodo";
import { TodosStore } from "../../../stores/TodosStore";

export interface ITodoProps {
	todosStore?: TodosStore;
	todo: ITodo;
}