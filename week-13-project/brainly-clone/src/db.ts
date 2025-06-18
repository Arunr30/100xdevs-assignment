import mongoose, { model, Schema } from 'mongoose'

mongoose.connect(
    'mongodb+srv://arunvasur:Arunvasumr@cluster0.9yy9om4.mongodb.net/brainly'
)

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String },
})

export const userModel = model('user', UserSchema)

const ContentSchema = new Schema({
    title: { type: String },
    link: { type: String },
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
})

export const ContentModel = model('Content', ContentSchema)
