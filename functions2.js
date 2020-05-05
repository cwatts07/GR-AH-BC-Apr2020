//Because of IIFE only one can be used at a time in node.
//Uncomment the one you wish to see or open in browser
// Regular Exercise
(function(){
    let location = 0;
    let direction = 1;
    function moveForward(distance){
        location = location + (direction * distance);
    }

    function moveBackward(distance){
        location = location - (direction * distance);
    }
    function turnAround(){
        direction = -direction;
    }
    function printLocation(){
        console.log(location);
    }
    moveForward(5);
    moveBackward(2);
    printLocation();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();
})()

//Extended challenge
// (function(){
//     let location = [0,0];
//     let direction = 0;
//     const directions = [[1,0],[0,1],[-1,0],[0,-1]]
//     function moveForward(distance){
//         location[0] = location[0] + (directions[direction][0] * distance);
//         location[1] = location[1] + (directions[direction][1] * distance);
//     }

//     function moveBackward(distance){
//         location[0] = location[0] - (directions[direction][0] * distance);
//         location[1] = location[1] - (directions[direction][1] * distance);;
//     }
    
//     function turnRight(){
//         direction++;
//         if(direction>directions.length-1){
//             direction=0;
//         }
//     }
//     function turnLeft(){
//         direction--;
//         if(direction<0){
//             direction=directions.length-1;
//         }
//     }
//     function printLocation(){
//         console.log(location[0],'N', location[1], 'E');
//     }
//     moveForward(5);
//     turnRight();
//     moveForward(2);
//     printLocation();
//     turnLeft();
//     turnLeft();
//     moveForward(7);
//     turnRight()
//     moveBackward(3);
//     printLocation();
// })()