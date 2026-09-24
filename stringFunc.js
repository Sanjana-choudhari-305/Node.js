exports.stringConcat=function strCon(a,b){
    return a+b;
}

exports.stringSplit = function strSpl(a){
    return a.split(' ');
}

exports.ArrToStr = function strJoin(arr){
    return arr.join(' ');
}

exports.elemAtPos = function(str,pos){
    return str.charAt(pos);
}