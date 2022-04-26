import model from "../database/models";

export async function getPlanets(req, res) {
  const allPanets = await model.Planets.findAll({ attributes: ["id", "name"] });
  return res.status(200).json(allPanets);
}
