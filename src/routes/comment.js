import commentModel from "../models/commentModel.js";
export  const createcomment=async (req, res) => {
    try {
        const result = await commentModel.create(req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const getcomment=async(req,res)=>{
    try
    {
    const commentsData=await commentModel.aggregate([
        {
            $lookup:
            {
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:"user"
            },
        },
        {
            $lookup:
            {
                from:"products",
                localField:"productId",
                foreignField:"_id",
                as:"product"
            },
        },
    ]).exec();
    res.status(200).json(commentsData);
    }
    catch({message}){
        res.json({message});
    }
};
export  const getcommentbyId=async(req,res)=>
{
    try{
        const commentdata=await commentModel.findById(req.params.id).exec();
        res.status(200).json(commentdata);
    }
    catch({message}){
        res.json({message});
    }
};
export  const updatecommentbyId=async(req,res)=>
    {
        try{
            const updatecommentData=await commentModel.findByIdAndUpdate(req.params.id,req.body).exec();
            res.status(200).json(updatecommentData);
        }
        catch({message}){
            res.json({message});
        }
    };
    export  const deletecommentbyId=async (req,res)=>
        {
            try{
                const deletecommentData=await commentModel.findByIdAndDelete(req.params.id).exec();
                res.status(200).json(deletecommentData);
            }
            catch({message}){
                res.json({message});
            }
  };
