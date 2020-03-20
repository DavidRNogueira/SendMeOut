import React, {FC, useState, useContext} from "react"
import LogoImage from "../../Images/SendMeOutLogo.svg"
import { 
    HeaderDiv,
    HeaderContent,
    GreyDiv,
    ChooseOptionBtn,
    ChooseOptionDiv,
    BackBtn,
    CreateAccountH1,
    FormDiv,
    SectionDiv,
    SectionHeader,
    StyledLabel,
    Required,
    StyledInput,
    BtnDiv,
    RegisterBtn,
    LoginOptionDiv,
    LoginOption,
    LoginHeader,
    HeaderHR,
    LoginDiv,
    VerticalLine,
    ClickHere,
} from "./AccountStyles"
import Toast from "../../Toast/Toast"
import { toast, ToastContainer } from "react-toastify"
import {history, UserContext} from "../../App"
import axios from "axios"

const Account:FC = ():JSX.Element => {

    const context = useContext(UserContext)
    const [activePage , setActivePage] = useState<number>(0)
    const [errors, setErrors] = useState<string[]>([])
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null)
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);
    const [organization, setOrganization] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [phone, setPhone] = useState<number | null>(null);
    const [gender, setGender] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [addressOne, setAddressOne] = useState<string | null>(null);
    const [addressTwo, setAddressTwo] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [state, setState] = useState<string | null>(null);
    const [zip, setZip] = useState<number | null>(null);
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
            zip
        }

        const response = await axios.post("/reg/create-new-user", payload);
            if ( response.status === 200){
                history.push("/")
                toast(<Toast title="Success!" description="Your account has been created." type="success"/>, {})
            }
    }

    const handleLogin = async () => {
            const currentErrors:string[] = []
        
            const payload = {
                username,
                password
            }

            const response = await axios.post( "/auth/login", payload)
                if (response.status === 200){
                    alert("LOGGED IN")
                    context.dispatch({
                        type: "SET_USER",
                        payload: response.data
                    })
                } else {
                    currentErrors.push("login")
                    setErrors([...errors, ...currentErrors])
                } 
    }

    return (
        <>
        <ToastContainer/>
        <HeaderDiv>
            <HeaderContent>
                <img src={LogoImage} alt="logo"/>
                <BackBtn to="/">
                    Back
                </BackBtn>
            </HeaderContent>
            <HeaderHR/>
        </HeaderDiv>
        <GreyDiv>
        {
            activePage === 0 && 
            <ChooseOptionDiv>
                <ChooseOptionBtn onClick={(e:any) => setActivePage(1)}>Login</ChooseOptionBtn>
                <VerticalLine/>
                <ChooseOptionBtn onClick={(e:any) => setActivePage(2)}>Register</ChooseOptionBtn>
            </ChooseOptionDiv>
            
        }
        {
            activePage === 1 && 
            <LoginDiv>
              <LoginHeader>Login</LoginHeader>
              <SectionDiv>
                <StyledLabel>Username</StyledLabel>  
                <StyledInput type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setUsername(e.currentTarget.value)}}/>
                <StyledLabel>Password</StyledLabel>  
                <StyledInput type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPassword(e.currentTarget.value)}}/>
                {
                    errors.includes("login") && <Required>Your information does not match our records.</Required>
                }
              </SectionDiv>
              <RegisterBtn onClick={handleLogin}>Login</RegisterBtn>
              <LoginOptionDiv>
                    <LoginOption>Need to create a SendMeOut account?<ClickHere onClick={(e:any) => {setActivePage(2)}}>Click Here</ClickHere></LoginOption>
                </LoginOptionDiv>
            </LoginDiv>
        }
        {
            activePage === 2 && 
        <>
        <CreateAccountH1>Create Account</CreateAccountH1>
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
                    <StyledInput type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                        const number = parseInt(event.currentTarget.value);
                        setPhone(number)
                    }}/>
                    {
                        errors.includes("phone") && <Required>This field is required.</Required>
                    }
                    <StyledLabel>Gender <Required>*</Required></StyledLabel>
                    <select id="gender" onChange={(event:React.ChangeEvent<HTMLSelectElement>)=>{setGender(event.currentTarget.value)}}>
                        <option value="" selected disabled hidden>Select gender</option>
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
                    <StyledInput type="number" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                        const number = parseInt(event.currentTarget.value);
                        setZip(number);
                        }}/>
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
                <RegisterBtn onClick={handleSubmit}>Register</RegisterBtn>
                <LoginOptionDiv>
                    <LoginOption>Already have a SendMeOut account?<ClickHere onClick={(e:any) => {setActivePage(1)}}>Click Here</ClickHere></LoginOption>
                </LoginOptionDiv>
            </BtnDiv>
        </>
        }
        </GreyDiv>
       
        </>
    )
}

export default Account;