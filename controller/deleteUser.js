const User = require("../models/User");

exports.deleteUser = async (req, res) => {
  try {
    // console.log("req body", req.body);
    const userDetails = await User.findByIdAndDelete({_id:req.body.id});

    if (!userDetails ) {
      return res.status(400).json({
        status: 400,
        message: "User not defined",
      });
    }
    return res.status(200).json({
      status: 201,
      message: "User deleted successfully",
      data: userDetails,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
