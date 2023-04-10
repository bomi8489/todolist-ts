import React from "react";
import {
    useDispatch,
    useSelector,
} from "react-redux";
import { todoListState } from "../../store/index";
import { remove } from "../../store/todoSlice";
import { ListBoxProps, Todo } from "../../types";
import {
    Inputlist,
    Button,
    Contentsvalue,
} from "../Presenter/InputlistPresenter"

const InputList = React.memo(() => {
    const todoLists = useSelector((todoList: todoListState) => todoList);
    return (
        <>
            {todoLists.todoReducer.map((toDo: Todo) => (
                <ListBox toDo={toDo} key={toDo.id} />
            ))}
        </>
    )
})

const ListBox = React.memo(({ toDo }: ListBoxProps) => {
    const dispatch = useDispatch();
    const onRemove = (id: number) => {
        dispatch(remove(id));
    }
    return (
        <Inputlist>
            <Contentsvalue>{toDo.listvalue}</Contentsvalue>
            <Button onClick={() => onRemove(toDo.id)}>삭제</Button>
        </Inputlist>
    )
})

export default React.memo(InputList)