import React from 'react';
import {shallow} from 'enzyme';
import {makeGuess} from '../actions';
import{GuessForm} from './guess-form';

describe('<GuessForm />', () => {
	let value = 1;
	it('should dispatch makeGuess from makeGuess', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<GuessForm dispatch={dispatch} />);
		dispatch.mockClear();
		wrapper.instance(makeGuess(value));
		expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
	});
});
