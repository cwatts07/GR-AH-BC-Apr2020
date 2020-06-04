function tempConv(temperature, unit){
    if(typeof unit === 'string'){
        if(unit.toLowerCase() === 'c'){
            return (temperature - 32)/1.8
        }else if(unit.toLowerCase() === 'f'){
            return temperature * (9/5) + 32
        }
    }
    
}

module.exports = tempConv;