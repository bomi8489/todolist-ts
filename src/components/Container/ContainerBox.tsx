import TodolistBox from "./TodolistBox";
import {
    Containerbox,
    Contents,
} from "../Presenter/ContainerboxPresenter";

const ContainerBox = () => {
    return (
        <Containerbox>
            <Contents>
                <h1>To Do List</h1>
                <ul>
                    <TodolistBox />
                </ul>
            </Contents>
        </Containerbox>
    )
}

export default ContainerBox;