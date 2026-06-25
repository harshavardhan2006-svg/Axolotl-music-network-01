import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);
const collections = await mongoose.connection.db.listCollections().toArray();
for (const { name } of collections) {
	await mongoose.connection.db.collection(name).deleteMany({});
	console.log(`Cleared: ${name}`);
}
console.log("✅ Database cleaned.");
await mongoose.disconnect();
