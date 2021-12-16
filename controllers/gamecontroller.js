// Routes to be made (create, edit)
const express = require('express');
const router = express.Router();
let validateJWT = require('../middleware/validate-jwt');
const { Game } = require('../models');



router.post('/create', validateJWT, async (req, res) => {
    const { name, boxart, gamedescription, esrbrating, reviewrating, reviewdescription, platforms, tags } = req.body.game;
    const { id } = req.user;

    const gameEntry = {
        name,
        boxart,
        gamedescription,
        esrbrating,
        reviewrating,
        reviewdescription,
        platforms,
        tags,
        owner_id: id,
    }

    try {
        const newGame = await Game.create(gameEntry);
        res.status(200).json(newGame);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get('/editdeleteall', validateJWT, async (req, res) => {
    const { id } = req.user;
    try {
        const query = {
            where: {
                owner_id: id,
            }
        };
        const gamesList = await Game.findAll(query);
        res.status(200).json(gamesList);
    } catch (error) {
        res.status(500).json({
            message: `Game could not be found: ${error}`
        })
    }
})

router.put('/edit/:gameId', validateJWT, async (req, res) => {
    const { name, boxart, gamedescription, esrbrating, reviewrating, reviewdescription, platforms, tags } = req.body.game;
    const gameId = req.params.gameId;
    const { id } = req.user;

    const query = {
        where: {
            id: gameId,
            owner_id: id,
        }
    }

    const updatedGame = {
        name: name,
        boxart: boxart,
        gamedescription: gamedescription,
        esrbrating: esrbrating,
        reviewrating: reviewrating,
        reviewdescription: reviewdescription,
        platforms: platforms,
        tags: tags,
    }

    try {
        const update = await Game.update(updatedGame, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
    }
})


router.get('/all', async (req, res) => {
    try {
        const gamesList = await Game.findAll();
        res.status(200).json(gamesList);
    } catch (error) {
        res.status(500).json({
            message: `Game could not be found: ${error}`
        })
    }
})

router.get('/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
    try {
        const query = {
            where: {
                id: gameId,
            }
        };
        const gameReturned = await Game.findOne(query);
        res.status(200).json(gameReturned);
    } catch (error) {
        res.status(500).json({
            message: `Game could not be found: ${error}`
        })
    }
})

router.delete('/remove/:gameId', validateJWT, async (req, res) => {
    const gameId = req.params.gameId;
    const { id } = req.user;

    try {
        const query = {
            where: {
                id: gameId,
                owner_id: id,
            }
        };
        const result = await Game.destroy(query);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

module.exports = router;