const express = require("express");
const router = express.Router();

const {bkashCallback,checkout,refund,refundStatus,search} = require('../controllers/bkashController.js');
const authCheck = require("../middlewares/bkash/bkashAuthorization.js");

router.use(authCheck);

// User part
router.post("/create",checkout);
router.get("/callback", bkashCallback);

// Admin part
router.get("/search", search);
//router.get("/refund", refund);
//router.get("/refund-status", refundStatus);

module.exports = router;