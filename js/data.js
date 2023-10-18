var defaulttabs = [{
	"id": "tab0",
	"name": "Tab0",
	"settings": structuredClone(defaultsettings),
	"global_settings_active": true,
	"all_settings_active": false,
	"header_windfall": '1aa',

	"data": [
		{
			'slot': 'base',
			'type': 'basic',
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '175',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '7.5k',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '175k',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '15m',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '400b',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '10q',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '10s',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '100o',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '5aa',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
		{
			'slot': '80ac',
			'type': null,
			'amount': null,
			'speedlvl': null,
			'powerlvl': null,
			'ballspec': false,
			'friend': false,
			'enrage': false,
		},
	],
}];

var defaultprestige = [
	{
		"key": "Ball Speed",
		"value": 3.3,
	},
	{
		"key": "Ball Power",
		"value": 11.3,
	},
	{
		"key": "New Ball Cost",
		"value": -66,
	},
	{
		"key": "Ball Speed Cost",
		"value": -66,
	},
	{
		"key": "Ball Power Cost",
		"value": -66,
	},
];

var defaultcards = [
	{
		"key": "Ball Speed",
		"value": 2.0,
		"active": true,
	},
	{
		"key": "Ball Power",
		"value": 4.0,
		"active": true,
	},
	{
		"key": "Quality Control",
		"value": 5.0,
		"active": true,
	},
	{
		"key": "Ball Spec.",
		"value": 4.0,
		"active": true,
	},
	{
		"key": "Catalyst",
		"value": 5.5,
		"active": true,
	},
	{
		"key": "Shield Pen.",
		"value": 20,
		"active": true,
	},
];

var defaultperks = [
	{
		"key": "Ball Speed",
		"value": 4.0,
	},
	{
		"key": "Ball Power",
		"value": 4.0,
	},
	{
		"key": "New Ball Cost",
		"value": -66,
	},
	{
		"key": "Ball Speed Cost",
		"value": -66,
	},
	{
		"key": "Ball Power Cost",
		"value": -66,
	},
];

var defaultboosts = [
	{
		"key": "Power Hungry",
		"active": true,
	},
];

var defaultbadges = [
	{
		"key": "Basic",
		"value": 0,
	},
	{
		"key": "Splash",
		"value": 0,
	},
	{
		"key": "Sniper",
		"value": 0,
	},
	{
		"key": "Poison",
		"value": 0,
	},
	{
		"key": "Demo",
		"value": 0,
	},
	{
		"key": "Scatter",
		"value": 0,
	},
	{
		"key": "Cash",
		"value": 0,
	},
	{
		"key": "Pierce",
		"value": 0,
	},
	{
		"key": "Sword",
		"value": 0,
	},
	{
		"key": "Fire",
		"value": 0,
	},
	{
		"key": "Lightning",
		"value": 0,
	},
];

var defaultskills = {
	"basic": [
		{
			"key": "Speed",
			"value": null,
		},
		{
			"key": "Power",
			"value": null,
		},
		{
			"key": "Splash Size",
			"active": false,
		},
		{
			"key": "Friend Bonus",
			"value": null,
		},
		{
			"key": "Unlimited Friend Bonus",
		},
		{
			"key": "Network Friends Expansion",
		},
	],
	"splash": [
		{
			"key": "Damage",
			"value": null,
		},
		{
			"key": "Splash Size",
		},
		{
			"key": "Time Bomb",
			"value": null,
		},
		{
			"key": "Programmed Time Bomb",
		},
		{
			"key": "Explosion Expansion",
		},
	],
	"sniper": [
		{
			"key": "Shield Damage",
			"value": null,
		},
		{
			"key": "More Cash",
		},
		{
			"key": "Archer Sniper",
			"value": null,
		},
		{
			"key": "Archer Sniper Ninja",
		},
		{
			"key": "Sniper Shuriken",
		},
	],
	"poison": [
		{
			"key": "Speed",
			"value": null,
		},
		{
			"key": "Poison Decay",
		},
		{
			"key": "Enrage",
			"value": null,
		},
		{
			"key": "Poison Spread",
		},
	],
	"demo": [
		{
			"key": "Enrage",
			"value": null,
		},
		{
			"key": "Enrage Stack",
			"active": false,
		},
		{
			"key": "Speed",
			"value": null,
		},
		{
			"key": "Enrage Fight",
			"value": null,
		},
		{
			"key": "Cumulative Strength",
			"value": null,
		},
	],
	"scatter": [
		{
			"key": "Damage",
			"value": null,
		},
		{
			"key": "Split",
			"value": null,
		},
		{
			"key": "Fly Children!",
			"value": null,
		},
		{
			"key": "Scatter Merge",
			"active": false,
		},
	],
	"cash": [
		{
			"key": "Power",
			"value": null,
		},
		{
			"key": "More Cash",
		},
		{
			"key": "Buried Treasure",
		},
		{
			"key": "More Buried Treasure",
		},
	],
	"pierce": [
		{
			"key": "Damage",
			"value": null,
		},
		{
			"key": "Detonate Bomb Squad",
		},
		{
			"key": "Big Ball",
		},
		{
			"key": "Persistent Big Ball",
		},
		{
			"key": "Big Faster",
		},
	],
	"sword": [
		{
			"key": "Damage",
			"value": null,
		},
		{
			"key": "Speed",
			"value": null,
		},
		{
			"key": "Shields Remove",
		},
	],
	"fire": [
		{
			"key": "Damage",
			"value": null,
		},
		{
			"key": "Fire Spread",
		},
		{
			"key": "Floor is Lava",
			"value": null,
		},
		{
			"key": "Big Lava",
		},
		{
			"key": "Intense Lava",
			"value": null,
		},
	],
	"lightning": [
		{
			"key": "Damage",
			"value": null,
		},
		{
			"key": "Chain Size",
		},
		{
			"key": "Speed",
			"value": null,
		},
	]
};

var defaultsettings = {
	"prestige": defaultprestige,
	"cards": defaultcards,
	"perks": defaultperks,
	"boosts": defaultboosts,
	"badges": defaultbadges,
	"skills": defaultskills,
};

var slots = [
	"base",
	"175",
	"7.5k",
	"175k",
	"15m",
	"400b",
	"10q",
	"10s",
	"100o",
	"5aa",
	"80ac"
];

var available = {
	"base": [
		"basic"
	],
	"175": [
		"splash",
		"sniper",
	],
	"7.5k": [
		"splash",
		"sniper",
		"poison",
		"demo",
	],
	"175k": [
		"splash",
		"sniper",
		"poison",
		"demo",
		"scatter",
	],
	"15m": [
		"splash",
		"sniper",
		"poison",
		"demo",
		"scatter",
		"cash",
		"pierce",
	],
	"400b": [
		"splash",
		"sniper",
		"poison",
		"demo",
		"scatter",
		"cash",
		"pierce",
		"sword",
		"fire",
		"lightning",
	],
	"10q": [
		"splash",
		"sniper",
		"poison",
		"demo",
		"scatter",
		"cash",
		"pierce",
		"sword",
		"fire",
		"lightning",
	],
	"10s": [
		"splash",
		"sniper",
		"poison",
		"demo",
		"scatter",
		"cash",
		"pierce",
		"sword",
		"fire",
		"lightning",
	],
	"100o": [
		"splash",
		"sniper",
		"poison",
		"demo",
		"scatter",
		"cash",
		"pierce",
		"sword",
		"fire",
		"lightning",
	],
	"5aa": [
		"splash",
		"sniper",
		"poison",
		"demo",
		"scatter",
		"cash",
		"pierce",
		"sword",
		"fire",
		"lightning",
	],
	"80ac": [
		"splash",
		"sniper",
		"poison",
		"demo",
		"scatter",
		"cash",
		"pierce",
		"sword",
		"fire",
		"lightning",
	],
};

var basestats = {
	"base": {
		"basic": {
			"speed": 1.0000,
			"power": 1.00
		}
	},
	"175": {
		"sniper": {
			"speed": 1.3750,
			"power": 4.20
		},
		"splash": {
			"speed": 0.8250,
			"power": 4.00
		}
	},
	"7.5k": {
		"sniper": {
			"speed": 1.5000,
			"power": 15.75
		},
		"splash": {
			"speed": 0.9000,
			"power": 15.00
		},
		"poison": {
			"speed": 1.0800,
			"power": 1.50
		},
		"demo": {
			"speed": 0.5400,
			"power": 300.00
		}
	},
	"175k": {
		"sniper": {
			"speed": 1.6250,
			"power": 63.00
		},
		"splash": {
			"speed": 0.9750,
			"power": 60.00
		},
		"poison": {
			"speed": 1.1700,
			"power": 1.65
		},
		"demo": {
			"speed": 0.5850,
			"power": 1200.00
		},
		"scatter": {
			"speed": 1.3000,
			"power": 60.00
		}
	},
	"15m": {
		"sniper": {
			"speed": 1.7500,
			"power": 210.00
		},
		"splash": {
			"speed": 1.0500,
			"power": 200.00
		},
		"poison": {
			"speed": 1.2600,
			"power": 1.85
		},
		"demo": {
			"speed": 0.6300,
			"power": 4000.00
		},
		"scatter": {
			"speed": 1.4000,
			"power": 200.00
		},
		"pierce": {
			"speed": 1.4000,
			"power": 200.00
		},
		"cash": {
			"speed": 1.5400,
			"power": 0.35
		}
	},
	"400b": {
		"sniper": {
			"speed": 1.9375,
			"power": 945.00
		},
		"splash": {
			"speed": 1.1625,
			"power": 900.00
		},
		"poison": {
			"speed": 1.3950,
			"power": 2.10
		},
		"demo": {
			"speed": 0.6975,
			"power": 18000.00
		},
		"scatter": {
			"speed": 1.5500,
			"power": 900.00
		},
		"pierce": {
			"speed": 1.5500,
			"power": 900.00
		},
		"cash": {
			"speed": 1.7050,
			"power": 0.39
		},
		"sword": {
			"speed": 1.9375,
			"power": 1170.00
		},
		"fire": {
			"speed": 1.9375,
			"power": 900.00
		},
		"lightning": {
			"speed": 1.3175,
			"power": 900.00
		}
	},
	"10q": {
		"sniper": {
			"speed": 2.1875,
			"power": 2730.00
		},
		"splash": {
			"speed": 1.3125,
			"power": 2600.00
		},
		"poison": {
			"speed": 1.5750,
			"power": 2.35
		},
		"demo": {
			"speed": 0.7875,
			"power": 52000.00
		},
		"scatter": {
			"speed": 1.7500,
			"power": 2600.00
		},
		"pierce": {
			"speed": 1.7500,
			"power": 2600.00
		},
		"cash": {
			"speed": 1.9250,
			"power": 0.43
		},
		"sword": {
			"speed": 2.1875,
			"power": 3380.00
		},
		"fire": {
			"speed": 2.1875,
			"power": 2600.00
		},
		"lightning": {
			"speed": 1.4875,
			"power": 2600.00
		}
	},
	"10s": {
		"sniper": {
			"speed": 2.3750,
			"power": 12600.00
		},
		"splash": {
			"speed": 1.4250,
			"power": 12000.00
		},
		"poison": {
			"speed": 1.7100,
			"power": 2.70
		},
		"demo": {
			"speed": 0.8550,
			"power": 240000.00
		},
		"scatter": {
			"speed": 1.9000,
			"power": 12000.00
		},
		"pierce": {
			"speed": 1.9000,
			"power": 12000.00
		},
		"cash": {
			"speed": 2.0900,
			"power": 0.50
		},
		"sword": {
			"speed": 2.3750,
			"power": 15600.00
		},
		"fire": {
			"speed": 2.3750,
			"power": 12000.00
		},
		"lightning": {
			"speed": 1.6150,
			"power": 12000.00
		}
	},
	"100o": {
		"sniper": {
			"speed": 2.5625,
			"power": 84000.00
		},
		"splash": {
			"speed": 1.5375,
			"power": 80000.00
		},
		"poison": {
			"speed": 1.8450,
			"power": 3.10
		},
		"demo": {
			"speed": 0.9225,
			"power": 1600000.00
		},
		"scatter": {
			"speed": 2.0500,
			"power": 80000.00
		},
		"pierce": {
			"speed": 2.0500,
			"power": 80000.00
		},
		"cash": {
			"speed": 2.2550,
			"power": 0.58
		},
		"sword": {
			"speed": 2.5625,
			"power": 104000.00
		},
		"fire": {
			"speed": 2.5625,
			"power": 80000.00
		},
		"lightning": {
			"speed": 1.7425,
			"power": 80000.00
		}
	},
	"5aa": {
		"sniper": {
			"speed": 2.7500,
			"power": 756000.00
		},
		"splash": {
			"speed": 1.6500,
			"power": 720000.00
		},
		"poison": {
			"speed": 1.9800,
			"power": 3.25
		},
		"demo": {
			"speed": 0.9900,
			"power": 14400000.00
		},
		"scatter": {
			"speed": 2.200,
			"power": 720000.00
		},
		"pierce": {
			"speed": 2.200,
			"power": 720000.00
		},
		"cash": {
			"speed": 2.4200,
			"power": 0.65
		},
		"sword": {
			"speed": 2.7500,
			"power": 936000.00
		},
		"fire": {
			"speed": 2.7500,
			"power": 720000.00
		},
		"lightning": {
			"speed": 1.8700,
			"power": 720000.00
		}
	},
	"80ac": {
		"sniper": {
			"speed": 2.9375,
			"power": 6050000.00
		},
		"splash": {
			"speed": 1.7625,
			"power": 5760000.00
		},
		"poison": {
			"speed": 2.1150,
			"power": 3.40
		},
		"demo": {
			"speed": 1.0575,
			"power": 115200000.00
		},
		"scatter": {
			"speed": 2.3500,
			"power": 5760000.00
		},
		"pierce": {
			"speed": 2.3500,
			"power": 5760000.00
		},
		"cash": {
			"speed": 2.5850,
			"power": 0.69
		},
		"sword": {
			"speed": 2.9375,
			"power": 7490000.00
		},
		"fire": {
			"speed": 2.9375,
			"power": 5760000.00
		},
		"lightning": {
			"speed": 1.9975,
			"power": 5760000.00
		}
	}
};

var speedbasestats = {
	"basic": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"sniper": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"splash": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"poison": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"demo": {
		"increment": 0.33039,
		"modifier": 0.99446999
	},
	"scatter": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"pierce": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"cash": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"sword": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"fire": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
	"lightning": {
		"increment": 0.62787,
		"modifier": 0.9944711
	},
};

var powerbasestats = {
	"basic": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"sniper": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"splash": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"poison": {
		"increment": 0.434783,
		"modifier": 0.9925
	},
	"demo": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"scatter": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"pierce": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"cash": {
		"increment": 0.434783,
		"modifier": 0.9967
	},
	"sword": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"fire": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
	"lightning": {
		"increment": 1.00969,
		"modifier": 1.00997
	},
};

var basecosts = {
	"base": {
		"buy": 0,
		"ball": 6,
		"speed": 6,
		"power": 10
	},
	"175": {
		"buy": 175,
		"ball": 175,
		"speed": 200,
		"power": 200
	},
	"7.5k": {
		"buy": 7500,
		"ball": 7500,
		"speed": 7500,
		"power": 7500
	},
	"175k": {
		"buy": 175e3,
		"ball": 175e3,
		"speed": 175e3,
		"power": 175e3
	},
	"15m": {
		"buy": 15e6,
		"ball": 15e6,
		"speed": 15e6,
		"power": 15e6
	},
	"400b": {
		"buy": 400e9,
		"ball": 400e9,
		"speed": 400e9,
		"power": 400e9
	},
	"10q": {
		"buy": 10e15,
		"ball": 10e15,
		"speed": 10e15,
		"power": 10e15
	},
	"10s": {
		"buy": 10e21,
		"ball": 10e21,
		"speed": 10e21,
		"power": 10e21
	},
	"100o": {
		"buy": 100e27,
		"ball": 100e27,
		"speed": 100e27,
		"power": 100e27
	},
	"5aa": {
		"buy": 5e36,
		"ball": 5e36,
		"speed": 5e36,
		"power": 5e36
	},
	"80ac": {
		"buy": 80e42,
		"ball": 80e42,
		"speed": 80e42,
		"power": 80e42
	}
}

var brickmult = [
	{
		"level": 1,
		"mult": 1,
		"cumulative": 1,
	},
	{
		"level": 75,
		"mult": 1.2,
		"cumulative": 1.2,
	},
	{
		"level": 100,
		"mult": 1.25,
		"cumulative": 1.5,
	},
	{
		"level": 150,
		"mult": 1.4,
		"cumulative": 2.1,
	},
	{
		"level": 200,
		"mult": 1.5,
		"cumulative": 3.15,
	},
	{
		"level": 250,
		"mult": 1.6,
		"cumulative": 5.04,
	},
	{
		"level": 300,
		"mult": 1.7,
		"cumulative": 8.568,
	},
	{
		"level": 400,
		"mult": 1.8,
		"cumulative": 15.4224,
	},
	{
		"level": 500,
		"mult": 2,
		"cumulative": 30.8448,
	},
	{
		"level": 750,
		"mult": 2.5,
		"cumulative": 77.112,
	},
	{
		"level": 1000,
		"mult": 2.5,
		"cumulative": 192.78,
	},
	{
		"level": 1500,
		"mult": 2.5,
		"cumulative": 481.95,
	},
	{
		"level": 2500,
		"mult": 3,
		"cumulative": 1445.85,
	},
	{
		"level": 5000,
		"mult": 3,
		"cumulative": 4337.55,
	},
	{
		"level": 7500,
		"mult": 3.5,
		"cumulative": 15181.425,
	},
	{
		"level": 10000,
		"mult": 3.5,
		"cumulative": 53134.9875,
	},
	{
		"level": 15000,
		"mult": 4,
		"cumulative": 212539.95,
	},
	{
		"level": 20000,
		"mult": 4,
		"cumulative": 850159.8,
	},
	{
		"level": 25000,
		"mult": 4,
		"cumulative": 3400639.2,
	},
	{
		"level": 30000,
		"mult": 4,
		"cumulative": 13602556.8,
	},
	{
		"level": 40000,
		"mult": 4,
		"cumulative": 54410227.2,
	},
	{
		"level": 50000,
		"mult": 4,
		"cumulative": 217640908.8,
	},
	{
		"level": 75000,
		"mult": 4,
		"cumulative": 870563635.2,
	},
	{
		"level": 100000,
		"mult": 5,
		"cumulative": 4352818176,
	},
	{
		"level": 125000,
		"mult": 6,
		"cumulative": 26116909056,
	},
	{
		"level": 150000,
		"mult": 7,
		"cumulative": 182818363392,
	},
	{
		"level": 175000,
		"mult": 8,
		"cumulative": 1462546907136,
	},
	{
		"level": 200000,
		"mult": 9,
		"cumulative": 13162922164224,
	},
]