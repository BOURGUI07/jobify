import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/customError.js";
import User from "../models/UserModel.js";
import { comparePasswords, hashPassword } from "../utils/passwordUtils.js";
export const register = async (req, res) => {
  const isFirst = (await User.countDocuments()) === 0;
  req.body.role = isFirst ? "admin" : "user";

  req.body.password = await hashPassword(req.body.password);
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User Created Sucessfully!" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    throw new UnauthenticatedError(`No user is found for email: ${email}`);

  const doesMatch = await comparePasswords(password, user.password);
  if (doesMatch) {
    res.status(200).json({ msg: "User Logged in Successfully" });
  } else {
    throw new UnauthenticatedError(`Wrong user credentials`);
  }
};
