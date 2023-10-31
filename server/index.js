const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();
server.use(cors());
server.use(bodyParser.json());
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/new");
}
const UserShema = new mongoose.Schema({
  name: String,
  password: String,
});
const User = mongoose.model("User", UserShema);

server.post("/test1", async (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.password = req.body.password;
  const dataDb = await user.save();
  console.log(dataDb);
});

server.get("/test1",async(req,res)=>{
    const docs=await User.find({})
    res.json(docs)
})

server.listen(5000, () => {
  console.log("yes server is listening");
});
