function BMI(){
    var i = document.getElementById('i').value;
    var g = document.getElementById('g').value;
    var a = document.getElementById('a').value;
    var bmrF = (10*g+6.25*i-5*a-161);
    var bmrM = (10*g+6.25*i-5*a+5);

    if(document.getElementById('rb1').checked && document.getElementById('rb3').checked){
        document.getElementById("result").innerHTML="BMR ul tau este" + ' ' + bmrM*1.2;
    }
    else if(document.getElementById('rb2').checked && document.getElementById('rb3').checked){
        document.getElementById("result").innerHTML="BMR ul tau este" + ' ' + bmrF*1.2;
    }
    else if(document.getElementById('rb1').checked && document.getElementById('rb4').checked){
        document.getElementById("result").innerHTML="BMR ul tau este" + ' ' + bmrM*1.375;
    }
    else if(document.getElementById('rb2').checked && document.getElementById('rb4').checked){
        document.getElementById("result").innerHTML="BMR ul tau este" + ' ' + bmrF*1.375;
    }
    else if(document.getElementById('rb1').checked && document.getElementById('rb5').checked){
        document.getElementById("result").innerHTML="BMR ul tau este" + ' ' + bmrM*1.55;
    }
    else if(document.getElementById('rb2').checked && document.getElementById('rb5').checked){
        document.getElementById("result").innerHTML="BMR ul tau este" + ' ' + bmrF*1.55;
    }
    else if(document.getElementById('rb1').checked && document.getElementById('rb6').checked){
        document.getElementById("result").innerHTML="BMR ul tau este" + ' ' + bmrM*1.725;
    }
    else if(document.getElementById('rb2').checked && document.getElementById('rb6').checked){
        document.getElementById("result").innerHTML="BMR ul tau este" + ' ' + bmrF*1.725;
    }
    else if(document.getElementById('rb1').checked === false || document.getElementById('rb2').checked === false || document.getElementById('rb3').checked === false || document.getElementById('rb4').checked === false || document.getElementById('rb5').checked === false || document.getElementById('rb6').checked === false){
        document.getElementById("result").innerHTML="Selecteaza sexul si tipul de activitate";
    }
}

function check_test() {
    if(document.contains(document.getElementById("test_number"))) {
      document.getElementById("test_number").remove();
    }
    document.getElementById("test_div").innerHTML += "<input type='number' name='test_number' id='test_number'/>";
  }

  

