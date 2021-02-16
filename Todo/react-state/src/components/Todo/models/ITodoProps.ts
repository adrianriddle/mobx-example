import { ITodo } from "../../../models/ITodo";

export interface ITodoProps {
	todo: ITodo;
	remove: (todo: ITodo) => void;
}