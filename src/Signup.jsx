import { Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import { useState } from "react";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div>
        <div style={{
            paddingTop:150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Welcome To Coursera. Signup below
            </Typography>
        </div>
        <div style={{display: "flex",justifyContent:"center"}}>
            <Card variant={"outlined"} style={{width:400, height:350}}> 
                    <TextField 
                    onChange={(e) => {
                    setEmail(e.target.value);
                    }}
                    fullWidth={true}
                    label="Username" 
                    variant="outlined" />
                    <br></br><br></br>

                    <TextField 
                    onChange={(e) => {
                    setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password" 
                    variant="outlined"/>
                    <br></br><br></br>

                    <Button 
                    variant="contained"
                    size = {"large"}
                    onClick = {() => {
                        function callback2(data) {
                            localStorage.setItem("username",email);
                            localStorage.setItem("password",password);
                        }
                        function callback1(res) {
                            res.json().then(callback2);
                        }
                        fetch("http://localhost:3000/admin/signup", {
                            method: "POST",
                            body: JSON.stringify({
                                username: email,
                                password: password
                            }),
                            headers: {
                                "Content-type" : "application/json"
                            }
                        }).then(callback1)
                    }}
                    >Signup</Button>
            </Card> 
        </div>
    </div>
}

export default Signup;