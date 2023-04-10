import React from "react";
import InputList from "./InputList";
import {
    Containerbox,
    Contents,
} from "../Presenter/ContainerboxPresenter";

function ContainerBox() {
    return (
        <Containerbox>
            <Contents>
                <h1>To Do List</h1>
                <ul>
                    <InputList />
                </ul>
            </Contents>
        </Containerbox>
    )
}

export default React.memo(ContainerBox);