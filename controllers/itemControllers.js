const Item = require('../models/Item')

module.exports.get_items = (req,res) => {
    Item.find().sort({date: -1}).then(items => res.json(items))
}

module.exports.post_items = (req, res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => res.json(item))
}

module.exports.update_items = (req,res) => {
    Item.findByIdAndUpdate({ _id: req.params.id}, req.body).then(item => {
        Item.findOne({_id: req.params.id}).then(item => res.json(item))
    })
}

module.exports.delete_items = (req,res) => {
    Item.findByIdAndDelete({_id: req.params.id}, req.body).then(item => res.json({success: true}))
}