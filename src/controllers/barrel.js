const Barrel = require('../models/Barrel')

const addBarrel = async (req, res) => {
    try {
        const newBarrel =  new Barrel(req.body)
        await newBarrel.save();
        res.status(200).json({message: 'Barrel added successfully', newBarrel})
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

const getBarrels = async(req, res) => {
    try {
        const barrels = await Barrel.find({ isDeleted: false })
        res.status(200).json({message: 'Barrels obtained correctly', barrels})
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

module.exports ={
    addBarrel,
    getBarrels
}