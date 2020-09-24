// Our values can be put in a single array. In this case, the element at x,y can be found by getting the elements at position x+y*width in the array. Where Width is the width of the grid.

var grid = ["0,0", "1,0", "2,0", "0,1", "1,1", "2,1"];

// e.g. grid[2 + 1 * 3] -> "2,1"

function Grid(width, height) {
    this.width = width;
    this.height = height;
    this.cells = new Array(width * height);
}
Grid.prototype.valueAt = function (point) {
    return this.cells[point.y * this.width + point.x];
};
Grid.prototype.setValueAt = function (point, value) {
    this.cells[point.y * this.width + point.x] = value;
};
Grid.prototype.isInside = function (point) {
    return point.x >= 0 && point.y >= 0 && point.x < this.width && point.y < this.height;
};
Grid.prototype.moveValue = function (from, to) {
    this.setValueAt(to, this.valueAt(from));
    this.setValueAt(from, undefined);
};

