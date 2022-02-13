/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This is the syntax for adding a new subclass for the Rogue called Poisoner
                This Subclass was created by SomethingElse on GMbinder
                This Subclass can be found at https://www.gmbinder.com/share/-MoAvsLShIVJvSyrZo42
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "Lolki - Rogue Poisoner.js";
RequiredSheetVersion(12.999);

SourceList["L:RP"] = {
	name : "Poisoner",
	abbreviation : "L:RP",
	url : "https://www.gmbinder.com/share/-MoAvsLShIVJvSyrZo42",
	date : "2022/02/12"
},

ToolsList["Poisoner's Kit"] = {
	infoname : "Poisoner's Kit",
	name : " Poisoner's Kit",
	weight : "1",
	type : "alchemist's supplies",
	source : ["L:RP", 0]
},


AddSubClass(

	"rogue",

	"poisoner",

	{

		regExpSearch : /poisoner/i,

		subname : "Poisoner",

		source : ["L:RP", 0],

		fullname : "Rogue Poisoner",

		features : { 

			"subclassfeature3" : {
				name : "Brew Poison",
				source : ["L:RP", 0],
				minlevel : 3,
				description : "\n   " + "You learn to create deadly substances to cause harm to your foes." + "Your poison save DC is equal to 8 + your proficiency bonus + your Dexterity modifier.",
				            additional : ["", "", "2 Recipies", "2 Recipies", "2 Recipies", "2 Recipies", "3 Recipies", "3 Recipies", "3 Recipies", "4 Recipies", "4 Recipies", "4 Recipies", "5 Recipies", "5 Recipies", "5 Recipies", "6 Recipies", "6 Recipies", "6 Recipies", "7 Recipies", "7 Recipies"],
                            extraname : "Specialty Poisons",
                            extrachoices : ["Hemorrhagic Poison", "Necrotic Poison", "Paralyzing Poison", "Rusting Poison", "Blinding Poison", "Intoxicating Poison", "Aggression Poison"],

                            "hemorrhagic poison" : {
                                name : "Hemorrhagic Poison",
                                description : "\n   " + "You concoct a poison that thins the blood of creatures, causing them to bleed more freely. Any creature attacked with this poison must succeed or Constitution saving throw or take an extra d4 poison damage for next minute.",
                                source : ["L:RP", 0]
                            },

                            "necrotic poison" : {
                                name : "Necrotic Poison",
                                description : "\n   " + "You concoct a poison that can steal the very life energy from those afflicted by it. Any creature attacked with this poison must make a Constitution saving throw. The creature takes 2d6 necrotic damage on a failed save, or half as much on a successful one.",
                                source : ["L:RP", 0]
                            },

                            "paralyzing poison" : {
                                name : "Paralyzing Poison",
                                description : "\n   " + "You concoct a poison that can temporarily freeze joints of those affected. Any creature attacked with this poison must succeed a Constitution saving throw or be faced with disadvantage on their next Dexterity saving throw.",
                                source : ["L:RP", 0]
                            },

                            "rusting poison" : {
                                name : "Rusting Poison",
                                description : "\n   " + "You concoct a poison that eats away at sentient metal. Any construct attacked with this poison make a Constitution saving throw. On a failed save the construct takes 3d8 acid damage or half as much on a successful save.",
                                source : ["L:RP", 0]
                            },

                            "blinding poison" : {
                                name : "Blinding Poison",
                                description : "\n   " + "You concoct a poison that can steal the sight from those affected. Any creature attacked with this poison must succeed a Constitution saving throw or have their sight reduced to a five foot radius. On the beginning of each of the creatures subsequent turns, they may remake this save, ending the effect on a success.",
                                source : ["L:RP", 0]
                            },

                            "intoxicating poison" : {
                                name : "Intoxicating Poison",
                                description : "\n   " + "You concoct a poison that can mimic the effects of inebriation. Any creature attacked with this poison must succeed a Constitution saving throw or have all terrain be considered difficult terrain. On the beginning of each of the creatures subsequent turns, they may remake this save, ending the effect on a success.",
                                source : ["L:RP", 0]
                            },

                            "aggression poison" : {
                                name : "Aggression Poison",
                                description : "\n   " + "You concoct a poison that can cloud the minds of rational thought. Any creature affected by this poison succeed make a Constitution saving throw or be forced to attack the nearest creature in a blind rage. If this role of nearest creature is tied, the DM may roll to determine who it attacks.",
                                source : ["L:RP", 0]
                            },
                                
				},
			"subclassfeature3.1" : {
				name : "Bonus Proficiency",
				source : ["L:RP", 0],
				minlevel : 3,
				description : "\n   " + "I gain proficiency and expertise with the Poisoner's kit",
				toolProfs : ["Poisoner's Kit", "Dex"]
			},


			"subclassfeature9" : {
				name : "Poison of Life",
				source : ["L:RP", 0],
				minlevel : 9,
				description : desc([
                    "Through experimentation with the essence of vitality you have learned to create The Poison of Life." + " You can brew one vial of this poison per short rest." + " This poison will lose its effects twelve hours after its creation." + " Target must make a Constitution saving throw against your poison save DC or take 8d6 poison damage." + " On success, their body will absorb the benefits of the poison, gaining 4d4+2 hit points." + " Undead have disadvantage, in addition to their immunity to poison damage.",
                ]),
                additional : ["8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal","8d6 dmg or 4d4+2 heal"],

			},


			"subclassfeature13" : {
				name : "Poisoned Body",
				source : ["L:RP", 0],
				minlevel : 13,
				description : "\n   " + "You have found a way to infuse the poison you work with into your own body and bloodstream causing those who dare spill your blood harm." + "\n   " + "Whenever you take damage from a melee attack the attacker is dealt acid damage equal to your constitution modifier (minimum 1).",
				dmgres : ["Poison"],
			},


			"subclassfeature17" : {
				name : "Poison Master",
				source : ["L:RP", 0],
				minlevel : 17,
				description : desc([
					"I have advantage on saves vs. poison and immune to poison damage.",	
				]),

				savetxt : {
					immune : ["poison"],
					adv_vs : ["poison"],
				},
			},
		}
	}
);
