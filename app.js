import express from 'express';
const app = express();
const Students = [
    "Omar",
    "Ashraf",
    "Ramadan",
    "Mohamed",
]
const Studentlist = (req, res) => {
    let output = "<ul>"
    for (let i = 0; i < Students.length; i++) {
        output += "<li>" + Students[i] + "</li>";
    }
    output += "</ul>"
    res.send(output)
}
app.get("/students", Studentlist)
app.listen(3000)

