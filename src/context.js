import React, {useContext,useReducer,useEffect} from 'react'
import {Reducer} from './reducer'

const rankingsUrl = "http://131.181.190.87:3000/rankings";
const countriesUrl = `http://131.181.190.87:3000/countries`;
let factorsUrl = "http://131.181.190.87:3000/factors/2020/";
const LoginUrl = "http://131.181.190.87:3000/user/login";
const SignupUrl = "http://131.181.190.87:3000/user/register";
const AppContext = React.createContext();
const initialState = {
    rankings:[],
    countries:[],
    factors:[],
    loading:true,
    loginEmail:"",
    loginPassword:"",
    signupEmail:"",
    signupPassword:"",
    loggedIn:false,
    signedUp:false,
    guest:false,
    token:null,
    selectedvalues:"",
    year:"2020",
    factorUrl:factorsUrl,
}
export const AppComponent = ({children}) => {
    
    const [state, dispatch] = useReducer(Reducer, initialState);
    const onEmailChange = (e) => {
        dispatch({type:"EMAIL_CHANGE",payload:e.target.value})
    }
    const onPasswordChange = (e) => {
        dispatch({type:"PASSWORD_CHANGE",payload:e.target.value})
    }
    const onEmailChangeSU = (e) => {
        dispatch({type:"EMAIL_CHANGE_SU",payload:e.target.value})
    }
    const onPasswordChangeSU = (e) => {
        dispatch({type:"PASSWORD_CHANGE_SU",payload:e.target.value})
    }
    const GuestLogin = () => {
        dispatch({type:"GUEST_LOGIN"})
    }
    const setselectedValues = (label) => {
        dispatch({type:"SEARCH",payload:label})
    }
    const setYear = (year) => {
        dispatch({type:"YEAR",payload:year})
    }
    const setFactorUrl = (year) => {
        dispatch({type:"FACTORS_URL",payload:year})
    }
    const fetchData = async () => {
        const response1 =  await fetch(rankingsUrl);
        const rankingData = await response1.json();
        const response2 =  await fetch(countriesUrl);
        const countriesData = await response2.json();
       
        dispatch({type:"DISPLAY_DATA",payload:{rankingData,countriesData}})//chance of error
    }

    ///dynamically get token//*got
    const fetchFactors = async () => {
        const response3 =  await fetch(state.factorUrl,{
            method:"GET",
            headers: {'Authorization': `Bearer ${state.token}`,
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true },
            });
            //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZmlAZ21haWwuY29tIiwiZXhwIjoxNjIwMDY2NjY5LCJpYXQiOjE2MTk5ODAyNjl9.feOEYjTfawjAOivV7cP1p63q8Cw7TwD4q6Yhi5GpFz0
            const factorsData = await response3.json();
            dispatch({type:"DISPLAY_FACTORS",payload:factorsData})
    }
    const login = async (e) => {
        e.preventDefault();
        const payload = {
            "email": state.loginEmail,
            "password": state.loginPassword,
        }
        const response =  await fetch(LoginUrl,{  
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(payload)
        });
        const data = await response.json();
         console.log(data);
        dispatch({type:"LOGIN",payload:data})
    }
    const Signup = async (e) => {
        e.preventDefault();
        const payload = {
            "email": state.signupEmail,
            "password": state.signupPassword,
        }
        const response =  await fetch(SignupUrl,{  
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(payload)
        });
        const data = await response.json();
         
         const {message}=data;
         
         
         dispatch({type:"SIGNUP",payload:message})
    }
    const Logout = () => {
        dispatch({type:"LOGOUT"})
    }
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        fetchFactors();
    }, [state.year])
    
    return(
        <AppContext.Provider value={{...state,login,setFactorUrl,setYear,onEmailChange,onPasswordChange,onEmailChangeSU,setselectedValues,onPasswordChangeSU,Signup,Logout,GuestLogin}}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return(
        useContext(AppContext)
    )
}