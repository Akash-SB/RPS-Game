import {winner_quotes, looser_quotes, random_quote, rival_quotes} from './quotes.js'

const user_choices = document.querySelectorAll(".choices i");
const recent_matches = document.querySelector(".recent-play");
const user_quotes = document.querySelector(".user-Quotes");
const Ai_quotes = document.querySelector(".AI-Quotes");
const user_area = document.querySelector(".user-play-area figure");
const computer_area = document.querySelector(".computer-play-area figure");
const user_result = document.querySelector(".user-result");
const computer_result = document.querySelector(".computer-result");
const rand_array = ['fa fa-hand-grab-o','fa fa-hand-paper-o','fa fa-hand-scissors-o'];
let selected_choices = [];
let counter = 0, user = 0, tie = 0, computer = 0;
const user_wins = [
					['fa fa-hand-scissors-o', 'fa fa-hand-grab-o'],
					['fa fa-hand-grab-o', 'fa fa-hand-paper-o'],
					['fa fa-hand-paper-o', 'fa fa-hand-scissors-o']
				];
const rounds = prompt("Enter Number rounds", 0) || 10;

user_choices.forEach( element => {
	
	element.addEventListener("click", () => {

		selected_choices.push(element.className);

		computer_choice();

		counter++;

		winner_choice(selected_choices);

		selected_choices = [];

		(rounds == counter) ? setTimeout(function() {(final_result(), location.reload())}, 1000) : "";
	})
});

const computer_choice = () => selected_choices.push(rand_array[Math.floor(Math.random() * 3)]);

const create_choice = choice => {

	const elem = document.createElement("i");

	elem.className = choice;

	return elem;
}

const recent_result_element = (elemArray, looser) => {

	const newList = document.createElement("li");

	(looser == "user") ? newList.append(create_choice(`${elemArray[0]} looser`), counter, create_choice(elemArray[1])) :
		(looser == "computer") ? newList.append(create_choice(elemArray[0]), counter, create_choice(`${elemArray[1]} looser`)) : 
		newList.append(create_choice(elemArray[0]), counter, create_choice(elemArray[1]));
	
	recent_matches.insertBefore(newList, recent_matches.childNodes[0]);
}

const set_score = (class_name, score) => document.querySelector(class_name).innerHTML = score;

const winner_choice = choiceArray => {

	(choiceArray[0] == choiceArray[1]) ? (tie++, set_score(".tie" ,tie), recent_result_element(choiceArray), set_quotes()) : 
		(user_wins.some(a => choiceArray.length === a.length && a.every((v, i) => v === choiceArray[i]))) ? 
		(computer++, set_score(".computer" , computer), recent_result_element(choiceArray, "user"), set_quotes("computer")) :
		(user++, set_score(".user" , user), recent_result_element(choiceArray, "computer"), set_quotes("user"));
}

const set_quotes = winner => {
	switch(winner) {
   case "computer":
   		Ai_quotes.innerHTML = random_quote(winner_quotes);
   		user_quotes.innerHTML = random_quote(looser_quotes);
   		user_area.classList.add('looser-area');   		
   		computer_area.classList.remove('looser-area');
   		user_result.innerHTML = "Looser";
   		computer_result.innerHTML = "Winner";
      break;
   case "user":
   		Ai_quotes.innerHTML = random_quote(looser_quotes);
   		user_quotes.innerHTML = random_quote(winner_quotes);
   		computer_area.classList.add('looser-area');
   		user_area.classList.remove('looser-area');
   		user_result.innerHTML = "Winner";
   		computer_result.innerHTML = "Looser";   		
      break;
   default:
   		Ai_quotes.innerHTML = random_quote(rival_quotes);
   		user_quotes.innerHTML = random_quote(rival_quotes);
   		user_area.classList.remove('looser-area');   		
   		computer_area.classList.remove('looser-area');
   		user_result.innerHTML = "Tie";
   		computer_result.innerHTML = "Tie";
      break;
	}
} 

const final_result = () => alert ((computer == user) ? "Match Tie" : (computer > user) ? "computer Wins" : "User Wins");



