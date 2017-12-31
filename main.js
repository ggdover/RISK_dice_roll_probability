
function getHighestVal(v1, v2, v3)
{
	if (v3 == undefined || v3 == null)
		return Math.max(v1, v2);
	else
		return Math.max( Math.max(v1,v2), v3);
}

function getSecondHighestVal(v1, v2, v3)
{
	if (v3 == undefined || v3 == null)
	{
		return Math.min(v1, v2);
	}
	else
	{
		if ( (v1 <= v2 && v1 >= v3) ||
			 (v1 <= v3 && v1 >= v2))
		{
			return v1;
		}
		else if ( (v2 <= v1 && v2 >= v3) ||
				  (v2 <= v3 && v2 >= v1))
		{
			return v2;
		}
		else if ( (v3 <= v1 && v3 >= v2) ||
				  (v3 <= v2 && v3 >= v1))
		{
			return v3;
		}
		else
		{
			console.log("Neither of 3 conditions were correct in the method getSecondHighestVal(). None out of the 3 values are the second highest");
			assert(false);
		}
	}
}

// Attacker uses 3 dice, Defender uses 2 dice

var NUM_OF_OUTCOMES__5_DICE_TOTAL = 7776; // 6^5 (3+2=5 dice)
var NUM_OF_OUTCOMES__4_DICE_TOTAL = 1296; // 6^4 (2+2=4 or 3+1=4 dice)
var NUM_OF_OUTCOMES__3_DICE_TOTAL = 216;  // 6^3 (2+1=3 dice)
var NUM_OF_OUTCOMES__2_DICE_TOTAL = 36;   // 6^2 (1+1=2 dice)

var num_of_times_attacker_loses_0__attacker_3_dice_defender_2_dice = 0;
var num_of_times_defender_loses_0__attacker_3_dice_defender_2_dice = 0;
var num_of_times_attacker_loses_1__attacker_3_dice_defender_2_dice = 0;
var num_of_times_defender_loses_1__attacker_3_dice_defender_2_dice = 0;
var num_of_times_attacker_loses_2__attacker_3_dice_defender_2_dice = 0;
var num_of_times_defender_loses_2__attacker_3_dice_defender_2_dice = 0;

var num_of_times_attacker_loses_0__attacker_2_dice_defender_2_dice = 0;
var num_of_times_defender_loses_0__attacker_2_dice_defender_2_dice = 0;
var num_of_times_attacker_loses_1__attacker_2_dice_defender_2_dice = 0;
var num_of_times_defender_loses_1__attacker_2_dice_defender_2_dice = 0;
var num_of_times_attacker_loses_2__attacker_2_dice_defender_2_dice = 0;
var num_of_times_defender_loses_2__attacker_2_dice_defender_2_dice = 0;

var num_of_times_attacker_loses_0__attacker_1_dice_defender_2_dice = 0;
var num_of_times_defender_loses_0__attacker_1_dice_defender_2_dice = 0;
var num_of_times_attacker_loses_1__attacker_1_dice_defender_2_dice = 0;
var num_of_times_defender_loses_1__attacker_1_dice_defender_2_dice = 0;

