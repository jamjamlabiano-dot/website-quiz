
    const quizData = [
        {
            question: "Question 1: What Flag is this?",
            correctAnswer: "Philippines",
            wrongAnswer: "USA",
            flagimage: "pngtree-cute-philippines-flag-realistic-with-3d-shadow-effect-png-image_4559472.png"
        },
        {
            question: "Question 2: What Flag is this?",
            correctAnswer: "USA",
            wrongAnswer: "Columbia",
            flagimage: "images.png",
        }
    ];

    let currentImageIndex = 0;
    let score = 0;

    function handleCorrect(){
        document.getElementById("gameplay-section").style.display = "none";
        document.getElementById("correct-section").style.display = "block";
        score++;
        document.getElementById("score-for-button").textContent = "Score: " + score;
    }
    function handleWrong() {
        document.getElementById("gameplay-section").style.display = "none";
        document.getElementById("wrong-section").style.display = "block";
    }

    function nextQuestion() {
        if (currentImageIndex < quizData.length - 1) {
            currentImageIndex++;
            updateGameScreen();
        document.getElementById("correct-section").style.display = "none";
        document.getElementById("wrong-section").style.display = "none";
        document.getElementById("gameplay-section").style.display = "block";
        }
        else {
            alert("Quiz Completed!");
        }
    }

    //function goBack() {
        //document.getElementById("wrong-section").style.display = "none";
        //document.getElementById("gameplay-section").style.display = "block";
    //}

    function updateGameScreen() {
        const currentData = quizData[currentImageIndex];
        document.getElementById("question-title").textContent = currentData.question;
        document.getElementById("correct-btn").textContent = currentData.correctAnswer;
        document.getElementById("wrong-btn").textContent = currentData.wrongAnswer;
        document.getElementById("flag-img").src = currentData.flagimage;
    }
