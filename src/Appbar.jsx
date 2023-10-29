import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import {useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

function Appbar() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        function callback2(data) {
            if(data.username) {
                setUserEmail(data.username)
            }
        }
        function callback1(res) {
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    if(userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4
        }}>
            <div>
                <Typography>Coursera</Typography>
            </div>
            <div style={{marginRight: 10}}>
                <div>
                    {userEmail}
                </div>
                <Button
                    variant={"contained"}
                    onClick = {() => {
                        localStorage.setItem("token", null);
                        window.location = "/";
                }}
                >Logout</Button>
                <br></br><br></br>
            </div>
        </div>
    
    }

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div>
            <Typography>Coursera</Typography>
        </div>
        <div style={{marginRight: 10}}>
            <Button
            variant={"contained"}
            onClick = {() => {
                navigate("/signup")
            }}
            >Sign Up</Button><br></br><br></br>
            <Button
            variant={"contained"}
            onClick = {() => {
                navigate("/signin")
            }}>Sign In</Button>
        </div>
    </div>
}

export default Appbar;