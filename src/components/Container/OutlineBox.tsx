import React from "react";
import ContainerBox from "./ContainerBox";
import InputBox from "./InputBox";
import AdditionalBox from "./AdditionalBox";
import Todolist from "../Presenter/TodolistPresenter";

const OutlineBox = () => {
    return (
        <Todolist>
            <AdditionalBox />
            <ContainerBox />
            <InputBox />
        </Todolist>
    )
}

export default React.memo(OutlineBox)