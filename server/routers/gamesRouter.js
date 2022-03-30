const router = require('express').Router();
const Games = require('../models/gamesModels');

// === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Game routing is working' })
// });

// GET (READ)
router.get('/', (req, res) => {
    Games.findGames()
    .then(Games => {
        console.log(Games)
        res.status(200).json({ Games })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Games could not be retrieved',
            error: error
        });
    });
}); 

// GET BY ID (READ ONE SPECIFICLY)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Games.findGameById(id)
    .then(game => {
        res.status(200).json({game})
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Game could not be retrieved', 
            error: error 
        });
    });
});

router.post('/', (req, res) => {
    const game = req.body
    Games.addGame(game)
    .then((newGame) => {
        res.status(201).json({
            message: 'Successful game creation',
            newGame: newGame
        });
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Game data could not be updated', 
            error: error 
        });
    });
});


// PUT (UPDATE)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    Games.updateGame(id, newData)
    .then(saved => {
        res.status(200).json({
            saved: saved,
            message: 'Successfully updated data',
            update: newData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Game data could not be updated', 
            error: error 
        });
    });
});

// DELETE (ONE SPECIFICLY)
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Games.deleteGame(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find Game with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete Game', err });
    });
});


module.exports = router;