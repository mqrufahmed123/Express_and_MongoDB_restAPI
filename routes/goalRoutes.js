const express = require('express');
const router = express();
const { getGoals, setGoals, updateGoals, delGoals } = require('../controllers/goalcontroller')

// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', delGoals)

// cleaner code >

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(delGoals).put(updateGoals)

module.exports = router
