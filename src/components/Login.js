import React  , {useEffect} from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import {useGlobalContext} from '../context'
import {Redirect} from 'react-router-dom'
import {useHistory,Link} from 'react-router-dom'

export default function Login() {
    const {loginEmail} = useGlobalContext();
    const {loginPassword} = useGlobalContext();
    const {onEmailChange} = useGlobalContext();
    const {onPasswordChange} = useGlobalContext();
    const {login} = useGlobalContext();
    const {loggedIn} = useGlobalContext();
    const {GuestLogin} = useGlobalContext();
    let history = useHistory();
    const loggIn = (event) => {
        login(event);
        
    }
    useEffect(() => {
        if(loggedIn){
            console.log("pushed");
            history.push('./home')
        }
        
    }, [loggedIn])
    return (
        <Row  className="justify-content-center">
            <Col sm={8}lg={5}>
                <div style={{
                    marginTop:"10%",
                    marginBottom:"10%",
                    textAlign:"center",
                    backgroundImage:"linear-gradient(to right, #B993D6, #8CA6DB)",
                    padding:"40% 25% 10% 25%",
                    borderRadius:"30%"
                    }}>
                    <Form type="POST" onSubmit={loggIn}>
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control style={{borderRadius:"20%",textAlign:"center"}} type="email" placeholder="Enter email"  value={loginEmail} onChange={(event)=>{onEmailChange(event)}}  />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                     
                        <Form.Control style={{borderRadius:"20%",textAlign:"center"}} type="password" placeholder="Password" value={loginPassword} onChange={(event)=>{onPasswordChange(event)}}  />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" >
                        LOGIN
                    </Button>
                    <Link to='/home' onClick={()=>{GuestLogin()}}><Button btn  variant="outline-info ">log in As Guest</Button></Link>
                    

                </Form>
                <div style={{marginTop:"15%"}}>
                <Link to='/signup' ><Button variant="outline-warning">SIGN UP</Button></Link>
                
                </div>
                
                </div>
            </Col>
        </Row>
    )
}
