import slugify from "slugify";
import Category from "../model/categorySchema.js";


function recursive_function_Category(categories , parentId = null){
    const catList = [];
    let category;
    if(parentId === null){
         category = categories.filter(cat => cat.parentId == undefined);
    }else{
        category = categories.filter(cat => cat.parentId == parentId);
    }
    for(let cat of category){
        catList.push({
            _id : cat.id,
            name: cat.name,
            slug: cat.slug,
            children : recursive_function_Category(categories , cat._id)
        });
    }

    return catList;
}

export const createCategory = (req, res) => {

    const categoryObj = {
        name : req.body.name,
        slug : slugify(req.body.name)
    }
    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId
    }

    const cat = new Category(categoryObj);
    cat.save((error , category) => {
        if(error) return res.status(400).json({ error});
        if(category){
            return res.status(201).json({ message : " new category created !"});
        }
    });
};

export const getCategories = (req, res) => {

    Category.find({})
    .exec((error , categories)=>{
        if(error) return res.status(400).json({error});

        if(categories){

            const catList = recursive_function_Category(categories);

            res.status(200).json({catList});
        }
    });
}
