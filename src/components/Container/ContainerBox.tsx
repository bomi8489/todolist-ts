import React from "react";
import InputList from "./InputList";
import {
    Containerbox,
    Contents,

} from "../Presenter/ContainerboxPresenter";

interface todoList {
    listvalue: string;
    id: number;
}

interface ContainerBoxProps {
    todoLists: todoList[];
    onRemove: Function;
}

function ContainerBox({ todoLists, onRemove }: ContainerBoxProps) {
    return (
        <Containerbox>
            <Contents>
                <h1>To Do List</h1>
                <ul>
                    <InputList
                        todoLists={todoLists}
                        onRemove={onRemove}
                    />
                </ul>
            </Contents>
        </Containerbox>
    )
}

export default React.memo(ContainerBox);