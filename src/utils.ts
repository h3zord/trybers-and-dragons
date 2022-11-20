function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

function checkDied(hp: number) {
  if (hp <= 0) {
    return -1;
  }
  return hp;
}

export default getRandomInt;
export { checkDied };
