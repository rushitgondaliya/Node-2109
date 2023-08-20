const express = require("express");
// const { userValidation } = require("../../validations");
const { BookController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create user */
router.post(
  "/create-Book",
  // validate(userValidation.createUser),
  BookController.CreateBook
);

module.exports = router;