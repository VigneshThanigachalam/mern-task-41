import express from "express";
import bodyParser from "body-parser"

const app = express();
import db_connect from "./Configure/dbConnect.js";
import studentRouter from "./Routes/studentRoute.js";
import mentorRouter from "./Routes/mentorRoute.js"
db_connect();
const PORT = 4000;


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/student", studentRouter);
app.use("/api/mentor", mentorRouter);

app.get("/", function (request, response) {
  response.send(request.body);
});


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
