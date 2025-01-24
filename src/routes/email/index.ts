import { Router, Request, Response } from "express";
import { sendEmail } from "../../services/email";

const router = Router();

router.post("/send_email", async (req: any, res: any) => {
  const { mobile, email } = req.body;

  if (!mobile || !email) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: mobile or email",
    });
  }

  const result = await sendEmail(
    "tribeone.info@gmail.com",
    `Room Booking Enquiery ${mobile}`,
    `Room Booking Enquiery \n Mobile: ${mobile}\n Email: ${email}`
  );
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
});

export default router;
