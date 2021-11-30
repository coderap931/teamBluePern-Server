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
        res.status(500).json({ error: err });
    }
});

router.put('/edit=:gameId', validateJWT, async (req, res) => {
    const { name, boxart, gamedescription, esrbrating, reviewrating, reviewdescription, platforms, tags } = req.body.game;
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
        res.status(500).json({ error: err });
    }
})


router.get('/all', async (req, res) => {
    const ownerId = req.user.id;
    try {
        const Games = await Game.findAll({
            where: {
                owner_id: ownerId
            }
        })
        res.status(200).json({
            games: Games,
            message: "games fetched"
        })
    } catch (error) {
        res.status(500).json({
            message: `Game could not be found: ${error}`
        })
    }
})

router.get('/:id', validateJWT, async (req, res) => {
    const gameId = req.params.id;
    try {
        const Games = await Game.findOne({
            where: {
                id: gameId
            }
        })
        res.status(200).json({
            games: Games,
            message: "Game fetched"
        })
    } catch (error) {
        res.status(500).json({
            message: `Game not found: ${error}`
        })
    }
})

router.delete('/remove/:id', validateJWT, async (req, res) => {
    const ownerId = req.user.id;
    const gameId = req.params.id;

    try {
        const query = {
            where: {
                id: gameId,
                owner_id: ownerId
            }
        };

        await Game.destroy(query);
        res.status(200).json({
            message: "Game successfully removed"
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
})



module.exports = router;