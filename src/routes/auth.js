//module imports
import express from "express";

//function imports
import { generate_otp_register, register_user, resend_otp, sign_in } from "../controllers/auth.js";

const router = express.Router();

router.post("/generate_otp_register", (req, res) => {
  const data = { ...req.body };
  generate_otp_register(data, (error, response) => {
    if (error) {
      return res.status(error.status).send(error);
    }
    return res.status(response.status).send(response);
  });
});

router.post("/resend_otp", (req, res) => {
  const data = { ...req.body };
  resend_otp(data, (error, response) => {
    if (error) {
      return res.status(error.status).send(error);
    }
    return res.status(response.status).send(response);
  });
});

router.post("/register_user", (req, res) => {
  const data = { ...req.body };
  register_user(data, (error, response) => {
    if (error) {
      return res.status(error.status).send(error);
    }
    return res.status(response.status).send(response);
  });
});

router.post("/sign_in", (req, res) => {
  const data = { ...req.body };
  sign_in(data, (error, response) => {
    if (error) {
      return res.status(error.status).send(error);
    }
    return res.status(response.status).send(response);
  });
});

export default router;
