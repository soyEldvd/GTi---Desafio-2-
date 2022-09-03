var requestURL = "https://quiz-trainee.herokuapp.com/questions";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
var quiz;

var pontos = 0;
var aux = -1;
var bote = document.getElementsByTagName("input");
var visivel = false;


request.onreadystatechange = function(){
    if(request.readyState === 4){
        if(request.status === 200)
        quiz = JSON.parse(request.responseText);
    }
};

request.send(null);

function questao(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("perguntas").style.display = "block"; 

    if(aux === -1 || input[0].checked != false || input[1].checked != false || input[2].checked != false || input[3].checked != false){
        if(aux != -1){
            for(var i =0; i < quiz[aux].options.length; i++){
                pontos = pontos + input[i].checked * quiz[aux]['options'][i]['value'];
            }
        }
        document.getElementById("botao").innerHTML = "Próximo";
        aux++;
    }

    if(aux == -1){
        document.getElementById("comeco").classList.remove('hide');
        document.getElementById("resultado").remove('hide');
    }

    if(aux < quiz.length){
        document.getElementById("comeco").innerHTML = quiz[aux].title;

        for(var i = 0; i < quiz[aux].options.length; i++){
            if(input.checked === true){
                input[i].checked = false;
            }
            document.getElementsByTagName("span")[i].innerHTML = quiz[aux].options[i].answer
            input[i].value = quiz[aux].options[i].value
        } 
    }


    else{
    console.log(quiz[aux - 1].options.length)
    finalizarQuiz();
    }


function Resultado(){
    var score = 3 * (quiz[aux - 1].options.length + 1);

    document.getElementById("perguntas").style.display = "none";
    document.getElementById("comeco").innerHTML = "QUIZ VALORES DA GTi";
    document.getElementById("resultado").innerHTML = "Sua pontuação: " + (pontos * 100 /score) + "%";
    document.getElementById("botao").innerHTML = "REFAZER QUIZ";
}
}











