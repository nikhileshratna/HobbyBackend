const User = require("../models/User");

exports.updateUser = async (req, res) => {
  try {
    // console.log("req body", req.body);
    const { name, email, phoneNumber, hobbies } = req.body;
    if (!name || !email || !phoneNumber || !hobbies) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const userDetails = await User.findByIdAndUpdate(req.user._id,{
        name, email, phoneNumber, hobbies
    });


    if (!userDetails ) {
      return res.status(400).json({
        status: 400,
        message: "User not defined",
      });
    }
    return res.status(200).json({
      status: 201,
      message: "User updated successfully",
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
