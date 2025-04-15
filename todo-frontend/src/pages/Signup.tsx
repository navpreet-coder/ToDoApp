import { useCallback, useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import RedirectTo from "../components/RedirectTo";
import BackgroundWrapper from "../wrappersComponents/BackgroundWrapper";
import CardWrapper from "../wrappersComponents/CardWrapper";
import Path from "../constants/Path";
import ErrorMsg from "../components/ErrorMsg";
type updatValTypes = (
    key: string,
    value: string
) => void;
type DataKey = 'name' | 'email' | 'password' | 'confirmPassword';
const Signup = () => {
    const[errorMsg,setErrorMsg] = useState('')
    const [data, setData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
    })
    // const UpdateValues: updatValTypes = useCallback((key, value) => {
        const UpdateValues = useCallback((key:DataKey, value:string) => {
        // console.log('see', key, value, data[key]);
        setData(prev=>({
            ...prev,
            [key]:value
        }))
    }, [])
    const onClickSignUp = useCallback(() => {
        if(data?.email?.trim()=='' || data?.name?.trim()=='' ||data?.password?.trim()=='' || data?.confirmPassword?.trim()=='' ){
            setErrorMsg('fill all details first!')
            return
        }
        if(data?.password!== data?.confirmPassword){
            setErrorMsg('Both Password should be same!')
            return
        }
    }, [data])
    return <BackgroundWrapper>
        <CardWrapper>
            <Heading name={'Sign Up'} />
            <Input placeholder="Enter your Name" text="Name" value={data.name} onChange={v => UpdateValues('name', v.target.value)} />
            <Input placeholder="Enter email-id" text="Email-ID" value={data.email} onChange={v => UpdateValues('email', v.target.value)} />
            <Input placeholder="Enter Password" text="Password" value={data.password} onChange={v => UpdateValues('password', v.target.value)} />
            <Input placeholder="Confirm Password" text="Confirm Password" value={data.confirmPassword} onChange={v => UpdateValues('confirmPassword', v.target.value)} />
            <ErrorMsg errorMsg={errorMsg}/>
            <Button btnTxt={'Sign Up'} onClick={onClickSignUp} />
            <RedirectTo txt1={"Already have an Account?"} txt2={'SignIn'} to={Path.SIGNIN} />

        </CardWrapper>
    </BackgroundWrapper>
}

export default Signup;