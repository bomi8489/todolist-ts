import React from "react";
import {
    useDispatch,
    useSelector,
} from "react-redux";
import { remove, todoListState } from "../../store";
import { ListBoxProps } from "../../types";
import {
    Inputlist,
    Button,
    Contentsvalue,
} from "../Presenter/InputlistPresenter"

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

const InputList = React.memo(() => {
    const todoList = useSelector((todoList: todoListState) => todoList);
    return (
        <>
            {todoList.map(toDo => (
                <ListBox toDo={toDo} key={toDo.id} />
            ))}
        </>
    )
})

export default React.memo(InputList)