const { model, Schema } = require('mongoose');

const BarrelSchema = new Schema ({
    code: {
        type: String
    },
    size: {
        type: Number
    },
    status: {
        type: String
    },
    ubication: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    isDelited: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
})

const Barrel = model('Barrel', BarrelSchema);

module.exports = Barrel;