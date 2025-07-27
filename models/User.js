import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    cartItem: {
        type: Object, required: true
    },
    imageUrl: {
        type: String, required: true
    },
}, {
    minimize: false
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
