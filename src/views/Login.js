import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, FormGroup, Input, Label } from "reactstrap";

function Login() {
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;
    const navigate = useNavigate();


    const submit = () => {
        console.log(email); console.log(password); navigate("admin/dashboard"); 
    };

    return (
        <div className="login">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <Card className="my-2 text-center border border-dark" style={{ width: "20rem", top: "20vh" }}>
                    <CardTitle tag="h4">Admin Form</CardTitle>
                    <CardBody>
                        <FormGroup>
                            <Label for="exampleEmail">Email address</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Enter email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="Password"
                            />
                        </FormGroup>
                        <Button color="primary" onClick={submit} >
                            Submit
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Login;