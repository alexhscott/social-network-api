const router = require("express").Router();

const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thought-controller");

router
  .route("/")
  .get(getAllThoughts);

router  
  .route("/:id")
  .get(getThoughtById)
  .post(createThought)
  .put(updateThought);

router 
  .route("/:userId/:thoughtId")
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions")
  .post(addReaction);

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);

module.exports = router;