const {MongoClient} = require ('mongodb');

const uri = 'mongodb+srv://root:hello17%21@student-course-db.p9jkwfs.mongodb.net/student-course-db?retryWrites=true&w=majority&appName=student-course-db';
const client = new MongoClient(uri);

async function main() {
    try{
        await client.connect();
        const db = client.db ('school');
        const studentsCollection = db.collection ('students');
        await studentsCollection.insertOne({name: 'amina', age: 20})
        console.log("connected to mongo!!")
        // await client.close()
        console.log("disconnected to mongo")

    }
    catch(error){
        console.error("failed", error);
    }
}
main();

async function readStudents() {
    try{
        await client.connect();
        const db = client.db ('school');
        const studentsCollection = db.collection ('students');
        const students = await studentsCollection.find().toArray();
        console.log(JSON.stringify(students, null, 2));
        await client.close();

    }
    catch(error){
        console.error("failed", error);
        
    }
}
readStudents();



