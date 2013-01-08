function validations() {
            
    var phonePart1 ;
    var phonePart2 ;
    var phonePart3;
    
    
    var _textBoxes = document.getElementsByTagName("input");
    for (var i = 0; i < _textBoxes.length; i++) 
    {
        if (_textBoxes[i].id.indexOf("phonePart1") >-1)
        {        
            phonePart1 = document.getElementById(_textBoxes[i].id).value;
        }
        if (_textBoxes[i].id.indexOf("phonePart2") >-1)
        {
            phonePart2 = document.getElementById(_textBoxes[i].id).value;
        }
        if (_textBoxes[i].id.indexOf("phonePart3") >-1)
        {
            phonePart3 = document.getElementById(_textBoxes[i].id).value;
        }
    }
                     
    if (phonePart1 == "" || phonePart2 == "" || phonePart3 == "") 
    {
        alert("Please enter a valid Phone Number");
        return false;
    } 
    
    if (phonePart1.length < 3 || phonePart2.length < 3 || phonePart3.length < 4) 
    {
        alert("Please enter a valid Phone Number");
        return false;
    } 
    
    if (!isNumber(phonePart1) || !isNumber(phonePart2) || !isNumber(phonePart3)) 
    {
        alert("Please enter a valid Phone Number");
        return false;
    } 
    
    return true;
}




function ValidatePhoneParameters() {
  var phonePart1;
  var phonePart2;
  var phonePart3;

//  var now = new Date();
//  var localTimeZone = now.getTimezoneOffset();
//  var localHour = localTimeZone.getHours();
//  
//  var hidTimeZone = document.getElementById('_localTime');
//  if (hidTimeZone != null) { hidTimeZone.value = localTimeZone;}

  var _textBoxes = document.getElementsByTagName("input");
  for (var i = 0; i < _textBoxes.length; i++) {
    if (_textBoxes[i].id.indexOf("phonePart1") > -1) {
      phonePart1 = document.getElementById(_textBoxes[i].id).value;
    }
    if (_textBoxes[i].id.indexOf("phonePart2") > -1) {
      phonePart2 = document.getElementById(_textBoxes[i].id).value;
    }
    if (_textBoxes[i].id.indexOf("phonePart3") > -1) {
      phonePart3 = document.getElementById(_textBoxes[i].id).value;
    }
  }

  if (phonePart1 == "" || phonePart2 == "" || phonePart3 == "") {
    alert("Please enter a valid Phone Number");
    return false;
  }

  if (phonePart1.length < 3 || phonePart2.length < 3 || phonePart3.length < 4) {
    alert("Please enter a valid Phone Number");
    return false;
  }

  if (!isNumber(phonePart1) || !isNumber(phonePart2) || !isNumber(phonePart3)) {
    alert("Please enter a valid Phone Number");
    return false;
  }

  return true;
 
}


function isNumber(field) 
{ 
    var re = /^[0-9]+$/; 
    if (re.test(field))
    { 
        return true;
    }   
    else
    {
        return false;
    }
}

function GetClientTime() 
{
  var tzo = (new Date()).getTimezoneOffset().toString();
  return tzo;
}

function GetLocalTimeOffset() {
  var now = new Date();
  var offset = now.getTimezoneOffset();

  var hidTimeZone = document.getElementById(id);
  if (hidTimeZone != null) {
    hidTimeZone.value = offset;
  }

}  

function AutoFocus(nameOfTextBoxToCheck,nameOfTextBoxToFocus)
{           
    var textBoxToCheck
    var textBoxToFocus         
    // Get a list if textboxes
    var _textBoxes = document.getElementsByTagName("input");
    // Loop through all textboxes
    for (var i = 0; i < _textBoxes.length; i++) 
    {                                         
        // Get a reference to the first part of the phone number
        if (_textBoxes[i].id.indexOf(nameOfTextBoxToCheck) >-1)
        {  
            textBoxToCheck = document.getElementById(_textBoxes[i].id);
        }
        // Get a reference to the second part of the phone number
        if (_textBoxes[i].id.indexOf(nameOfTextBoxToFocus) >-1)
        {  
            textBoxToFocus = document.getElementById(_textBoxes[i].id);
        }                                  
     }
     
    // If the length if the first part is 3
    if (textBoxToCheck.value.length == 3)
    {
        textBoxToFocus.focus();                                
    }       
}