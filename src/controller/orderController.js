import Order from '../models/orderModel.js'

export async function createOrder(req, res){
   try{
      console.log("Incoming order payload:", req.body);
    const newOrder= await new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
    
   }
   catch(err){ 
    res.status(500).json({message: "Internal Server Error"})
     
   }
}
export async function getOrderByEmail(req, res){
   try{
      
     let {email}= req.params;
     const orders= await Order.find({email}).sort({createdAt: -1}).populate("product", "title coverImage");
     console.log(orders);
     if(orders.length === 0){
      return res.status(404).json({message: "Order not found"});
     }
     return res.status(200).json(orders);
   }
   catch(err){
       res.status(500).json({message: "Internal Server Error"});
   }
}

