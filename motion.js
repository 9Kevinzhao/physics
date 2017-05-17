var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
    return v*t;
};

exports.distance = function(a,t){
    return (a*t^2)/2;
}
exports.velocity = function(d,t){
    return d/t;
}

exports.velocity = function(a,t){
    return(a*t)
}

exports.accelerate = function(v1,v2,t){
    return (v2-v1)/t;
}

exports.time = function(d,v){
    return d/v;
}
