import * as userService from "./../services/user-service.js";

const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

const setErrorResponse = (error,response) => {
    response.status(500);
    response.json(error);
}


//  Used to add a user to the collection
export const saveItem = async (request, response ) => {
    try {
        const params = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email
        };
        const data = await userService.save(params);
        setSuccessResponse(data, response);
    } catch (error) {
        console.log("ERROR : \n", error)
        if (error.code) {
            setErrorResponse({code : error.code, message: error.message},response)    
        } 
        // console.log("error :", error.code);
        setErrorResponse(error,response);
    }
}

//  Used to delete a particular user in the collection
export const deleteItem = async(request, response) => {
    try {
        const id = request.params.id;
        const data = await userService.remove(id);
        setSuccessResponse({message:"Successfully removed item"}, response);
    } catch(error) {
        setErrorResponse(error, response);
    }
}

// Used to update a particular user in the collection
export const updateItem = async(request, response) => {
    try{

        const params = {
            firstName:request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            id : request.params.id
        };
        console.log("Params to update : ", params);
        const data = await userService.update(params);
        setSuccessResponse(data, response);
    } catch(error) {
        setErrorResponse(error, response);
    }
}

//  Used to search one or more users in the collection

export const searchItem = async(request, response) => {
    try{
        const id = request.params.id ? request.params.id : null ;
        const data = await userService.searchItem(id);
        
        setSuccessResponse(data, response);
    } catch(error) {
        setErrorResponse(error, response);
    }
}