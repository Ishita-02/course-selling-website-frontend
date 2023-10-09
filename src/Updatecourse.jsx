import { Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";

function Updatecourse() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [published, setPublished] = useState("");
    return <div>
        <div style={{
            paddingTop:150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Update course
            </Typography>
        </div>
        <div style={{display: "flex",justifyContent:"center"}}>
            <Card variant={"outlined"} style={{width:500, height:500}}> 
                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                    label="Id" 
                    variant="outlined" />
                    <br></br><br></br>

                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    label="title" 
                    variant="outlined" />
                    <br></br><br></br>

                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    label="description" 
                    variant="outlined"/>
                    <br></br><br></br>

                    <TextField 
                    fullWidth={true}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    label="price" 
                    variant="outlined"/>
                    <br></br><br></br>


                    <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Published</FormLabel>
                    <RadioGroup
                    onChange={(e) => {
                        setPublished(e.target.value);
                    }}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="true"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="True" control={<Radio />} label="True" />
                        <FormControlLabel value="False" control={<Radio />} label="False" />
                    </RadioGroup>
                    </FormControl>

                    <Button 
                    variant="contained"
                    size = {"large"}
                    onClick = {() => {
                        function callback2(data) {
                            console.log(data);
                        }
                        function callback1(res) {
                            res.json().then(callback2);
                        }
                        const baseUrl = 'http://localhost:3000/admin/courses';
                        fetch(`${baseUrl}/${id}`, {
                        method: "PUT",
                        body: JSON.stringify({ 
                            title: title,
                            description: description,
                            price: price,
                            published: published
                        }),
                        headers: {
                            "Content-type" : "application/json",
                            "username": localStorage.getItem("username"),
                            "password": localStorage.getItem("password")
                        }
                        }).then(callback1)
                    }}>
                    Update Course
                    </Button>
            </Card>            
        </div>
    </div>
}

export default Updatecourse;