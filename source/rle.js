// Var. 11
"use strict";

/* 1. a simple implementation */
/*
const rle = stringToEncode => {
    if (typeof(stringToEncode) !== "string" || stringToEncode.length === 0) {
        throw new TypeError("Invalid input: not an empty string expected.");
    }

    let letterOccurenceCount = 1;
    let stringEncoded = "";
	for (let i = 0; i < stringToEncode.length; ++i) {
        while (stringToEncode[i] === stringToEncode[i + 1]) {
            ++letterOccurenceCount;
            ++i;
        }

        stringEncoded += stringToEncode[i] + ((letterOccurenceCount > 1) ? letterOccurenceCount.toString() : "");

        letterOccurenceCount = 1;
    }

	return stringEncoded;
}
*/

/* 2. a more sophisticated implementation */
const assembleEncodedString = match => {
    let stringEncoded = "";
    stringEncoded += match[0] + ((match.length > 1) ? match.length : "");

    return stringEncoded;
}

const rle = stringToEncode => {
    if (typeof(stringToEncode) !== "string" || stringToEncode.length === 0) {
        throw new TypeError("Invalid input: not an empty string expected.");
    }

    let stringEncoded = "";
    stringToEncode.match(/(.)\1*/g).forEach(
                                        function(matched) {
                                            stringEncoded += assembleEncodedString(matched)
                                        }
                                    );
    
    return stringEncoded;
}