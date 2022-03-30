const router = require('express').Router();

const Players = require('../models/playersModels');

// === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Player routing is working' })
// });

// GET (READ)
router.get('/', (req, res) => {
    Players.findPlayer()
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
    Players.findPlayerById(id)
    .then(player => {
        res.status(200).json({player})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Player could not be retrieved', 
            error: error 
        });
    });
});


// PUT (UPDATE)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    Players.updatePlayer(id, newData)
    .then(saved => {
        res.status(200).json({
            saved: saved,
            message: 'Successfully updated data',
            update: newData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Player data could not be updated', 
            error: error 
        });
    });
});

// DELETE (ONE SPECIFICLY)
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Players.deletePlayer(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find Player with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete Player', err });
    });
});


module.exports = router;