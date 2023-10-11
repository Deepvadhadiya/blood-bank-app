const crypto = require("crypto");
const userModel = require('../models/userModel.jsx');
const Token = require('../models/tokenModel.jsx');
const sendEmail = require('../utils/email.jsx');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    try {
        const exisitingUser = await userModel.findOne({ email: req.body.email });
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: 'User Already Exists',
            });
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const user = new userModel({ ...req.body, password: hashedPassword });
        await user.save();

        let token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save();

        const message = `${process.env.BASE_URL}/api/v1/auth/verify/${user.id}/${token.token}`;
        await sendEmail(user.email, "Verify Email", message);

        res.send("An Email sent to your account please verify");
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error,
        });
    }
};

const verifyEmailController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send("Invalid link");

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link");

        await userModel.updateOne({ _id: user._id }, { verified: true });
        await Token.findByIdAndRemove(token._id);

        res.send("email verified sucessfully");
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in verify user API',
            error,
        });
    };
}

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Invalid Credentials',
            });
        }

        //check role
        if (user.role !== req.body.role) {
            return res.status(500).send({
                success: false,
                message: 'Role Does not Match',
            });
        };

        if (!user.verified) {
            return res.status(500).send({
                success: false,
                message: 'Email is not verified',
            });
        };

        //compare password
        const comparePassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: 'Invalid Credentials'
            })
        }
        const authtoken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        })
        return res.status(200).send({
            success: true,
            message: 'Login Successfully!',
            authtoken,
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Login Api',
            error,
        });
    }
}

const currentUserController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        return res.status(200).send({
            success: true,
            message: 'User Fetched Successfully!',
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Unable to get current user',
            error,
        });
    }
}

module.exports = { registerController, verifyEmailController, loginController, currentUserController };