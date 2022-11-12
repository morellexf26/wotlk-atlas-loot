/**
 * // 
 *
 * @param {JSON} //
 * @returns {Array} //
 */
const setIconSrc = (json) => {
  json.map((item) => {
    item.icon = `https://wow.zamimg.com/images/wow/icons/large/${item.icon}.jpg`
  })
}


// setIconSrc(items);
// console.table(items);
// const northrendRaids = getNorthrendRaids();
// console.table(northrendRaids);