for (var d1 = 1; d1 <= 6; d1++) {
	for (var d2 = 1; d2 <= 6; d2++) {

		// The defender rolled the value d1 and d2 (2 dice)
		var maxDefender = getHighestVal(d1, d2);
		var secondMaxDefender = getSecondHighestVal(d1, d2);

		// Going through all the ouputs the attacker can get with 3 dice
		for (var a1 = 1; a1 <= 6; a1++) {

			// The attacker rolled the value a1 (1 die)

			if (a1 > maxDefender)
			{
				num_of_times_defender_loses_1__attacker_1_dice_defender_2_dice++;
				num_of_times_attacker_loses_0__attacker_1_dice_defender_2_dice++;
			}
			else // a1 <= maxDefender
			{
				num_of_times_defender_loses_0__attacker_1_dice_defender_2_dice++;
				num_of_times_attacker_loses_1__attacker_1_dice_defender_2_dice++;
			}

			for (var a2 = 1; a2 <= 6; a2++) {

				// The attacker rolled the value a1 and a2 (2 dice)
				var maxAttacker = getHighestVal(a1, a2);
				var secondMaxAttacker = getSecondHighestVal(a1, a2);

				if (maxAttacker > maxDefender && 
					secondMaxAttacker > secondMaxDefender)
				{
					num_of_times_defender_loses_2__attacker_2_dice_defender_2_dice++;
					num_of_times_attacker_loses_0__attacker_2_dice_defender_2_dice++;
				}
				else if (maxAttacker <= maxDefender && 
						 secondMaxAttacker <= secondMaxDefender)
				{
					num_of_times_defender_loses_0__attacker_2_dice_defender_2_dice++;
					num_of_times_attacker_loses_2__attacker_2_dice_defender_2_dice++;
				}
				else
				{
					num_of_times_defender_loses_1__attacker_2_dice_defender_2_dice++;
					num_of_times_attacker_loses_1__attacker_2_dice_defender_2_dice++;
				}

				for (var a3 = 1; a3 <= 6; a3++) {

					// The attacker rolled the value a1, a2 and a3 (3 dice)

					var maxAttacker = getHighestVal(a1, a2, a3);
					var secondMaxAttacker = getSecondHighestVal(a1, a2, a3);

					if (maxAttacker > maxDefender && 
						secondMaxAttacker > secondMaxDefender)
					{
						num_of_times_defender_loses_2__attacker_3_dice_defender_2_dice++;
						num_of_times_attacker_loses_0__attacker_3_dice_defender_2_dice++;
					}
					else if (maxAttacker <= maxDefender && 
							 secondMaxAttacker <= secondMaxDefender)
					{
						num_of_times_defender_loses_0__attacker_3_dice_defender_2_dice++;
						num_of_times_attacker_loses_2__attacker_3_dice_defender_2_dice++;
					}
					else
					{
						num_of_times_defender_loses_1__attacker_3_dice_defender_2_dice++;
						num_of_times_attacker_loses_1__attacker_3_dice_defender_2_dice++;
					}
				}
			}
		}
	}
}

var num_of_times_attacker_loses_0__attacker_3_dice_defender_1_dice = 0;
var num_of_times_defender_loses_0__attacker_3_dice_defender_1_dice = 0;
var num_of_times_attacker_loses_1__attacker_3_dice_defender_1_dice = 0;
var num_of_times_defender_loses_1__attacker_3_dice_defender_1_dice = 0;

var num_of_times_attacker_loses_0__attacker_2_dice_defender_1_dice = 0;
var num_of_times_defender_loses_0__attacker_2_dice_defender_1_dice = 0;
var num_of_times_attacker_loses_1__attacker_2_dice_defender_1_dice = 0;
var num_of_times_defender_loses_1__attacker_2_dice_defender_1_dice = 0;

var num_of_times_attacker_loses_0__attacker_1_dice_defender_1_dice = 0;
var num_of_times_defender_loses_0__attacker_1_dice_defender_1_dice = 0;
var num_of_times_attacker_loses_1__attacker_1_dice_defender_1_dice = 0;
var num_of_times_defender_loses_1__attacker_1_dice_defender_1_dice = 0;

