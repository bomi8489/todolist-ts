import React from "react";
import {
    Inputbox,
    Subtitle,
    Input,
    Button
} from "../Presenter/InputboxPresenter"

interface InputBoxProps {
    listvalue: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onCreate: React.FormEventHandler<HTMLFormElement>;
}

const InputBox = React.memo(({ listvalue, onChange, onCreate }: InputBoxProps) => {
    return (
        <Inputbox>
            <Subtitle>아래 입력칸에 오늘 할일을 입력해주세요</Subtitle>
            <form onSubmit={onCreate}>
                <Input
                    name="inputbox"
                    onChange={onChange}
                    value={listvalue}
                    submit={onCreate}
                />
                <Button type="submit"></Button>
            </form>

        </Inputbox>
    )
})

export default React.memo(InputBox);