import {
  getAllLaunches,
  addNewLaunch,
  abortLaunch,
  deleteLaunch,
} from "../services/launches.services";
import model from "../database/models";

export async function httpGetAllLaunches(req, res) {
  const launches = await getAllLaunches();
  return res.status(200).json(launches);
}

export async function httpPostLaunches(req, res) {
  const launch = req.body;
  const planet_id = await model.Planets.findOne({
    attributes: ["id"],
    where: { name: launch.target },
  });
  if (
    !launch.rocket ||
    !launch.mission ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    res.status(400).json({
      error: "Invalid launch date",
    });
  }
  const response = await addNewLaunch(launch, planet_id.dataValues.id);
  return res.status(201).json(response);
}

export async function httpDeleteLaunches(req, res) {
  const flightNumber = Number(req.params.flightNumber);
  const launch = await model.Launches.findOne({
    where: { flightNumber: flightNumber },
  });
  if (!launch) {
    return res.status(400).json({
      error: "Launch doesn't exixt",
    });
  }
  await deleteLaunch(flightNumber);
  // return res.status(200).json(response);
  return res.status(200).json({
    message: "Launch Deleted",
  });
}

export async function httpAbortLaunches(req, res) {
  const flightNumber = Number(req.body.flightNumber);
  const launch = await model.Launches.findOne({
    where: { flightNumber: flightNumber },
  });
  if (!launch) {
    return res.status(400).json({
      error: "Launch doesn't exixt",
    });
  }
  await abortLaunch(
    flightNumber,
    req.body.upcoming,
    req.body.success
  );
  // return res.status(200).json(response);
  return res.status(200).json({
    message: "Launch Aborted",
  });
}
