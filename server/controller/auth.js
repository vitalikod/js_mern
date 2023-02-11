import User from '../models/User';
import bcrypt from 'bcryptjs';

// register
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const isused = await User.findOne({ username });

        if (isused) {
            return res.json({
                messege: 'имя уже занято'
            })
        };

        const salt = bcrypt.genSaltSync(4);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hash,
        })

        await newUser.save();

    } catch (error) {
        console.log(error);
    }
}

// login
export const login = async (req, res) => {
    try {} catch (error) {}
}

// getme
export const getme = async (req, res) => {
    try {} catch (error) {}
}