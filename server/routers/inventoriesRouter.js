const router = require('express').Router();
const Inventories = require('../models/inventoriesModels');

// === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Inventory routing is working' })
// });

// GET (READ)
router.get('/', (req, res) => {
    Inventories.findInventories()
    .then(Inventories => {
        console.log(Inventories)
        res.status(200).json({ Inventories })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Inventories could not be retrieved',
            error: error
        });
    });
}); 

// GET BY ID (READ ONE SPECIFICLY)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Inventories.findInventoryById(id)
    .then(player => {
        res.status(200).json({player})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Inventory could not be retrieved', 
            error: error 
        });
    });
});


// PUT (UPDATE)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    Inventories.updateInventory(id, newData)
    .then(saved => {
        res.status(200).json({
            saved: saved,
            message: 'Successfully updated data',
            update: newData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Inventory data could not be updated', 
            error: error 
        });
    });
});

// DELETE (ONE SPECIFICLY)
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Inventories.deleteInventory(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find Inventory with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete Inventory', err });
    });
});


module.exports = router;