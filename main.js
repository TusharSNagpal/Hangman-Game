var output = document.querySelector("#output");
var inputLetter = document.querySelector("#inputLetter");
var btnCheck = document.querySelector("#check");
var progress = document.querySelector("#progress");
var result = document.querySelector("#result");

var arrayAnimals = ["DOG","CAT","ELEPHANT","LION","TIGER","COW","DEER"];
var randWord = arrayAnimals[Math.floor(Math.random()*arrayAnimals.length)];

var ans = [];

for(var i=0; i < randWord.length; i++){
    ans[i] = "_";
}

output.innerText = ans.join(" ");
var count=5;
function whatOnClick(){
    var input = inputLetter.value;
    
    if(input.length > 0)
    { 
        var flag=0;
        for(var i=0; i< randWord.length; i++)
        {
            if(randWord[i] === input)
            {
                ans[i] = input;
                flag=1;
            }
        }
        output.innerText = ans.join(" ");
        inputLetter.value="";

        if(flag===0)
        {
            count--;
            progress.innerText = "Chances left : "+count;
            console.log(count);
        }
    }
    else{
        count--;
        progress.innerText = "Chances left : "+count;
    }

    if(count===0)
    {
        result.innerText = "YOU LOST! PLEASE PLAY AGAIN."
    }
    var win=1;
    for(var i=0; i<randWord.length; i++)
    {
        if(ans[i]==="_")
        {
        win=0;
        break;
        }
    }

    if(count>0 && win===1)
    {
        result.innerText = "WOHOO! YOU WON."
    }
}

btnCheck.addEventListener("click", whatOnClick);


