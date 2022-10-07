import User from "./../models/user.js";


// This is the layer that includes business logic

export const save =  (params) => {
    const item = new User({firstName : params.firstName, lastName: params.lastName, email: params.email, createdDate: Date.now()});
    return item.save();
}

export const update =  (updatedUser) => {
    updatedUser.lastModifiedDate = new Date;
    console.log("Updated Item : ", updatedUser);
    const id = updatedUser["id"];
    const item = User.findByIdAndUpdate(id, updatedUser, {new: true});
    return item; 
}

export const remove = (id) => {
    const item = User.findByIdAndDelete(id).exec();
    return item;
}

export const searchItem = (id = null) => {
    let item;
    if(id) {
        item = User.findById(id);
    } else {
        item = User.find();
    }
    return item;
}