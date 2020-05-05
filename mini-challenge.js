// Write a function logRectInfo(topLeft, bottomRight)
// It will take two points representing the X and Y coordinates of the top left and bottom right points of a rectangle, i.e. [0, 5], [3, 2].
// It will log the area and the length of the perimeter of the rectangle.
// Call the function several times with different arguments.
// Helper: A = lw and P = 2(l + w)
function getLengthWidth(topLeft, bottomRight){
    const length = bottomRight[0] - topLeft[0];
    const width = topLeft[1] - bottomRight[1];
    return [length, width];
}
const rectPerimeter = (topLeft, bottomRight) => {
    const lw = getLengthWidth(topLeft, bottomRight);
    const perimeter = 2 * (lw[0] + lw[1]);
    return perimeter;
}

const rectArea = (topLeft, bottomRight) => {
    let lw = getLengthWidth(topLeft, bottomRight);
    const area = lw[0] * lw[1];
    console.log(myTest);
    return area;
}
const myTest = 'TEST';
console.log(rectArea([1,10],[10,1]));
console.log(rectArea([2,10],[10,2]));
console.log(rectArea([1,8],[10,4]));
console.log(rectPerimeter([1,10],[10,1]));
