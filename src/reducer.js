
export const Reducer = (state,action) => {
    if(action.type==="DISPLAY_DATA"){
        const {rankingData,countriesData,factorsData} = action.payload;
        return({...state,rankings:rankingData,countries:countriesData,factors:factorsData})
    }
    if(action.type==="DISPLAY_FACTORS"){
        return({...state,factors:action.payload})
    }
    if(action.type==="EMAIL_CHANGE"){
        return({...state,loginEmail:action.payload})
    }
    if(action.type==="PASSWORD_CHANGE"){
        return({...state,loginPassword:action.payload})
    }
    if(action.type==="EMAIL_CHANGE_SU"){
        return({...state,signupEmail:action.payload})
    }
    if(action.type==="PASSWORD_CHANGE_SU"){
        return({...state,signupPassword:action.payload})
    }
    if(action.type==="LOGOUT"){
        return({...state,loggedIn:false})
    }
    if(action.type==="GUEST_LOGIN"){
        return({...state,guest:true})
    }
    if(action.type==="SEARCH"){
        return({...state,selectedvalues:action.payload})
    }
    if(action.type==="YEAR"){
        return({...state,year:action.payload})
    }
    if(action.type==="FACTORS_URL"){
        let newUrl = 'http://131.181.190.87:3000/factors/'+action.payload;
        return({...state,factorUrl:newUrl})
    }
    if(action.type==="LOGIN"){
        try {
            const {token}=action.payload;
            console.log(token);
            if(token){
               
                return({...state,loggedIn:true,loginEmail:"",loginPassword:"",token:token,guest:false})
            }else{
                
                return({...state,loggedIn:false,token:action.payload})
            }
        } catch (error) {
            console.log(error);
        }
        
        
    }
    if(action.type==="SIGNUP"){
        try {
            
            if(action.payload==="User created"){
               
                return({...state,signedUp:true,signupEmail:"",signupPassword:""})

            }else{
                
                return({...state,signedUp:false})
            }
        } catch (error) {
            console.log(error);
        }
        
        return({...state})
    }
    return {...state}
}