
const asyncHandler = require('express-async-handler')

// here Goal has a bunch of methods to perform CRUD applications on database
const Goal = require('../models/goalModel') 

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) =>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})
// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})
// @desc Update goals
// @route PUT /api/goals
// @access Private
const updateGoals = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
})
// @desc Delete goals
// @route DELETE /api/goals
// @access Private
const delGoals = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
    await Goal.deleteOne(goal);
    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    delGoals,
}