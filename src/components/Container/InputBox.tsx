import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/todoSlice";
import {
    Inputbox,
    Subtitle,
    Input,
} from "../Presenter/InputboxPresenter"

const InputBox = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.target.value.length > 20) ? setText(prev => prev) : setText(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(add(text));
        setText("");
    }

    return (
        <Inputbox>
            <Subtitle>아래 입력칸에 오늘 할일을 입력해주세요</Subtitle>
            <form onSubmit={onSubmit}>
                <Input
                    name="inputbox"
                    onChange={onChange}
                    value={text}
                />
            </form>
        </Inputbox>
    )
}

export default InputBox;