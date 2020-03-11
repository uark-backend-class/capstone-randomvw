exports.addRelationship = async (req, res) => {
  const { movieId, actorId } = req.body;
  const movie = await movie.findByPk(movieId);
  await movie.addActor(actorId); //! addActor is created by Sequelize, and uses the model name to create the function
  res.send(movie)
}