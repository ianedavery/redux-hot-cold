import {hotColdReducer} from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from './actions';

describe('hotColdReducer', () => {
	const guesses = [1, 2];
	const feedback = 'Correct';
	const auralStatus = 'Correct';
	const correctAnswer = 2;

	describe('restartGame', () => {
		it('should restart the game', () => {
			let state = {
				guesses,
				feedback,
				auralStatus,
				correctAnswer
			};
			state = hotColdReducer(state, restartGame(correctAnswer));
			expect(state).toEqual({
				guesses: [],
				feedback: 'Make your guess!',
				auralStatus: '',
				correctAnswer: correctAnswer
			});
		});
	});

	describe('makeGuess', () => {
		it('should compare the guess to the correct answer and add the correct answer to the correctAnswer array', () => {
			let state = {
				guesses,
				feedback,
				correctAnswer
			};
			state = hotColdReducer(state, makeGuess(2));
			expect(state).toEqual({
				guesses: [1, 2, 2],
				feedback: 'You got it!',
				correctAnswer: correctAnswer
			});
		});
	});

	describe('generateAuralUpdate', () => {
		it('should generate an aural update', () => {
			let state = {
				guesses,
				feedback
			};
			state = hotColdReducer(state, generateAuralUpdate());
			expect(auralStatus.length).toBeGreaterThan(1);
		});
	});
});