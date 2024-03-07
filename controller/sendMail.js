const User = require("../models/User");
const mailSender = require("../utils/mailSender");

exports.sendMail = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData);
        const info = mailSender(
            "ratnanikhilesh@gmail.com",
            "Here Your Hobbies",
             `${userData.map((user)=>user.hobbies)}`
        );

        res.json({ success: true, data: userData });
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
};
