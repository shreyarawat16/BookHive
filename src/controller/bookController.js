import Book from "../models/bookModel.js";

export async function getAllBooks(req, res){
    try{
        const allBooks= await Book.find().sort({createdAt: -1}); //last book added will be shown first
        res.status(200).json(allBooks);
      }
        catch(err){
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        }
}

export async function getBookById(req,res){
     try{
    let {id}= req.params;
    const book =await Book.findById(id);
    if(!book){
        return res.status(404).json({message: "Book not found"});
    }
    else{
        res.status(200).json(book);
    }
     }
catch(err){
    console.log("Error in fetching book by id",err);
    res.status(500).json({message :"Internal server error"});
}

}
export async function postBooks(req, res){

try{
   const {title, description, category, trending, newPrice, oldPrice, coverImage}= req.body;
   
   const newBook= new Book({
         title, 
         description, 
         category, trending,
         newPrice, oldPrice,
         coverImage,
      })
     const savedBook=await newBook.save();
     res.status(200).json(savedBook);
   }
   catch(err){
    console.log("Error in creating book", err);
    res.status(500).json({message: "Internal server error"});
   }
}

export async function updateBooks(req, res){
    try{
  let {id}= req.params;
  const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
  if(!updatedBook){
    return res.status(404).json({message: "Book not found"});
  }
  res.status(200).json(updatedBook);
}
catch(err){
    console.log("Error in updating book", err);
    res.status(500).json({message: "Internal server error"});
}
}

export async function deleteBooks(req, res){
    try{
   let {id}= req.params;
  const deletedBook= await Book.findByIdAndDelete(id);
  if(!deletedBook){
    return res.status(404).json({message: "Book not found"});
  }
  res.status(200).json(deletedBook);
}
catch(err){
  console.log("Error in deleting book", err);
  res.status(500).json({message: "Internal server error"});
}
}