const router = require('express').Router();
const Properties = require('../models/propertiesModels');

// === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Properties routing is working' })
// });

// GET (READ)
router.get('/', (req, res) => {
    Properties.findProperties()
    .then(Properties => {
        console.log(Properties)
        res.status(200).json({ Properties })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Properties could not be retrieved',
            error: error
        });
    });
}); 

// GET BY ID (READ ONE SPECIFICLY)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Properties.findPropertyById(id)
    .then(property => {
        res.status(200).json({property})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Property could not be retrieved', 
            error: error 
        });
    });
});

router.post('/', (req, res) => {
    const property = req.body
    Properties.addProperty(property)
    .then((newProperty) => {
        res.status(201).json({
            message: 'Successful game creation',
            newProperty: newProperty
        });
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Property data could not be updated', 
            error: error 
        });
    });
});


// PUT (UPDATE)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    Properties.updateProperty(id, newData)
    .then(saved => {
        res.status(200).json({
            saved: saved,
            message: 'Successfully updated data',
            update: newData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Property data could not be updated', 
            error: error 
        });
    });
});

// DELETE (ONE SPECIFICITY)
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Properties.deleteProperty(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find Property with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete Property', err });
    });
});


module.exports = router;