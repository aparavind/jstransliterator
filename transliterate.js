
ul = require('unicode-length');
runes = require('runes');


function transliterate(string,origLang,finalLang){
    greatArray = {
      "oM" :{
        "opDvn" : "ॐ",
        "isLast" : 1,
        "isMinussable" : 0,
        "performMinusOne" : 0,
        "existAnother" : 0,
        "independantInvalid" : 0
      }
    };
	detClass = {};
	detClass = next_conv_char(0,0,detClass,1);

	offset = 0;
	loopString = string;
	outString = "";
	do {
		removeLastChar = 0;
		detClass = next_conv_char(greatArray,loopString,detClass,0);
		if (detClass.i == 0){
			break;
		}

		if (detClass.removeLastChar == 1){
			detClass = removeLastChar(detClass);
		}
		
		outString = outString + detClass.outStr;
		loopString = runes.substr(loopString,detClass.i);
	
	} while (1);
  }

function removeLastChar(detClass){
	len = ul.get(detClass.outStr);
	detClass.outStr = runes.substr(detClass.outStr,0,len-1);
	return detClass;
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
        getI = getMatchingI(inpString,0,greatArray);
    }

    if (getI.i >0){
        detClass.outStr = getI.greatA.opDvn;
	    detClass.removeLastChar = getI.greatA.performMinusOne && previousMinussable;
	    previousMinussable = getI.greatA.isMinussable;
    } else {
	    detClass.outStr = runes.substr(inpString,0,1);
	    getI.i = getI.i + 1;
    }
    detClass.i = getI.i;
    return detClass;
}

function getMatchxingI(inpString,hasMinus,greatArray){
    l = ul.get(inpString);
    for(i= (detClass.brhMaxSize > l) ? l:detClass.brhMaxSize ; i > 0; i--){
        subString = runes.substr(inpString,0,i);
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
