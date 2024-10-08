const mongoose =require("mongoose");

const db =process.env.CONNECTION_STRING;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser :true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB is connected");
    }catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;