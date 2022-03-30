const router = require('express').Router();
const Worlds = require('../models/worldsModels');

// === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'World routing is working' })
// });

// GET (READ)
router.get('/', (req, res) => {
    Worlds.findWorlds()
    .then(Worlds => {
        console.log(Worlds)
        res.status(200).json({ Worlds })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Worlds could not be retrieved',
            error: error
        });
    });
}); 

// GET BY ID (READ ONE SPECIFICLY)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Worlds.findWorldById(id)
    .then(world => {
        res.status(200).json({world})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'World could not be retrieved', 
            error: error 
        });
    });
});


// PUT (UPDATE)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    Worlds.updateWorld(id, newData)
    .then(saved => {
        res.status(200).json({
            saved: saved,
            message: 'Successfully updated data',
            update: newData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'World data could not be updated', 
            error: error 
        });
    });
});

// DELETE (ONE SPECIFICLY)
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Worlds.deleteWorld(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find World with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete World', err });
    });
});


module.exports = router;