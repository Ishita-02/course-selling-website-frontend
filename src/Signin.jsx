import { Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import { useState } from "react";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <div>
        <div style={{
            paddingTop:150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
        }}>
            <Typography color="black" variant={"h6"}>
                Welcome Back. Signin below
            </Typography>
        </div>
        <div style={{display: "flex",justifyContent:"center"}}>
            <Card variant={"outlined"} style={{width:400, height:350}}> 
                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    label="Username" 
                    variant="outlined" />
                    <br></br><br></br>

                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} 
                    label="Password" 
                    variant="outlined"/>
                    <br></br><br></br>

                    <Button 
                    variant="contained"
                    size = {"large"}
                    onClick = {() => {
                        function callback2(data) {
                            localStorage.setItem("token", data.token);
                            alert("Signin done");
                        }
                        function callback1(res) {
                            res.json().then(callback2);
                        }
                        fetch("http://localhost:3000/admin/login", {
                            method: "POST",
                            headers: {
                                "username": email,
                                "password": password,
                                "Content-type" : "application/json",
                                //"Authorization": "Bearer " + localStorage.setItem("token")
                            }
                        }).then(callback1);
                    }}
                    >Signin</Button>
            </Card> 
        </div>
    </div>
}

export default Signin;