const actualTemp = 80;
const desiredTemp= 73;
const tempCelsius = 30;
const targetUnit = 'K';
if(actualTemp > desiredTemp){
    console.log("Run A/C");
}else if(actualTemp < desiredTemp){
    console.log("Run Heat");
}else{
    console.log("Standby");
}

switch(targetUnit){
    case 'F':
        console.log(`Temperature in desired units is ${(tempCelsius * 9/5) + 32}`);
        break;
    case 'K':
        const kelvin = tempCelsius + 273.15;
        console.log('Temperature in desired units is ' + kelvin);
        break;
    case 'C':
        console.log(`Temperature in desired units is ${tempCelsius}`);
        break;
    default:
        console.log("What do you want from me????");
}   