for (var d1 = 1; d1 <= 6; d1++) {

	// The defender rolled the value d1 (1 die)

	// Going through all the ouputs the attacker can get with 1,2 and 3 dice
	for (var a1 = 1; a1 <= 6; a1++) {

		// The attacker rolled the value a1 (1 die)

		if (a1 > d1)
		{
			num_of_times_defender_loses_1__attacker_1_dice_defender_1_dice++;
			num_of_times_attacker_loses_0__attacker_1_dice_defender_1_dice++;
		}
		else // a1 <= d1
		{
			num_of_times_defender_loses_0__attacker_1_dice_defender_1_dice++;
			num_of_times_attacker_loses_1__attacker_1_dice_defender_1_dice++;
		}

		for (var a2 = 1; a2 <= 6; a2++) {

			// The attacker rolled the value a1 and a2 (2 dice)

			var maxAttacker = getHighestVal(a1, a2);

			if (maxAttacker > d1)
			{
				num_of_times_defender_loses_1__attacker_2_dice_defender_1_dice++;
				num_of_times_attacker_loses_0__attacker_2_dice_defender_1_dice++;
			}
			else // maxAttacker <= d1
			{
				num_of_times_defender_loses_0__attacker_2_dice_defender_1_dice++;
				num_of_times_attacker_loses_1__attacker_2_dice_defender_1_dice++;
			}

			for (var a3 = 1; a3 <= 6; a3++) {

				// The attacker rolled the value a1, a2 and a3 (3 dice)

				maxAttacker = getHighestVal(a1, a2, a3);

				if (maxAttacker > d1)
				{
					num_of_times_defender_loses_1__attacker_3_dice_defender_1_dice++;
					num_of_times_attacker_loses_0__attacker_3_dice_defender_1_dice++;
				}
				else // maxAttacker <= d1
				{
					num_of_times_defender_loses_0__attacker_3_dice_defender_1_dice++;
					num_of_times_attacker_loses_1__attacker_3_dice_defender_1_dice++;
				}
			}
		}
	}
}

var defender_wins__attacker_3_dice_defender_1_dice_str = num_of_times_attacker_loses_1__attacker_3_dice_defender_1_dice+"/"+NUM_OF_OUTCOMES__4_DICE_TOTAL+"="+ ((num_of_times_attacker_loses_1__attacker_3_dice_defender_1_dice / NUM_OF_OUTCOMES__4_DICE_TOTAL) * 100).toFixed(2) +"%";
var attacker_wins__attacker_3_dice_defender_1_dice_str = num_of_times_defender_loses_1__attacker_3_dice_defender_1_dice+"/"+NUM_OF_OUTCOMES__4_DICE_TOTAL+"="+ ((num_of_times_defender_loses_1__attacker_3_dice_defender_1_dice / NUM_OF_OUTCOMES__4_DICE_TOTAL) * 100).toFixed(2) +"%";

var defender_wins__attacker_2_dice_defender_1_dice_str = num_of_times_attacker_loses_1__attacker_2_dice_defender_1_dice+"/"+NUM_OF_OUTCOMES__3_DICE_TOTAL+"="+ ((num_of_times_attacker_loses_1__attacker_2_dice_defender_1_dice / NUM_OF_OUTCOMES__3_DICE_TOTAL) * 100).toFixed(2) +"%";
var attacker_wins__attacker_2_dice_defender_1_dice_str = num_of_times_defender_loses_1__attacker_2_dice_defender_1_dice+"/"+NUM_OF_OUTCOMES__3_DICE_TOTAL+"="+ ((num_of_times_defender_loses_1__attacker_2_dice_defender_1_dice / NUM_OF_OUTCOMES__3_DICE_TOTAL) * 100).toFixed(2) +"%";

var defender_wins__attacker_1_dice_defender_1_dice_str = num_of_times_attacker_loses_1__attacker_1_dice_defender_1_dice+"/"+NUM_OF_OUTCOMES__2_DICE_TOTAL+"="+ ((num_of_times_attacker_loses_1__attacker_1_dice_defender_1_dice / NUM_OF_OUTCOMES__2_DICE_TOTAL) * 100).toFixed(2) +"%";
var attacker_wins__attacker_1_dice_defender_1_dice_str = num_of_times_defender_loses_1__attacker_1_dice_defender_1_dice+"/"+NUM_OF_OUTCOMES__2_DICE_TOTAL+"="+ ((num_of_times_defender_loses_1__attacker_1_dice_defender_1_dice / NUM_OF_OUTCOMES__2_DICE_TOTAL) * 100).toFixed(2) +"%";




