import React from 'react';
import * as actions from './action-const';

export function findColor(colorCode) {
	return {
		type: actions.findColor,
		colorCode: colorCode
	}
};

export function findColorError(error) {
  return {
    type: actions.findColorError,
    error: error
  }
}