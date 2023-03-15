import React from "react"
import ContainerBox from "./ContainerBox"
import InputBox from "./InputBox"
import AdditionalBox from "./AdditionalBox"
import Todolist from "../Presenter/TodolistPresenter"

interface todoList {
    listvalue: string;
    id: number;
}

interface OutlineBoxProps {
    listvalue: string;
    todoLists: todoList[];
    onChange: Function;
    onCreate: Function;
    onRemove: Function;
}

function OutlineBox({ listvalue, todoLists, onChange, onCreate, onRemove }: OutlineBoxProps) {
    return (
        <Todolist>
            <AdditionalBox
            />
            <ContainerBox
                todoLists={todoLists}
                onRemove={onRemove}
            />
            <InputBox
                listvalue={listvalue}
                onChange={onChange}
                onCreate={onCreate}
            />
        </Todolist>
    )
}

export default React.memo(OutlineBox)