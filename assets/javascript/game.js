
$(document).ready(function () {
    
    var goal = 0;
    var currentNum = 0;
    var win = 0;
    var loss = 0;
    var score = 0;
    var gemValue = [0,0,0,0];
    var valuePool = [1,2,3,4,5,6,7,8,9,10,11,12];
    var red = 0;
    var blue = 0; 
    var yellow = 0;
    var green = 0;

    function initiation(){
        // shuffle the value pool
        for(var i = valuePool.length; i>0; i--){
            var index = Math.floor(Math.random()*i);
            var temp = valuePool[i];
            valuePool[i] = valuePool[index];
            valuePool[index] = temp;
        }
        red = valuePool[0];
        blue = valuePool[1];
        yellow = valuePool[2];
        green = valuePool[3];
        //set random goal
        goal = Math.floor(Math.random()*120 + 19);
        console.log(goal);
    }

    initiation();




})

