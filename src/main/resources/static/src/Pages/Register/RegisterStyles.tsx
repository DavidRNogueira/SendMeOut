import styled from "styled-components"
import { GLOBAL_GREY, GLOBAL_GREEN } from "../../Constants"

export const CreateAccountH1 = styled.h1 `
text-align:center;
font-size:3em;
`
export const HeaderDiv = styled.div `
width:90%;
margin:auto;
`
export const HeaderHR = styled.hr `
border-color:${GLOBAL_GREY};
`

export const FormDiv = styled.div `
display:flex;
flex-direction:row;
margin:auto;
justify-content:space-evenly;
`
export const StyledInput = styled.input `
width:20em;
margin:0.5em 0 0.5em 0;
`

export const StyledLabel = styled.label `
font-weight: bold;
`

export const SectionDiv = styled.div `
display:flex;
flex-direction:column;
margin:1em;
`

export const SectionHeader = styled.h1 `
text-align:center;
`

export const RegisterBtn = styled.button `
background-color: ${GLOBAL_GREEN};
border:0;
padding: 0.5em 1em 0.5em 1em;
font-size:1.5em;
border-radius:10px;
margin-top:1em;
margin-bottom:1em;
`
export const BtnDiv = styled.div `
display:flex;
justify-content:center;
`

export const GreyDiv = styled.div `
background-color:${GLOBAL_GREY};
width:90%;
margin:auto;
border-radius:10px;
margin-bottom:3em;
`
export const Required = styled.span `
color:red;
`