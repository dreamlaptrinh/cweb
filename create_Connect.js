const mongodb = require('mongodb').MongoClient;

const url = "mongodb+srv://taibooi97:Taismile@cluster0.yzbipoi.mongodb.net/"

mongodb.connect(url, (err, data)=>{
    if(err) throw err;
    const dbo =data.db("mydb");
    dbo.createCollection("products", function(err, res) {
        if(err) throw err;
        console.log("Product created");
        data.close();
    })
})