let counter = 3;
function incCounter() {
  counter++;
}

module.exports = {
  get counter() {
    return counter;
  },
  incCounter,
};
