const Questions = [{
    id: 0,
    q: "The biggest asteroid known is: ",
    a: [{ text: "Vesta", isCorrect: false },
        { text: "Icarus", isCorrect: false },
        { text: "Ceres", isCorrect: true },
        { text: "Eros", isCorrect: false }
    ]

},
{
    id: 1,
    q: "One Jupiter day is equal to which of the following?",
    a: [{ text: "13 hrs 10 min", isCorrect: false, isSelected: false },
        { text: "30 hrs 5 min", isCorrect: false },
        { text: "3 hrs 20 min", isCorrect: false },
        { text: "9 hrs 50 min", isCorrect: true }
    ]

},
{
    id: 2,
    q: "About how many light years across is the Milky Way?",
    a: [{ text: "1000", isCorrect: false },
        { text: "10,00", isCorrect: false },
        { text: "100,000", isCorrect: true },
        { text: "100", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.background = "linear-gradient(124deg, rgba(48,207,208,1) 0%, rgba(51,8,103,1) 100%)";
    op2.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op3.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op4.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op2.style.background = "linear-gradient(124deg, rgba(48,207,208,1) 0%, rgba(51,8,103,1) 100%)";
    op3.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op4.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    selected = op2.value;
})


// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op2.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op3.style.background = "linear-gradient(124deg, rgba(48,207,208,1) 0%, rgba(51,8,103,1) 100%)";
    op4.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op2.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op3.style.background = "linear-gradient(124deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 100%)";
    op4.style.background = "linear-gradient(124deg, rgba(48,207,208,1) 0%, rgba(51,8,103,1) 100%)";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})