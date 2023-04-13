import { useDispatch, useSelector, } from "react-redux";
import { todoListState } from "../../store/index";
import { remove } from "../../store/todoSlice";
import { Todo } from "../../types";
import {
    Todolist,
    Button,
    Contentsvalue,
} from "../Presenter/InputlistPresenter"

const TodolistBox = () => {
    const todoLists = useSelector((todoList: todoListState) => todoList);
    const dispatch = useDispatch();

    const onRemove = (id: number) => {
        dispatch(remove(id));
    }

    return (
        <>
            {todoLists.todoReducer.map((toDo: Todo) => (
                <Todolist key={toDo.id}>
                    <Contentsvalue>{toDo.listvalue}</Contentsvalue>
                    <Button onClick={() => onRemove(toDo.id)}>삭제</Button>
                </Todolist>
            ))}
        </>
    )
}

export default TodolistBox;