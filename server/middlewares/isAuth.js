import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies;

        if (!token) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Token not found!"
                });
        }

        let decoded = await jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Invalid token!"
                });
        }

        req.userId = decoded.userId;
        next();

    } catch (error) {
        console.log(error);
    }
}

export default isAuth;