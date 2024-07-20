const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Sample").then(() => {
    console.log("Connected to mongoDB!");
}).catch((err) => {
    console.log(err);
})

const studentSchema = new mongoose.Schema({
    name: String,
    workout: Boolean,
    heigth: String
})

const Student = new mongoose.model("Student", studentSchema);

const adder = async () => {
    // ... To create document
    // await Student.create({
    //     name: "parth",
    //     workout: true,
    //     heigth: "5'7"
    // })

    
    // ... To read collections
    // const records = await Student.find()
    // console.log(records);


    /* ... Operators ... */

    // ... equal operator
    // const records = await Student.find({heigth:{$eq:"5'7"}})
    // console.log(records);

    // ... not_equal operator
    // const records = await Student.find({heigth:{$ne:"5'5"}})
    // console.log(records);

    // ... greater_than operator
    // const records = await Student.find({heigth:{$gt:"5'7"}})
    // console.log(records);

    // ... greater_than_equal_to operator
    // const records = await Student.find({heigth:{$gte:"5'5"}})
    // console.log(records);

    // ... less_than operator
    // const records = await Student.find({heigth:{$lt:"5'4"}})
    // console.log(records);

    // ... less_than_equal_to operator
    // const records = await Student.find({heigth:{$lte:"5'7"}})
    // console.log(records);

    // ... in operator
    // const records = await Student.find({heigth:{$in:["5'7", "5'4"]}})
    // console.log(records);

    // ... nin operator
    // const records = await Student.find({heigth:{$nin:["5'4", "5'5"]}})
    // console.log(records);

}

adder();