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

var athletes = [
	{
		name: "Henry Tareque",
		sex: "Men",
		group: "800m",
		events: {
			"400m": {PR: "51.60", SB: "51.60"},
			"800m": {PR: "1:58.90", SB: "1:58.90"}
		},
	},
	{
		name: "Bruno Faviero",
		sex: "Men",
		group: "Sprints",
		events: {
			"100m": {PR: "10.87", SB: "10.95"},
			"200m": {PR: "22.35", SB: "22.35"}
		},
	},
	{
		name: "Carlos Henriquez",
		sex: "Men",
		group: "Sprints",
		events: {
			"100m": {PR: "11.02", SB: "11.10"},
			"200m": {PR: "22.42", SB: "22.65"}
		},
	},
	{
		name: "Danny Newman",
		sex: "Men",
		group: "400m",
		events: {
			"200m": {PR: "22.88", SB: "22.88"},
			"400m": {PR: "49.50", SB: "49.50"}
		},
	},
	{
		name: "David Rudisha",
		sex: "Men",
		group: "800m",
		events: {
			"400m": {PR: "45.15", SB: "-"},
			"800m": {PR: "1:40.91", SB: "-"}
		},
	},
	{
		name: "Vernon Norwood",
		sex: "Men",
		group: "400m",
		events: {
			"200m": {PR: "20.82", SB: "20.84"},
			"400m": {PR: "44.44", SB: "44.44"}
		},
	},
	{
		name: "Jennifer Zhang",
		sex: "Women",
		group: "Sprints",
		events: {
			"100m": {PR: "13.54", SB: "13.34"},
			"200m": {PR: "27.20", SB: "27.20"}
		},
	},
	{
		name: "Alysia Montaño",
		sex: "Women",
		group: "800m",
		events: {
			"400m": {PR: "52.09", SB: "-"},
			"800m": {PR: "1:57.34", SB: "-"}
		},
	},
	{
		name: "Florence Joyner",
		sex: "Women",
		group: "Sprints",
		events: {
			"100m": {PR: "10.49", SB: "-"},
			"200m": {PR: "21.34", SB: "-"}
		},
	},
	{
		name: "Sanya Richards-Ross",
		sex: "Women",
		group: "400m",
		events: {
			"200m": {PR: "22.09", SB: "-"},
			"400m": {PR: "48.70", SB: "-"}
		},
	},
	{
		name: "Alyson Felix",
		sex: "Women",
		group: "400m",
		events: {
			"200m": {PR: "21.69", SB: "-"},
			"400m": {PR: "49.59", SB: "-"}
		},
	},
	{
		name: "Maggie Vessey",
		sex: "Women",
		group: "800m",
		events: {
			"800m": {PR: "1:57.84", SB: "2:00.04"}
		},
	},

]