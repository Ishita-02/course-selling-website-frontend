import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card, Typography} from "@mui/material";
import {useState} from "react";

function course() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    return <div>
        <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography color ="black" variant={"h6"}>
                Create Course
                </Typography>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <Card variant={"outlined"} style={{width: 400, padding: 20}}>
        <TextField
            style = {{paddingBottom: 10}}
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
        />

        <TextField
            style = {{paddingBottom: 10}}
            onChange={(e) => {
                setDescription(e.target.value)
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
        />

        <TextField
            style = {{paddingBottom: 10}}
            onChange={(e) => {
                setImage(e.target.value)
            }}
            fullWidth={true}
            label="Image link"
            variant="outlined"
        />

        <Button
            style = {{paddingBottom: 10}}
            size={"large"}
            variant="contained"
            onClick={() => {
                function callback2(data) {
                    alert("course added!");
                }
                function callback1(res) {
                    res.json().then(callback2)
                }
                fetch("http://localhost:3000/admin/courses", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        imageLink: image,
                        published: true
                    }),
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                }).then(callback1)
            }}
        > Add course</Button>
        </Card>
        </div>
    </div>
}

export default course;