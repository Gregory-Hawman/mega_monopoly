const router = require('express').Router();

const Players = require('../models/playersModels');

// === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'User routing is working' })
// });

// GET (READ)
router.get('/', (req, res) => {
    Players.findUser()
    .then(Players => {
        console.log(Players)
        res.status(200).json({ Players })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Players could not be retrieved',
            error: error
        });
    });
}); 

// GET BY ID (READ ONE SPECIFICLY)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Players.findUserById(id)
    .then(user => {
        res.status(200).json({user})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'User could not be retrieved', 
            error: error 
        });
    });
});


// PUT (UPDATE)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    Players.updateUser(id, newData)
    .then(saved => {
        res.status(200).json({
            saved: saved,
            message: 'Successfully updated data',
            update: newData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'User data could not be updated', 
            error: error 
        });
    });
});

// DELETE (ONE SPECIFICLY)
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Players.deleteUser(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find User with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete User', err });
    });
});


module.exports = router;