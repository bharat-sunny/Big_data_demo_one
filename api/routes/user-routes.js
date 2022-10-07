import express from "express";
import * as  userController from "../controllers/user-controller.js";

import * as userValidator from "../validations/user-validator.js";


const router = express.Router();

//  All the to-do routes to perform CRUD operations
router.post("/",userValidator.validateUserSave, userController.saveItem)
// userController.saveItem);
router.delete("/:id", userValidator.validateUserDelete, userController.deleteItem);
router.get("/:id", userValidator.validateUserSearch, userController.searchItem);
// router.get("/", userController.searchItem);
router.put("/:id", userValidator.validateUserUpdate, userController.updateItem);

export default router;