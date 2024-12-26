var array = [
    {
        work:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
        auther:" Marilyn Monroe"
    },
    {
        work:"So many books, so little time.",
        auther:"  Frank Zappa" 
    },
    {
        work:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        auther:" Albert Einstein" 
    },
    {
        work:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        auther:"Bernard M. Baruch" 
    },
    {
        work:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        auther:"Bernard M. Baruch" 
    },  
      {
        work:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        auther:"Bernard M. Baruch" 
    },
];


function createQuate(){
    var count = Number.parseInt(Math.random()*array.length + 1);
    document.getElementById("auther").innerHTML=`${array[count].auther}`;
    document.getElementById("work").innerHTML=`${array[count].work}`;



    }
