import mongoose from "mongoose"



let cached = global.mongoose || { conn: null, promise: null }

async function connectDB() {
    if (cached.conn) {
        console.log("⚡ MongoDB already connected (cached)");
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }
        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickCart`, opts).then((mongoose) => {
            console.log("✅ MongoDB connected successfully");
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB
