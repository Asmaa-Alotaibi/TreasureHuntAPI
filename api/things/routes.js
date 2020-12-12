const express = require("express");
const passport = require("passport");

const {
  randomController,
  treasureController,
  thingCreate,
} = require("./controllers");

const router = express.Router();

router.get("/random", randomController);

/// Here must check if user logged in
router.get(
  "/treasure",

  treasureController
);
// passport.authenticate("jwt", { session: false }),

router.post("/", thingCreate);

module.exports = router;
