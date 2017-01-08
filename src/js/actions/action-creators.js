import React from 'react';
import * as actions from './action-const';

export function readyTimer(){
	return {
		type: actions.timer_press		
	};
}

export function startTimer(){
	return {
		type: actions.timer_start	
	};
}

export function stopTimer(time){
	return {
		type: actions.timer_stop,
		time: time		
	};	
}