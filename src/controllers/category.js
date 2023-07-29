
import Category from "../models/Category.js";
import { categoryValid } from "../validation/category.js";

export const getAll = async (req, res) =>{
    try {
        const data = await Category.find({}).populate("products")
        if(!data){
            return res.status(404).json({message:"No category found"});
        }
        return res.status(200).json({
            message:"category has been", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}
export const getDetail = async (req, res) =>{
    try {
        const data = await Category.findById(req.params.id).populate("products")
        if(!data){
            return res.status(404).json({message:"No category found"});
        }
        return res.status(200).json({
            message:"category has been", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}

export const create = async (req, res) =>{
    try {
        const {error} = categoryValid.validate(req.body,{abortEarly:false});
        if(error){
            const errors = error.details.map(err => err.message)
            return res.status(400).json({message:errors})
        }

        const data = await Category.create(req.body)
        if(!data){
            return res.status(404).json({message:"Create category failed"});
        }
        return res.status(200).json({
            message:"Create category successfully", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}
export const update = async (req, res) =>{
    try {
        const {error} = categoryValid.validate(req.body,{abortEarly:false});
        if(error){
            const errors = error.details.map(err => err.message)
            return res.status(400).json({message:errors})
        }

        const data = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!data){
            return res.status(404).json({message:"Update category failed"});
        }
        return res.status(200).json({
            message:"Update category successfully", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}

export const remove = async (req, res) =>{
    try {

        const data = await Category.findByIdAndDelete(req.params.id)
        if(!data){
            return res.status(404).json({message:"Delete category failed"});
        }
        return res.status(200).json({
            message:"Delete category successfully", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}