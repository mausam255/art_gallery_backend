import mongoose from "mongoose";
const db_uri='mongodb+srv://mausammishra2000:Mausam@cluster0.twaertl.mongodb.net/art?retryWrites=true&w=majority'
const connectToMongo = async () => {
  const res = await mongoose.connect(
    db_uri
  );
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;
