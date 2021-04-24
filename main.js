var output = document.querySelector("#output");
var inputLetter = document.querySelector("#inputLetter");
var btnCheck = document.querySelector("#check");
var progress = document.querySelector("#progress");
var result = document.querySelector("#result");
var textLine = document.querySelector("#textLine");
var wc = document.querySelector("#wc");
var correctA = document.querySelector("#correctAns");

var arrayAnimals = ["DOG","CAT","ELEPHANT","LION","TIGER","COW","DEER"];
var randWord = arrayAnimals[Math.floor(Math.random()*arrayAnimals.length)];

textLine.innerText = "Guess the ANIMAL NAME having "+randWord.length+" letters.";

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
        progress.innerText = "Chances left : "+count;
        var flag=0;
        for(var i=0; i< randWord.length; i++)
        {
            if(randWord[i] === input.toUpperCase())
            {
                wc.style.color = "green";
                wc.innerText = "Yeah! Go on..";
                ans[i] = randWord[i];
                flag=1;
            }
        }
        output.innerText = ans.join(" ");
        inputLetter.value="";

        if(flag===0)
        {
            count--;
            wc.style.color = "red";
            wc.innerText = "Oops! Try again..";
            progress.innerText = "Chances left : "+count;
            console.log(count);
        }
    }
    else{
        progress.innerText = "Please enter something.. Chances left : "+count;
    }

    if(count<=0)
    {
        result.style.color = "red";
        result.innerText = "YOU LOST! PLAY AGAIN."
        correctA.innerText = "CORRECT ANSWER IS " + randWord+ ".";
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
        result.style.color = "green";
        result.innerText = "WOHOO! YOU WON."
        correctA.innerText = "CORRECT ANSWER IS " + randWord+ ".";
    }
}

btnCheck.addEventListener("click", whatOnClick);


