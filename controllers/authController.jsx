const userModel = require('../models/userModel.jsx');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const validator = require('validator');
const { sendVerificationMail } = require('../utils/sendVerificationMail.jsx');

//createtoken
const createToken = (_id) => {
    const jwtSecretKey = process.env.JWT_SECRET;
    return jwt.sign({ _id }, jwtSecretKey, { expiresIn: "1d" });
}

//register controller
const registerController = async (req, res) => {
    const { role, name, email, password, organisationName, hospitalName, website, address, phone } = req.body;
    try {
        const exisitingUser = await userModel.findOne({ email: req.body.email })
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

        //rest data
        // const user = new userModel(req.body);
        const user = new userModel({role, name, email, password: hashedPassword, organisationName, hospitalName, website, address, phone, emailToken: crypto.randomBytes(64).toString("hex")});
        await user.save();
        sendVerificationMail(user);
        return res.status(201).send({
            success: true,
            message: 'User Register Successfully!',
            user,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Register Api',
            error,
        });
    }
};

//verify controller
const verifyController = async (req, res) => {
    try {
        const emailToken = req.body.emailToken;
        if (!emailToken) {
            return res.status(400).send({
                success: false,
                message: "Email Token Not Found"
            });
        }
        const user = await userModel.findOne({ emailToken });
        if (user) {
            user.emailToken = null;
            user.isVerified = true;
            await user.save();
            const token = createToken(user._id);
            res.status(200).send({
                success: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                token,
                isVerified: user?.isVerified,
            });
        } else {
            res.status(404).send({
                success: false,
                message: "Email Verification Failed, Invalid Token"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in verify user controller Api',
            error,
        });
    }
};

//login controller
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

        //compare password
        const comparePassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: 'Invalid Credentials'
            })
        }
        // const token = createToken({ userId:  user._id}, process.env.JWT_SECRET, {expiresIn: '1m'});
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        return res.status(200).send({
            success: true,
            message: 'Login Successfully!',
            token,
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

//current-user controller
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

module.exports = {
    registerController, loginController, currentUserController, verifyController
};

// verifyController