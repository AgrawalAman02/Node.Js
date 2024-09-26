/*
! notes
TODO - GO to mongo db website 
todo - create a free M0 cluster
todo -create a user 
todo -get a connection string
todo - install a mongo Db compass
*/
const { MongoClient } = require("mongodb");

// const url = "mongodb+srv://aman-agrawal02:Agrawal@02DbMongo@amanagrawal.8bfiu.mongodb.net/";   // throws errror "URI must include hostname, domain name, and tld"

// the issue arises that i have @ in the password which is a special character 
// which mongo used to separate the username from the hostname in the MongoDB URI.
// To fix this, you need to URL-encode the special characters in your password. In your case, the @ symbol must be replaced with %40.
const url = "mongodb+srv://aman-agrawal02:Agrawal%4002DbMongo@amanagrawal.8bfiu.mongodb.net/";


const client = new MongoClient(url);

const dbName = 'HelloWorld';   // for u it is HelloWorld

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');  // for us it is User not documents
  
    // the following code examples can be pasted here...
    // ṇow we write some functions 

    // ! Insert
    // const data =
    //   {
    //     firstName: "MS",
    //     lastName: "Dhoni",
    //     city: "Ranchi",
    //     phoneNo: "1234567789"
    //   }

    //   const insertResult = await collection.insertMany([data]);
    //   console.log('Inserted documents =>', insertResult);
    
    
    // ! UPDATE
    // const updateResult = await collection.updateOne({ firstName:"Aman" }, { $set: { firstName: "Shekhar" } });
    // console.log('Updated documents =>', updateResult);

    // ! Delete

    // const deleteResult = await collection.deleteMany({ firstName: "MS" });
    // console.log('Deleted documents =>', deleteResult);

    // ! READ operation
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);


    return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());