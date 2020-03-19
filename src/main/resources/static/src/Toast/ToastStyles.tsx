import styled from "styled-components"

interface ToastDivInterface {
    divColor:string
}

export const ToastDiv = styled.div<ToastDivInterface> `
position:fixed;
top:1em;
right:1em;
border-radius:10px;
display:flex;
flex-direction:row;

background-color:${props => props.divColor};
padding:1em;
width:15em;
z-index:9999;

animation:signup-response 0.5s 1;
-webkit-animation:signup-response 0.5s 1;
animation-fill-mode: forwards;

animation-delay:5s;
-webkit-animation-delay:5s; /* Safari and Chrome */
-webkit-animation-fill-mode: forwards;

} 

@keyframes signup-response{
from {opacity :1;}
to {opacity :0;}
}

@-webkit-keyframes signup-response{
from {opacity :1;}
to {opacity :0;}
}
`

export const ToastHeader = styled.h1 `
font-size:1.5em;
margin:0;
`

export const ToastDescription = styled.p `
margin:0em;
`
export const TextDiv = styled.div `
display:flex;
flex-direction:column;
`

export const IconDiv = styled.div `
margin-right:1em;
font-size:2em;
align-self:center;
justify-self:center;
`