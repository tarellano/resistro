import React from 'react';
import * as actions from './action-const';

export function findColor(data) {
	return {
		type: actions.findColor,
    value: data.value,
		colorCode: data.colorCode
	}
};

export function findColorError(data) {
  return {
    type: actions.findColorError,
    error: data.error,
    value: data.value
  }
};

export function solveTolerance(tolerance) {
  return {
    type: actions.solveTolerance,
    tolerance: tolerance
  }
}

export function solveColor(data) {
  return {
    type: actions.solveColor,
    colorCode: data.colorCode,
    value: data.value,
    tolerance: data.tolerance
  }
};
