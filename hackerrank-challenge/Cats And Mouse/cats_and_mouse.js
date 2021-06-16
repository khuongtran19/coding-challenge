function catAndMouse(x, y, z) {
    return Math.abs(x - z) > Math.abs(y - z) ? "Cat B" : Math.abs(x - z) < Math.abs(y - z) ? "Cat A" : "Mouse C"
}
module.exports = catAndMouse