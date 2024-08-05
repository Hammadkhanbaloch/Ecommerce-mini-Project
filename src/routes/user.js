import express from "express";
import userModel from "../models/userModel.js";
export const createUser=async (req, res) => {
    try {
        const result = await userModel.create(req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const getUser=async(req,res)=>{
    try
    {
    const usersData=await userModel.find().exec();
    res.status(200).json(usersData);
    }
    catch({message}){
        res.json({message});
    }
};
export const getUserbyId=async(req,res)=>
{
    try{
        const userdata=await userModel.findById(req.params.id).exec();
        res.status(200).json(userdata);
    }
    catch({message}){
        res.json({message});
    }
};
export const updateUserbyId=async(req,res)=>
    {
        try{
            const updateUserData=await userModel.findByIdAndUpdate(req.params.id,{$set:req.body},{ new: true } ).exec();
            res.status(200).json(updateUserData);
        }
        catch({message}){
            res.json({message});
        }
    };
    export const deleteUserbyId=async(req,res)=>
        {
            try{
                const deleteUserData=await userModel.findByIdAndDelete(req.params.id).exec();
                res.status(200).json(deleteUserData);
            }
            catch({message}){
                res.json({message});
            }
        };