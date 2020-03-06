import React, {FC, useState} from "react"
import LogoImage from "../../Images/SendMeOutLogo.svg"
import { 
    CreateAccountH1,
    HeaderDiv,
    HeaderHR,
    FormDiv, 
    StyledInput, 
    StyledLabel, 
    SectionDiv, 
    SectionHeader, 
    RegisterBtn, 
    GreyDiv, 
    BtnDiv,
    Required 
} from "./RegisterStyles"
import axios from "axios"

const Register:FC = ():JSX.Element => {
    const [errors, setErrors] = useState<string[]>([])
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null)
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);
    const [organization, setOrganization] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [phone, setPhone] = useState<string | null>(null);
    const [gender, setGender] = useState<string | null>("Male");
    const [title, setTitle] = useState<string | null>(null);
    const [addressOne, setAddressOne] = useState<string | null>(null);
    const [addressTwo, setAddressTwo] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [state, setState] = useState<string | null>(null);
    const [zip, setZip] = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);

    const handleSubmit = async () => {
        const currentErrors:string[] = [];

        if (!username){
            currentErrors.push("username");
        }
        if (!password){
            currentErrors.push("password");
        }
        if (!firstName){
            currentErrors.push("firstName");
        }
        if (!lastName){
            currentErrors.push("lastName");
        }
        if (!email){
            currentErrors.push("email");
        }
        if (!phone){
            currentErrors.push("phone");
        }
        if (!addressOne){
            currentErrors.push("addressOne");
        }
        if (!city){
            currentErrors.push("city");
        }
        if (!state){
            currentErrors.push("state");
        }
        if (!country){
            currentErrors.push("country");
        }
        if (!zip){
            currentErrors.push("zip");
        }
        if (currentErrors.length > 0){
            setErrors(currentErrors);
            return;
        }
        

        const payload = {
            username,
            password,
            firstName,
            lastName,
            email,
            gender,
            organization,
            addressOne,
            addressTwo,
            city,
            state,
            country,
            title,
            phone,
            zip,
        }

       fetch("/auth/create-new-user" , {
               method: "POST",
               credentials:"same-origin",
               headers: {
               "Content-Type": "application/json"
               },
               body: JSON.stringify(payload)
           })
    }

    

    return (
        <>
        <HeaderDiv>
            <img src={LogoImage} alt="logo"/>
            <HeaderHR/>
        </HeaderDiv>
        <CreateAccountH1>Create Account</CreateAccountH1>
        <GreyDiv>
            <FormDiv>
                <SectionDiv>
                    <SectionHeader>Basic Info</SectionHeader>
                    <StyledLabel>Username <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setUsername(event.currentTarget.value)}}/>
                    {
                        errors.includes("username") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>Password<Required>*</Required></StyledLabel>
                    <StyledInput type="password" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setPassword(event.currentTarget.value)}}/>
                    {
                        errors.includes("password") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>First Name <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setFirstName(event.currentTarget.value)}}/>
                    {
                        errors.includes("firstName") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>Last Name <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setLastName(event.currentTarget.value)}}/>
                    {
                        errors.includes("lastName") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>Organization</StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setOrganization(event.currentTarget.value)}}/>
                    <StyledLabel>Email <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setEmail(event.currentTarget.value)}}/>
                    {
                        errors.includes("email") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>Phone Number <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setPhone(event.currentTarget.value)}}/>
                    {
                        errors.includes("phone") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>Gender <Required>*</Required></StyledLabel>
                    <select id="gender" onChange={(event:React.ChangeEvent<HTMLSelectElement>)=>{setGender(event.currentTarget.value)}}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <StyledLabel>Title</StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setTitle(event.currentTarget.value)}}/>
                </SectionDiv>
                <SectionDiv>
                    <SectionHeader>Address</SectionHeader>
                    <StyledLabel>Street Address 1 <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setAddressOne(event.currentTarget.value)}}/>
                    {
                        errors.includes("addressOne") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>Street Address 2</StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setAddressTwo(event.currentTarget.value)}}/>
                    <StyledLabel>City <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setCity(event.currentTarget.value)}}/>
                    {
                        errors.includes("city") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>State <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setState(event.currentTarget.value)}}/>
                    {
                        errors.includes("state") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>ZIP Code <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setZip(event.currentTarget.value)}}/>
                    {
                        errors.includes("zip") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>Country <Required>*</Required></StyledLabel>
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setCountry(event.currentTarget.value)}}/>
                    {
                        errors.includes("country") && <Required>This field is required.</Required>
                    }
                </SectionDiv>
            </FormDiv>
            <BtnDiv>
                <RegisterBtn onClick={handleSubmit}>Create Account</RegisterBtn>
            </BtnDiv>
        </GreyDiv>
                </>
    )
}

export default Register;