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

var display5 = document.querySelector("#display-part-5");
var display6 = document.querySelector("#display-part-6");
var display7 = document.querySelector("#display-part-7");
var display8 = document.querySelector("#display-part-8");
var display9 = document.querySelector("#display-part-9");
var display10 = document.querySelector("#display-part-10");
var display11 = document.querySelector("#display-part-11");

output.innerText = ans.join(" ");
var count=7;
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
            if(count<=6)
            {
                display5.style.display='block';
            }
            if(count<=5)
            {
                display6.style.display='block';
            }

            if(count<=4)
            {
                display7.style.display='block';
            }
            
            if(count<=3)
            {
                display8.style.display='block';
            }

            if(count<=2)
            {
                display9.style.display='block';
            }

            if(count<=1)
            {
                display10.style.display='block';
            }

            if(count<=0)
            {
                display11.style.display='block';
            }

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

