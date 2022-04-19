// Roman numbers
const romanNumbers = {
	1:"I",
	2:"II",
	3:"III",
	4:"IV",
	5:"V",
	6:"VI",
	7:"VII",
	8:"VIII",
	9:"IX",
	10:"X",
	20:"XX",
	30:"XXX",
	40:"XL",
	50:"L",
	60:"LX",
	70:"LXX",
	80:"LXXX",
	90:"XC",
	100:"C",
	200:"CC",
	300:"CCC",
	400:"CD",
	500:"D",
	600:"DC",
	700:"DCC",
	800:"DCCC",
	900:"CM",
	1000:"M"
};

/**
 * Converts regular numbers to roman numbers
 * @param num Number to convert.
 * @return string Roman number.
 */
function convertToRoman(num) {
	var thousands = -1;
	var hundreds = -1;
	var tens = -1;
	var ones = -1;
	
	// we convert num to string and reverse in order
	// to easier separate into parts
	var revNumbersString = reverseString(num.toString());
	
	// separating number into parts with loop
	for(var i=0; i<revNumbersString.length; i++)
	{
		//console.log(revNumbersString[1]);
		// getting ones
		if(i == 0)
			ones = revNumbersString[i];
		
		// getting tens
		if(i == 1)
			tens = revNumbersString[i];
		
		// getting hundreds
		if(i == 2)
			hundreds = revNumbersString[i];
		
		// getting thousands
		if(i == 3)
			thousands = revNumbersString[i];
	}
	
	return getRomanNumber(thousands, hundreds, tens, ones);
}

/**
 * Forms roman number from regular numbers parts
 * @param tho How many thousands.
 * @param hun How many hundreds.
 * @param ten How many tens.
 * @param one How many ones.
 * @return out Roman number.
 */
function getRomanNumber(tho, hun, ten, one)
{
	var out = "";
	
	// Converts thousands
	if(tho > 0)
	{
		out = out + "M".repeat(tho);
	}
	
	// Converts hundreds
	if(hun > 0)
	{
		out = out + romanNumbers[hun*100];
	}
	
	// Converts tens
	if(ten > 0)
	{
		out = out + romanNumbers[ten*10];
	}		
	
	// Converts ones
	if(one > 0)
	{
		out = out + romanNumbers[one];
	}
	
	return out;
}

/**
 * Reverses string
 * @param str String to reverse.
 * @return string Reversed string.
 */
function reverseString(str)
{
	return str.split("").reverse().join("");
}

//console.log(convertToRoman(36));