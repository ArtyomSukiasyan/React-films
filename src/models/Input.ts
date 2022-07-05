import { ChangeEventHandler } from "react";

export interface IInput {
    type: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}