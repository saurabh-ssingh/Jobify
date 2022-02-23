import mongoose from 'mongoose'

//mongoose connect method return a promise so we async

const connectDB = (url)=>{
    return mongoose.connect(url)
}

export default connectDB