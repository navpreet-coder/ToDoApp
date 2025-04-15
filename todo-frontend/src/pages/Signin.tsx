import React, { useCallback, useState } from "react";
import BackgroundWrapper from "../wrappersComponents/BackgroundWrapper";
import CardWrapper from "../wrappersComponents/CardWrapper";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import RedirectTo from "../components/RedirectTo";
import Path from "../constants/Path";
import ErrorMsg from "../components/ErrorMsg";
import { useNavigate } from "react-router-dom";
const Signin=()=>{
    const navigate = useNavigate();
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[errorMsg,setErrorMsg] = useState('')

    const onChangeUsername:React.ChangeEventHandler<HTMLInputElement> =useCallback((e)=>{
        setUsername(e.target.value)
    },[])
    const onChangePassword:React.ChangeEventHandler<HTMLInputElement> =useCallback((e)=>{
        setPassword(e.target.value)
    },[])
    const onClickSignIn=useCallback(()=>{
        console.log('sign in clicked',localStorage.getItem('token'));
        setErrorMsg('')
        if(username?.trim()=='' || password?.trim()==''){
            setErrorMsg('Invalid Username/Password!')
            return
        }
        //hit api for signin
        console.log('username and pwd ',username,password);
        if(username=='nav' && password=='test'){
            console.log('token set');
            
            localStorage.setItem('token','testtoken')
            navigate(Path.HOME)
        }
        
    },[username,password])
    return<BackgroundWrapper>
        <CardWrapper>
            <Heading name={'Sign In'}/>
            <Input placeholder="Enter Username" text="Username" value={username} onChange={onChangeUsername} />
            <Input placeholder="Enter password" text="Password" value={password} onChange={onChangePassword} />
            <ErrorMsg errorMsg={errorMsg}/>
            <Button btnTxt={'Sign In'} onClick={onClickSignIn}/>
            <RedirectTo txt1={"Don't have an Account?"} txt2={'SignUp'} to={Path.SIGNUP}/>
        </CardWrapper>
    </BackgroundWrapper>
}

export default Signin;