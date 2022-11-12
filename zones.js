const zones = require("./data/zones.json");

export const getNorthrendRaids = () =>
  zones.filter(
    (z) => z.category == "Raid" && z.level.every((l) => [80, 80].indexOf(l) > -1)
  );

//   console.log(getNorthrendRaids())