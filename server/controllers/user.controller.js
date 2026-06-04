import User from "../model/user.model.js";

export const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Current User not found!"
                });
        }

        return res
            .status(200)
            .json({
                success: true,
                message: "User fetched successfully!",
                user
            });

    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({
                success: false,
                message: "Current User Internal error!"
            });
    }
}