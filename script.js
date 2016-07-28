function findModules(){
    var val = document.getElementById('arr').value;
    if(val == ''){
        document.getElementById('sol').innerHTML = 'Enter Values';
    }else {
         for(var i=1; i<=val; i++){
             if(i % 3 == 0 && i % 5 ==0){
                 document.getElementById('sol').innerHTML += ' - BuzzFizz - ';
             }else if(i % 3 == 0){
                 document.getElementById('sol').innerHTML += ' - Fizz - ';
            }else if(i % 5 == 0){
                 document.getElementById('sol').innerHTML += ' - Buzz - ';
            }else{
                 document.getElementById('sol').innerHTML += ' - '+i+ ' - ';
            }
         }
    }
}