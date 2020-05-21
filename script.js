function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
 
    if(w > 0 && h > 0){	
        var bmi = w/(h/100*h/100);
        var bmio=(bmi.toFixed(1));
		document.getElementById('result').innerHTML='Your BMI is ' + bmio;
 
		if(bmi < 18.5){
            document.getElementById('type').innerHTML = 'You are too thin.';
            document.getElementById('type').style.color = '#e63946';
		}
		if(bmi >= 18.5 && bmi < 25){
            document.getElementById('type').innerHTML = 'You are healthy.';
            document.getElementById('type').style.color = '#2a9d8f';
		}
		if(bmi >= 25 && bmi < 30){
            document.getElementById('type').innerHTML = 'You are overweight.';
            document.getElementById('type').style.color = '#f4a261';
        }
        if(bmi >= 30){
            document.getElementById('type').innerHTML = 'You are obese.';
            document.getElementById('type').style.color = '#e63946';
		}
	}
	else{
		alert('Please enter your weight and height!')
	}

}
