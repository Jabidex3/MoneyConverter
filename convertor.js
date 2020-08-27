function convert(){
    var amt = document.getElementById("Amount").value.trim();
    if(amt.length==0){
        document.getElementById("hidden").innerHTML= "Please enter a money amount to convert!";        
    }
    else{
        if(isNaN(Number(amt))){
            document.getElementById("hidden").innerHTML= "Please enter a VALID money amount to convert!";        
        }
        else{
            amt=Number(amt);
            var selElement = document.getElementById("before");
            var optionPicked;
            var size =selElement.options.length;
            for ( let i = 0; i < size; i++ ) {
                optionPicked = selElement.options[i];
                if ( optionPicked.selected === true ) {
                    break;
                }
            }

            var selElementTwo = document.getElementById("after");
            var secondPicked;
            var sizetwo =selElementTwo.options.length;
            for ( let j = 0; j < sizetwo; j++ ) {
                secondPicked = selElementTwo.options[j];
                if ( secondPicked.selected === true ) {
                    break;
                }
            }

            var newAmt = exchange(amt,optionPicked,secondPicked);
            document.getElementById("hidden").style.color='green';
            //document.getElementById("hidden").innerHTML= "<b>"+optionPicked.value+" "+secondPicked.value+"</b>";
            document.getElementById("hidden").innerHTML= "<b>"+newAmt+" "+secondPicked.value+"</b>";
            //document.getElementById("hidden").innerHTML= typeof(optionPicked.innerHTML) ;
        }
        
    }

  }

  function exchange(amt,currOne,currTwo){
      if(currOne.innerHTML==currTwo.innerHTML){
          return amt;
      }
      else{
          if(currOne.innerHTML=="U.S. Dollar"){
              if(currTwo.innerHTML=="Euro"){
                return amt*.85;
              }
              else if(currTwo.innerHTML=="Indian Rupee"){
                return amt*73.85;
              }
              else if(currTwo.innerHTML=="Bangladeshi Taka"){
                return amt*84.81;
              }
              else if(currTwo.innerHTML=="Mexican Peso"){
                return amt*22.20;
              }
          }
          else if(currOne.innerHTML=="Euro"){
            if(currTwo.innerHTML=="U.S. Dollar"){
                return amt*1.18;
            }
            else if(currTwo.innerHTML=="Indian Rupee"){
                return amt*87.11;
            }
            else if(currTwo.innerHTML=="Bangladeshi Taka"){
                return amt*100.05;
            }
            else if(currTwo.innerHTML=="Mexican Peso"){
                return amt*26.21;
            }
        }
        else if(currOne.innerHTML=="Indian Rupee"){
            if(currTwo.innerHTML=="U.S. Dollar"){
                return amt*0.014;
            }
            else if(currTwo.innerHTML=="Euro"){
                return amt*0.011;
            }
            else if(currTwo.innerHTML=="Bangladeshi Taka"){
                return amt*1.15;
            }
            else if(currTwo.innerHTML=="Mexican Peso"){
                return amt*0.3;
            }
        }
        else if(currOne.innerHTML=="Bangladeshi Taka"){
            if(currTwo.innerHTML=="U.S. Dollar"){
                return amt*0.012;
            }
            else if(currTwo.innerHTML=="Indian Rupee"){
                return amt*0.87;
            }
            else if(currTwo.innerHTML=="Euro"){
                return amt*0.01;
            }
            else if(currTwo.innerHTML=="Mexican Peso"){
                return amt*0.26;
            }
        }
        else if(currOne.innerHTML=="Mexican Peso"){
            if(currTwo.innerHTML=="U.S. Dollar"){
                return amt*0.045;
            }
            else if(currTwo.innerHTML=="Indian Rupee"){
                return amt*3.34;
            }
            else if(currTwo.innerHTML=="Bangladeshi Taka"){
                return amt*3.83;
            }
            else if(currTwo.innerHTML=="Euro"){
                return amt*0.017;
            }
        }
      }
  }