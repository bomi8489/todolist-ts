export interface Todo {
    id: number;
    listvalue: string;
}

export interface InputProps {
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    submit: React.FormEventHandler<HTMLFormElement>;
}

export interface ListBoxProps {
    toDo: Todo;
}