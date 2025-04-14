import React, { useCallback, useState } from "react";
import BackgroundWrapper from "../wrappersComponents/BackgroundWrapper";
import CardWrapper from "../wrappersComponents/CardWrapper";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
const Signin=()=>{
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')

    const onChangeUsername:React.ChangeEventHandler<HTMLInputElement> =useCallback((e)=>{
        setUsername(e.target.value)
    },[])
    const onChangePassword:React.ChangeEventHandler<HTMLInputElement> =useCallback((e)=>{
        setPassword(e.target.value)
    },[])
    const onClickSignIn=useCallback(()=>{
        console.log('sign in clicked');
        
    },[])
    return<BackgroundWrapper>
        <CardWrapper>
            <Heading name={'Sign In'}/>
            <Input placeholder="Enter Username" text="Username" value={username} onChange={onChangeUsername} />
            <Input placeholder="Enter password" text="Password" value={password} onChange={onChangePassword} />
            <Button btnTxt={'Sign In'} onClick={onClickSignIn}/>
        </CardWrapper>
    </BackgroundWrapper>
}

export default Signin;