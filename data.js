var meets = [
	{
		name:"Engineer's Cup",
		date:"4/4",
		location:"Home",
	},
	{
		name:"Colby Invitational",
		date:"4/11",
		location:"Colby College",
	},
	{
		name:"Sean Collier Invitational",
		date:"4/18",
		location:"Home",
	},
	{
		name:"NEWMAC Championship",
		date:"4/25",
		location:"Home",
	},
	{
		name:"New England Division III Championship",
		date:"4/30-5/2",
		location:"Home",
	},
	{
		name:"NEICAAA",
		date:"5/7-5/9",
		location:"Home",
	},
	{
		name:"ECAC Division III Championship",
		date:"5/14-5/15",
		location:"Springfield College",
	},
	{
		name:"NCAA Division III Championship",
		date:"5/21-5/23",
		location:"St. Lawrence University",
	},
]

var schedule = [
	{
		event:"10,000m",
		time:"11:00am",
		entries:true
	},
	{
		event:"4x100m Relay",
		time:"12:30pm",
		entries:true

	},
	{
		event:"3,000m Steeplechase",
		time:"12:45pm",
		entries:true
	},
	{
		event:"110m Hurdles Trials",
		time:"1:15pm",
		entries:true
	},
	{
		event:"100m",
		time:"1:35pm",
		entries:true
	},
	{
		event:"1,500m",
		time:"1:50pm",
		entries:true
	},
	{
		event:"110m Hurdles Final",
		time:"2:10pm",
		entries:false
	},
	{
		event:"400m",
		time:"2:20pm",
		entries:true
	},
	{
		event:"100m Final",
		time:"2:35pm",
		entries:false
	},
	{
		event:"800m",
		time:"2:45pm",
		entries:true
	},
	{
		event:"400m Hurdles",
		time:"3:00pm",
		entries:true
	},
	{
		event:"200m",
		time:"3:15pm",
		entries:true
	},
	{
		event:"5,000m",
		time:"3:30pm",
		entries:true
	},
	{
		event:"4x400m Relay",
		time:"4:15pm",
		entries:true
	},
]


var workoutPercentages1 = [100, 75, 75, 100, 66, 75];
var workoutPercentages2 = [65, 75, 80, 90, 65, 95];
var workoutPercentages3 = [55, 80, 66, 70, 85, 65];
var workoutPercentages4 = [72, 80, 82, 84, 86, 90];;
var workoutPercentages5 = [75, 45, 47, 80, 74, 92];;



var athletes = [
	{	
		id: 0,
		name: "Henry Tareque",
		sex: "Men",
		group: "800m",
		events: {
			"400m": {PR: "51.60", SB: "51.60"},
			"800m": {PR: "1:58.90", SB: "1:58.90"}
		},
		workoutPercentages: [100, 75, 75, 100, 66, 75],
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 1,
		name: "Bruno Faviero",
		sex: "Men",
		group: "Sprints",
		events: {
			"100m": {PR: "10.87", SB: "10.95"},
			"200m": {PR: "22.35", SB: "22.35"}
		},
		workoutPercentages: workoutPercentages1,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 2,
		name: "Carlos Henriquez",
		sex: "Men",
		group: "Sprints",
		events: {
			"100m": {PR: "11.02", SB: "11.10"},
			"200m": {PR: "22.42", SB: "22.65"}
		},
		workoutPercentages: workoutPercentages5,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 3,
		name: "Danny Newman",
		sex: "Men",
		group: "400m",
		events: {
			"200m": {PR: "22.88", SB: "22.88"},
			"400m": {PR: "49.50", SB: "49.50"}
		},
		workoutPercentages: workoutPercentages3,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id:4,
		name: "David Rudisha",
		sex: "Men",
		group: "800m",
		events: {
			"400m": {PR: "45.15", SB: "-"},
			"800m": {PR: "1:40.91", SB: "-"}
		},
		workoutPercentages: workoutPercentages2,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 5,
		name: "Vernon Norwood",
		sex: "Men",
		group: "400m",
		events: {
			"200m": {PR: "20.82", SB: "20.84"},
			"400m": {PR: "44.44", SB: "44.44"}
		},
		workoutPercentages: workoutPercentages5,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 6,
		name: "Jennifer Zhang",
		sex: "Women",
		group: "Sprints",
		events: {
			"100m": {PR: "13.54", SB: "13.34"},
			"200m": {PR: "27.20", SB: "27.20"}
		},
		workoutPercentages: workoutPercentages3,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 7,
		name: "Alysia Montaño",
		sex: "Women",
		group: "800m",
		events: {
			"400m": {PR: "52.09", SB: "-"},
			"800m": {PR: "1:57.34", SB: "-"}
		},
		workoutPercentages: workoutPercentages1,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 8,
		name: "Florence Joyner",
		sex: "Women",
		group: "Sprints",
		events: {
			"100m": {PR: "10.49", SB: "-"},
			"200m": {PR: "21.34", SB: "-"}
		},
		workoutPercentages: workoutPercentages4,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 9,
		name: "Sanya Richards-Ross",
		sex: "Women",
		group: "400m",
		events: {
			"200m": {PR: "22.09", SB: "-"},
			"400m": {PR: "48.70", SB: "-"}
		},
		workoutPercentages: workoutPercentages2,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 10,
		name: "Alyson Felix",
		sex: "Women",
		group: "400m",
		events: {
			"200m": {PR: "21.69", SB: "-"},
			"400m": {PR: "49.59", SB: "-"}
		},
		workoutPercentages: workoutPercentages5,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	},
	{
		id: 11,
		name: "Maggie Vessey",
		sex: "Women",
		group: "800m",
		events: {
			"800m": {PR: "1:57.84", SB: "2:00.04"}
		},
		workoutPercentages: workoutPercentages1,
		statuses: [
	      "feeling pretty good",
	      "didn't get much sleep last night",
	      "it's been a tough few weeks at school",
	      "had a great break from class!",
	      "broke up with my girlfriend :(",
	      "getting ready for the end of the semester"]

	}

];

var results = {
	
	"10,000m": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"4x100m Relay": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,

	},
	
	"3,000m Steeplechase": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"110m Hurdles Trials": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"100m": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"1,500m": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"110m Hurdles Final": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"400m": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"100m Final": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"800m": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"400m Hurdles": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"200m": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"5,000m": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
	
	"4x400m Relay": {
		participants:[
			{
				id: 9000,
				name: "Harrison Ford",
				sex: "Men",
				school: "Harvard",
				events: {
					"800m" : {PR: "1:59.84", SB: "2:02:10"},
				}
			},
			{
				id: 9001,
				name: "Tyler Drake",
				sex: "Men",
				school: "BU",
				events: {
					"800m" : {PR: "1:58.13", SB: "2:01:056"},
				}
			}
		],
		rankings: getEventResults,
	},
};

function getEventResults(participants, event) {
	//first sort participants based on personal record
};