import User from "../models/user.model.js";

export const getSelf = async (req, res) => {
  try {
    const loggedInUserId = req.user.fullName;
    res.status(200).json(loggedInUserId);
  } catch (error) {
    console.log("error in getSelf: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
