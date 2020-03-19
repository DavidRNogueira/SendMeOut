import React, { FC } from "react"
import { ToastDiv, ToastHeader, ToastDescription, IconDiv, TextDiv } from "./ToastStyles"
import { ToastPropsInterface } from "../Interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

let divColor:string = "grey"

const Toast:FC<ToastPropsInterface> = (props):JSX.Element => {
    if (props.type === "error"){
        divColor = "red"
    }
    if (props.type === "info"){
        divColor = "grey"
    }
    if (props.type === "success"){
        divColor = "green"
    }
    return (
        <ToastDiv divColor={divColor}>
            <IconDiv>
                {
                props.type === "success" && <FontAwesomeIcon icon={faCheck}/>
                }
                {
                props.type === "info" && <FontAwesomeIcon icon={faInfoCircle}/>
                }
                {
                props.type === "error" && <FontAwesomeIcon icon={faTimes}/>
                }
            </IconDiv>
            <TextDiv>
            <ToastHeader>
                {props.title}
            </ToastHeader>
            <ToastDescription>
                {props.description}
            </ToastDescription>
            </TextDiv>
        </ToastDiv>
    )
}

export default Toast;