var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(a,v,t){
    return (v*t)+(a*(t^2))/2;
};

exports.distance2 = function(v,t){
    return v*t
}

exports.velocity = function(d,t){
    return d/t;
}

exports.velocity2 = function(a,t){
    return(a*t)
}

exports.accelerate = function(v,t){
    return v/t;
}

exports.time = function(d,v){
    return d/v;
}
