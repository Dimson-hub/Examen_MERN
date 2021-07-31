const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        require: true,
        unique: true,
        trim: true,
      
    },
    gender:{
        type: String,
        require: true,
        trim: true,
        enum: ["male", "female"],
    },
    dob:{
        type: Date,
        require: true,
    },
    news:{
        type: Boolean,
    },
    email:{
        type: String,
        require: true,
        trim: true,
    },
    photo:{
        type: String,
        trim: true,
    }
},{
    timestamps: true,
});

const User = mongoos.model('User', userSchema);

module.exports = User;