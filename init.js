const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [

    {
    from:"aman",
    to:"priya",
    msg:"chal hat bhen ki ... ",
    created_at:new Date()
},
{
    from:"Sachin",
    to:"Depti",
    msg:"byy",
    created_at:new Date()
},
{
    from:"aman",
    to:"simran",
    msg:"cheater",
    created_at:new Date()
},
{
    from:"deepu",
    to:"abhay",
    msg:"hii",
    created_at:new Date()
}

]


Chat.insertMany(allChats);
 