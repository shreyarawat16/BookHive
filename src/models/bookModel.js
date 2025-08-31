import mongoose from 'mongoose';

const bookSchema= new mongoose.Schema({
     title: {
        type: String,
        required: true,
     },
     description:{
        type: String,
        required: true,
        
     },
     category:{
        type: String,
        required: true,
     },
     trending:{
        type: Boolean,
        default: false,
     },
     coverImage:{
        type: String,
        required: true,
     },
     newPrice:{
        type: Number,
     },
     oldPrice:{
        type: Number,
        default: 0,
     },
   
     createdAt: {
        type: Date,
        default: Date.now,
     }
}, {
    timestamps: true,
})

const Book = mongoose.model("Book", bookSchema);
export default Book;