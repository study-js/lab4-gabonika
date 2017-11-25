function min(a,b,c){
    var result = a;

    if(result > b){
        result = b;
    }

    if(result > c){
        result = c;
    }

    return result;
}

var res = min(5, 8, 4);

alert(res);