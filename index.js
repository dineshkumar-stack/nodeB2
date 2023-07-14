const express = require("express")
const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname, "timeStamp");

const app = express()
app.get("/", (req, res) => {
    let date = new Date();
    const timeStampDate = date.toUTCString().slice(0, -3);
    fs.writeFileSync(`${path.join(dirPath, "current date-time.txt")}`, timeStampDate, (err) => {
        if (err) {
            return res.sent({ message: "error timestamp" })
        }
    })
    res.sendFile(path.join(dirPath, "current date-time.txt"))
})
app.listen(9000, () => console.log(`Server started in 9000`))



