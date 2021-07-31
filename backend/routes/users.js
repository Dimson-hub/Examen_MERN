const router =  require('express').Router();
let User = require('../models/user.model');
const userControllers = require("../controllers/userControllers");


router.route('/').get(async (req , res) => {
    const PAGE_SIZE = 5;
    const page = parseInt(req.query.page || "0");
    const total = await User.countDocuments({});
    // await User.find({})
    // .limit(PAGE_SIZE)
    // .skip(PAGE_SIZE * page)
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/add').post((req , res) => {
    const username = req.body.username;
    const gender = req.body.gender;
    const dob = Date.parse(req.body.dob);
    const news = req.body.news;
    const email = req.body.email;
    const photo = req.body.photo;

    const newUser = new User({
        username,
        gender,
        dob,
        news,
        email,
        photo,

    });
    
    newUser.save()
    .then(() => res.json('User addes!'))
    .catch(err => res.status(400).json('Error: '+ err));
    
});

router.route('/:id').get(( req , res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: '+ err));
});

// router.route('/:page/:pageSize').get(( req , res) => {
//     User.find()
//     .then(() => res.json(req.params))
//     .catch(err => res.status(400).json('Error: '+ err));
// });

// router.route('page/size').get(userControllers.getAllUsers);

router.route('/:id').delete((req , res) =>{
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').put((req , res)=> {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username;
        user.gender = req.body.gender;
        user.dob = Date.parse(req.body.dob);
        user.news = req.body.news;
        user.email = req.body.email;
        user.photo = req.body.photo;

        user.save()
        .then( () => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router; 