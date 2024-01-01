import { Typography, TextField, Card } from "@mui/material";
import Courses from "./Courses";
import { useState, useEffect } from "react";

function Getcourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/courses", {
            method : "GET",
            headers: {
                "username" : localStorage.getItem("username"),
                "password": localStorage.getItem("password")
            }
        }).then(callback1)
    }, []);

    return <div style={{display:"flex", flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map(course => {
            return <Course course={course} />}
        )}
    </div>
}

function Course(props) {
    return <Card style={{  
        margin: 10,
        width: 300,
        minHeight: 200
    }}>
        <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
        <img src={props.course.imageLink} style={{width: 300}}></img>
    </Card>
}

export default Getcourses;