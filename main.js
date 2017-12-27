
// Attacker uses 3 dice, Defender uses 2 dice

var NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE = 7776; // 6^5 (3+2=5 dice)


var num_of_times_attacker_loses_0__attacker_3_dice_defender_2_dice = 0;
var num_of_times_defender_loses_0__attacker_3_dice_defender_2_dice = 0;
var num_of_times_attacker_loses_1__attacker_3_dice_defender_2_dice = 0;
var num_of_times_defender_loses_1__attacker_3_dice_defender_2_dice = 0;
var num_of_times_attacker_loses_2__attacker_3_dice_defender_2_dice = 0;
var num_of_times_defender_loses_2__attacker_3_dice_defender_2_dice = 0;

// Going through all the ouputs the attacker can get with 2 dice
for (var d1 = 1; d1 <= 6; d1++) {
	for (var d2 = 1; d2 <= 6; d2++) {

		// The defender rolled the value d1 and d2

		// Going through all the ouputs the attacker can get with 3 dice
		for (var a1 = 1; a1 <= 6; a1++) {
			for (var a2 = 1; a2 <= 6; a2++) {
				for (var a3 = 1; a3 <= 6; a3++) {

					// The attacker rolled the value a1, a2 and a3
					// -------------------------------------------

					// Lets say the Defender used 2 dice and Attacker used 3 dice

					// Determine which is the highest value die of both Defender and Attacker
					var maxAttacker = Math.max( Math.max(a1, a2), a3);
					var maxDefender = Math.max(d1, d2);

					// Determine which is the second highest value die of both Defender and Attacker
					var secondMaxAttacker;

					if (a1 == maxAttacker)
						secondMaxAttacker = Math.max(a2, a3);
					else if (a2 == maxAttacker)
						secondMaxAttacker = Math.max(a1, a3);
					else if (a3 == maxAttacker)
						secondMaxAttacker = Math.max(a1, a2);
					else {
						console.log("Neither a1, a2 or a3 was the value of maxAttacker. a1="+a1+" a2="+a2+" a3="+a3+" maxAttacker="+maxAttacker);
						assert(false);
					}

					var secondMaxDefender = Math.min(d1, d2);

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

console.log("------------------------------------");
console.log("Attacker uses 3 dice and Defender uses 2 dice\n");
console.log("Probability of attacker losing 2: "+num_of_times_attacker_loses_2__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE+"="+ (num_of_times_attacker_loses_2__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE) * 100);
console.log("Probability of attacker losing 1: "+num_of_times_attacker_loses_1__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE+"="+ (num_of_times_attacker_loses_1__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE) * 100);
console.log("Probability of attacker losing 0: "+num_of_times_attacker_loses_0__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE+"="+ (num_of_times_attacker_loses_0__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE) * 100);

console.log("Probability of defender losing 2: "+num_of_times_defender_loses_2__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE+"="+ (num_of_times_defender_loses_2__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE) * 100);
console.log("Probability of defender losing 1: "+num_of_times_defender_loses_1__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE+"="+ (num_of_times_defender_loses_1__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE) * 100);
console.log("Probability of defender losing 0: "+num_of_times_defender_loses_0__attacker_3_dice_defender_2_dice+"/"+NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE+"="+ (num_of_times_defender_loses_0__attacker_3_dice_defender_2_dice / NUM_OF_OUTCOMES__ATTACKER_3_DICE_DEFENDER_2_DICE) * 100);



//--------------------------------------------


// Attacker loses 1, Defense loses 1

// Attacker loses 2, Defense loses 0