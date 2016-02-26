/* This is my code library. I have used the underscore/lowdash convention of using the underscore for naming ease. I am using the module pattern so any of these functions can be invoked using _.function_name();*/

var _ = (function(){

// this contains functions that will be exposed to the outer enviornment    
var public_api = {
    add: add,
    adder:adder,
    fizzBuzz : fizzBuzz,
    fizzBuzzPlus:fizzBuzzPlus,
    loopingTriangle : loopingTriangle,
    loopingTrianglePlus: loopingTrianglePlus
    
}    

//simple add function _.add(x , y)
    function add(x, y){
        return x + y;
    }
    
//_.adder(x) function allow closure of the first paramater
    function adder(x){
        function add(y){
            return x + y;
        }
        return add;
    }
//_.fizzBizz 
    function fizzBuzz(){
        var out = "";
        for (var i = 0; i < 100; i++){ 
            var j = i + 1;
            out = "";
            if(j % 3 === 0){
                out = "fizz";
            }
            if(j % 5 === 0){
                out = out + "Buzz";
            }

            console.log(out || j);
        }
    }
    
/*_.fizzBizzPlus optional parameters length = how many number you want to test, fizz and buzz are the numbers you want each to be divisible by.*/
    function fizzBuzzPlus(length, fizz, buzz){
        var out = "";
        for (var i = 0; i < (length || 100); i++){ 
            var j = i + 1;
            out = "";
            if(j % (fizz || 3) === 0){
                out = "fizz";
            }
            if(j % (buzz || 5) === 0){
                out = out + "Buzz";
            }

            console.log(out || j);
        }
    }

/* prints a triangle of #*/
    function loopingTriangle(){
        var hash = "#";
        var out = "";
        
        for (var i = 0; i < 6; i++){
            out = out + hash;
            console.log(out);
        }
        
    }
    
/* adds optional height and character parameters to control triangle height and the string that builds the triangle */
    function loopingTrianglePlus(height , string){
        var hash = (string || "#");
        var out = "";
        
        for (var i = 0; i < (height || 6); i++){
            out = out + hash;
            console.log(out);
        }
        
    }


return public_api;
    
})();

_.loopingTrianglePlus(10, "Andy");
