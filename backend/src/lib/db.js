import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI, {
			serverSelectionTimeoutMS: 30000, // 30 seconds
			connectTimeoutMS: 30000, // 30 seconds
			socketTimeoutMS: 30000, // 30 seconds
			bufferCommands: false, // Disable mongoose buffering
		});
		console.log(`Connected to MongoDB ${conn.connection.host}`);
		return conn;
	} catch (error) {
		console.log("Failed to connect to MongoDB", error);
		throw error; // Don't exit process in serverless
	}
};
