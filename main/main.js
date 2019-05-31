const baseprice = 6
const unitprice = 0.8
const waitprice = 0.25
const uplift = 1.5

const basedis = 2
const updis = 8

module.exports = function main(inputs) {
    // write your code here...
    var result = 0
    var distance = inputs.distance
    var wait = inputs.parkTime

    if(distance <= basedis) {
    	result = baseprice
    }
    else if (distance > basedis && distance <= updis) {
    	result = baseprice + (distance - basedis) * unitprice
    }
    else {
    	result = baseprice + (updis - basedis) * unitprice + (distance - updis) * unitprice * uplift
    }

    result += wait * waitprice

    return Math.round(result)
};
