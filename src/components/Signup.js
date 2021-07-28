import React , {useEffect} from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import {useGlobalContext} from '../context'
import {useHistory,Link} from 'react-router-dom'
export default function Signup() {
    let history = useHistory();
    const {signupEmail} = useGlobalContext();
    const {signupPassword} = useGlobalContext();
    const {onEmailChangeSU} = useGlobalContext();
    const {onPasswordChangeSU} = useGlobalContext();
    const {Signup} = useGlobalContext();
    const {signedUp} = useGlobalContext();
    const SignedUp = (event) => {
        Signup(event)
        
    }
    useEffect(() => {
        
        if(signedUp){
            console.log("signed up");
            history.push('./')
        }
    }, [signedUp])
    return (
        <Row onSubmit={SignedUp} className="justify-content-center">
            <Col sm={8} lg={5}>
                <div style={{
                    marginTop:"10%",
                    marginBottom:"10%",
                    textAlign:"center",
                    backgroundImage:"linear-gradient(to right, #B993D6, #8CA6DB)",
                    padding:"40% 25% 10% 25%",
                    borderRadius:"30%"
                    }}>
                    <Form type="POST">
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control style={{borderRadius:"20%",textAlign:"center"}} type="email" placeholder="Enter email"  value={signupEmail} onChange={(event)=>{onEmailChangeSU(event)}}  />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                       
                        <Form.Control style={{borderRadius:"20%",textAlign:"center"}} type="password" placeholder="Password" value={signupPassword} onChange={(event)=>{onPasswordChangeSU(event)}}  />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
                <div style={{marginTop:"15%"}}>
                <Link to="/"><Button variant="warning">Already a user</Button></Link>
                </div>
                
                </div>
            
            </Col>
        </Row>
    )
}
