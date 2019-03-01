
$(document).ready(function () {
    
    var goal = 0;
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
            var index = Math.floor(Math.random()*(i-1));
            var temp = valuePool[i-1];
            valuePool[i-1] = valuePool[index];
            valuePool[index] = temp;
        }
        console.log(valuePool);

        // assign numbers to gems
        for(var i = 1; i<5 ; i++){
            $("#gem-"+i).val(valuePool[i]);
            console.log($("#gem-"+i).val());
        }
        
        //set random goal
        goal = Math.floor(Math.random()*120 + 19);
        console.log(goal);
        score = 0;
        $(".goal").html(goal);
        $(".score").html(score);
        $("#wins").html(win);
        $("#losses").html(loss);
    }


    function compare(scores) {
        if (scores > goal) {
            alert("You lose!");
            loss ++;
            initiation();
        } else if (scores === goal) {
            alert("You win!");
            win ++;
            initiation();
        }
    }

    $(".gem").on("click", function(){
        score = score + parseInt($(this).val());
        console.log(score);
        $(".score").html(score);
        compare(score);   
    })

    initiation();

})

