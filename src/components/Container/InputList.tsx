import React from "react";
import {
    Inputlist,
    Button,
    Contentsvalue,
} from "../Presenter/InputlistPresenter"

interface todoList {
    listvalue: string;
    id: number;
}

interface ListBoxProps {
    todoList: todoList;
    onRemove: Function;
}

interface InputListProps {
    todoLists: todoList[];
    onRemove: Function;
}

const ListBox = React.memo(({ todoList, onRemove }: ListBoxProps) => {
    return (
        <Inputlist>
            <Contentsvalue>{todoList.listvalue}</Contentsvalue>
            <Button onClick={() => onRemove(todoList.id)}>삭제</Button>
        </Inputlist>
    )
})

const InputList = React.memo(({ todoLists, onRemove }: InputListProps) => {
    return (
        <>
            {todoLists.map(todoList => (
                <ListBox todoList={todoList} key={todoList.id} onRemove={onRemove} />
            ))}
        </>
    )
})

export default React.memo(InputList)