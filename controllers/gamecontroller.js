// Routes to be made (create, edit)
const express = require('express');
const router = express.Router();
let validateJWT = require('../middleware/validate-jwt');
const {Game} = require('../models');

router.post('/create', validateJWT, async (req, res) => {
    const {name, boxart, gamedescription, esrbrating, reviewrating, reviewdescription, platforms, tags} = req.body.game;
    const {id} = req.user;
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
        res.status(500).json({error: err});
    }
});

router.put('/edit=:gameId', validateJWT, async (req, res) => {
    const {name, boxart, gamedescription, esrbrating, reviewrating, reviewdescription, platforms, tags} = req.body.game;
    const gameId = req.params.gameId;
    const userId = req.user.id;

    const query = {
        where: {
            id: gameId,
            owner_id: userId,
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
        res.status(500).json({error: err});
    }
})

module.exports = router;