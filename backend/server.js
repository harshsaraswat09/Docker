import express from "express"

const app = express()
const port = 3000   

app.get('/', (req, res) => {
  res.status(200).json({message: "Hello World"})
})

app.get("/api/data", (req, res)=>{
    const data = {
        id: 1,
        name: "Sample Data",
        description: "this is sample"
    }
    res.status(200).json(data)
})

app.listen(port,'0.0.0.0', ()=>{
    console.log("Server is running on port 3000")
})