import User from "../model/user.model.js";
import { getToken } from "../utils/token.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name, email
            });
        }

        let token = await getToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res
            .status(200)
            .json({
                message: "User logged in successfully!",
                user
            });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({
                message: `Google Signup - Error : ${error}!`
            });
    }
}

