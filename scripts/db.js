/* 
    For more information refer to: https://github.com/nexus-devs/wow-classic-items
    Discord: https://discord.gg/jGZxH9f
    Issues: https://github.com/nexus-devs/wow-classic-items/issues
*/
const database = require("wow-classic-items");
const options = {};
// const items = new database.Items(options);
// const professions = new database.Professions(options);
// console.table(professions);
const zones = new database.Zones(options);
// console.log(zones);
const getNorthrendRaids = () => {
  return zones.filter(
    (z) =>
      z.category == "Raid" && z.level.every((l) => [80, 80].indexOf(l) > -1)
  );
};

console.table(getNorthrendRaids());
