/*
! notes
TODO - GO to mongo db website 
todo - create a free M0 cluster
todo -create a user 
todo -get a connection string
todo - install a mongo Db compass
*/
const { MongoClient } = require("mongodb");

// Use placeholders for sensitive information
const url = "mongodb+srv://<username>:<password>@<hostname>/<database>?retryWrites=true&w=majority";

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
