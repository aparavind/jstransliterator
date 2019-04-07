function transliterate(string,origLang,finalLang){
    ebrh2dvng = {
      "oM" :{
        "opDvn" : "ॐ",
        "isLast" : 1,
        "isMinussable" : 0,
        "performMinusOne" : 0,
        "existAnother" : 0,
        "independantInvalid" : 0
      }
    }
  }

function next_conv_char(greatArray,inpString,detClass,resetAll){

    if (resetAll == 1){
        detClass.previousMinussable = 0;
        detClass.outputStatus = 0;
        return detClass;
    }

    if (inpString == ""){
        detClass.outputStatus = 0;
        return detClass;       
    }

    getI = getMatchingI(inpString,detClass.previousMinussable,greatArray);

    if ((getI.i == 0) && (detClass.previousMinussable == 1)){
        i = getMatchingI(inpString,0,greatArray);
    }

    if (i >0){
        outStr = greatArray[]
    }
}

function getMatchingI(inpString,hasMinus,greatArray){
    l = inpString.length;
    for(i= (detClass.brhMaxSize > l) ? l:detClass.brhMaxSize ; i > 0; i--){
        subString = inpString.substr(0,i);
        if (hasMinus){
            subString = subString + "[%% e %%]";
        }
        if (greatArray[subString]){
            break;
        }
    }
    return i;
}




  
  transliterate("oM")