var defender_wins__attacker_3_dice_defender_2_dice_str = num_of_times_attacker_loses_2__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__5_DICE_TOTAL+"="+ ((num_of_times_attacker_loses_2__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__5_DICE_TOTAL) * 100).toFixed(2) +"%";
var attacker_wins__attacker_3_dice_defender_2_dice_str = num_of_times_defender_loses_2__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__5_DICE_TOTAL+"="+ ((num_of_times_defender_loses_2__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__5_DICE_TOTAL) * 100).toFixed(2) +"%";
var both_wins__attacker_3_dice_defender_2_dice_str     = num_of_times_attacker_loses_1__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__5_DICE_TOTAL+"="+ ((num_of_times_attacker_loses_1__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__5_DICE_TOTAL) * 100).toFixed(2) +"%";

var defender_wins__attacker_2_dice_defender_2_dice_str = num_of_times_attacker_loses_2__attacker_2_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__4_DICE_TOTAL+"="+ ((num_of_times_attacker_loses_2__attacker_2_dice_defender_2_dice / NUM_OF_OUTCOMES__4_DICE_TOTAL) * 100).toFixed(2) +"%";
var attacker_wins__attacker_2_dice_defender_2_dice_str = num_of_times_defender_loses_2__attacker_2_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__4_DICE_TOTAL+"="+ ((num_of_times_defender_loses_2__attacker_2_dice_defender_2_dice / NUM_OF_OUTCOMES__4_DICE_TOTAL) * 100).toFixed(2) +"%";
var both_wins__attacker_2_dice_defender_2_dice_str     = num_of_times_attacker_loses_1__attacker_2_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__4_DICE_TOTAL+"="+ ((num_of_times_attacker_loses_1__attacker_2_dice_defender_2_dice / NUM_OF_OUTCOMES__4_DICE_TOTAL) * 100).toFixed(2) +"%";

var defender_wins__attacker_1_dice_defender_2_dice_str = num_of_times_attacker_loses_1__attacker_1_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__3_DICE_TOTAL+"="+ ((num_of_times_attacker_loses_1__attacker_1_dice_defender_2_dice / NUM_OF_OUTCOMES__3_DICE_TOTAL) * 100).toFixed(2) +"%";
var attacker_wins__attacker_1_dice_defender_2_dice_str = num_of_times_defender_loses_1__attacker_1_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__3_DICE_TOTAL+"="+ ((num_of_times_defender_loses_1__attacker_1_dice_defender_2_dice / NUM_OF_OUTCOMES__3_DICE_TOTAL) * 100).toFixed(2) +"%";


console.log("ATTACKER 1 DIE, DEFENDER 1 DIE");
console.log("Defender Wins: "+defender_wins__attacker_1_dice_defender_1_dice_str);
console.log("Attacker Wins: "+attacker_wins__attacker_1_dice_defender_1_dice_str);

console.log("\nATTACKER 2 DICE, DEFENDER 1 DIE");
console.log("Defender Wins: "+defender_wins__attacker_2_dice_defender_1_dice_str);
console.log("Attacker Wins: "+attacker_wins__attacker_2_dice_defender_1_dice_str);

console.log("\nATTACKER 3 DICE, DEFENDER 1 DIE");
console.log("Defender Wins: "+defender_wins__attacker_3_dice_defender_1_dice_str);
console.log("Attacker Wins: "+attacker_wins__attacker_3_dice_defender_1_dice_str);

console.log("\nATTACKER 1 DIE, DEFENDER 2 DICE");
console.log("Defender Wins: "+defender_wins__attacker_1_dice_defender_2_dice_str);
console.log("Attacker Wins: "+attacker_wins__attacker_1_dice_defender_2_dice_str);

console.log("\nATTACKER 2 DICE, DEFENDER 2 DICE");
console.log("Defender Wins: "+defender_wins__attacker_2_dice_defender_2_dice_str);
console.log("Attacker Wins: "+attacker_wins__attacker_2_dice_defender_2_dice_str);
console.log("Both Wins:     "+both_wins__attacker_2_dice_defender_2_dice_str);

console.log("\nATTACKER 3 DICE, DEFENDER 2 DICE");
console.log("Defender Wins: "+defender_wins__attacker_3_dice_defender_2_dice_str);
console.log("Attacker Wins: "+attacker_wins__attacker_3_dice_defender_2_dice_str);
console.log("Both Wins:     "+both_wins__attacker_3_dice_defender_2_dice_str);
