function check() {

    const arrayQuestions = [
        'Wat is de hoofdstad van Frankrijk?',
        'Hoeveel poten heeft een spin?',
        'Wat is het grootste meer van Nederland?'
    ];
    const arrayAnswers = [
        'Parijs',
        8,
        'IJsselmeer'
    ];

    if (arrayAnswers[0] == document.getElementById("input1").value) {
        document.getElementById("answer").innerText = "Je hebt alles goed!";
        document.getElementById("input1").style.background = "green";
        document.getElementById("input2").style.background = "green";
        document.getElementById("input3").style.background = "green";
    }
    
}