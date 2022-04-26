import model from "../database/models";

export async function addNewLaunch(launch, planet_id) {
  try {
    const newLaunch = await model.Launches.create({
      mission: launch.mission,
      rocket: launch.rocket,
      launchDate: launch.launchDate,
      planet_id: planet_id,
    });
    return newLaunch;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllLaunches() {
  try {
    const allPanets = await model.Launches.findAll({
      attributes: [
        "flightNumber",
        "mission",
        "rocket",
        "launchDate",
        "customer",
        "upcoming",
        "success",
        "planet_id",
      ],
    });
    return allPanets;
  } catch (err) {
    console.log(err);
  }
}

export async function abortLaunch(flightNumber, upcoming, success) {
  try {
    const aborted = await model.Launches.update(
      { upcoming: upcoming, success: success },
      {
        where: {
          flightNumber: flightNumber,
        },
      }
    );
    return aborted;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteLaunch(flightNumber) {
  try {
    const deleted = await model.Launches.destroy({
      where: {
        flightNumber: flightNumber,
      },
    });
    return deleted;
  } catch (err) {
    console.log(err);
  }
}
