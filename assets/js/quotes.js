const winner_quotes = [
	"Go and do your homework kid",
	"Noob mistake..... Nooooooob",
	"Try better next time",
	"Come on show some spirit",
	"Nice try buddy",
	"Who brought this kid here",
	"kids play better than you",
	"going to be a tough one",
	"Definitely no geniuses here",
	"Even that didn't stop me",
	"Point taken",
];

const looser_quotes = [
	"See u in next game bitch",
	"Damn Lucky bastard",
	"Ahhh don't show me that attitude",
	"why with me",
	"Are u cheating ? u cheater..",
	"will show u who is the looser",
	"damn whose face did i see today..",
	"okay, don't overreact bitch",
	"It's my choice..., Now i regret",
	"why i am playing this shit..",
	"who the f**k are u......",
];

const rival_quotes = [
	"copy cat hehehehe.......",
	"just saved lucky bitch",
	"haha same pinch",
	"don't mimic my moves",
	"Don't copy me damn fu*****r",
	"yo bantai same to same",
]

const random_quote = quotes_array => quotes_array[Math.floor(Math.random() * parseInt(quotes_array.length))];

export {winner_quotes, looser_quotes, random_quote, rival_quotes}