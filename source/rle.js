// Var. 11
"use strict";

/* 1. a simple implementation */
/*
const rle = function(stringToEncode) {
    var letterOccurenceCount = 1;
    var stringEncoded = "";
	for (var i = 0; i < stringToEncode.length; ++i) {
        while (stringToEncode[i] === stringToEncode[i + 1]) {
            ++letterOccurenceCount;
            ++i;
        }
        if (letterOccurenceCount === 1) {
            stringEncoded += stringToEncode[i];
        }
        else {
            stringEncoded += stringToEncode[i] + letterOccurenceCount.toString();
        }

        letterOccurenceCount = 1;
    }

	return stringEncoded;
}
*/

/* 2. a more sophisticated implementation */
const assembleEncodedString = match => {
    var stringEncoded = "";
    stringEncoded += match[0] + ((match.length != 1) ? match.length : "");

    return stringEncoded;
}

const rle = stringToEncode => {
    var stringEncoded = "";
    stringToEncode.match(/(.)\1*/g).forEach(
                                        function(matched) {
                                            stringEncoded += assembleEncodedString(matched)
                                        }
                                    );
    
    return stringEncoded;
}