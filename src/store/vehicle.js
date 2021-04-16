import React from 'react';

const reducer = (state = {vehicle: ''}, action) => {
  switch (action.type) {
    case 'Car':
      return {
        vehicle: 'it is a Car',
      };
    case 'Bike':
      return {
        vehicle: 'it is a Bike',
      };
    default:
      return {
        vehicle: 'No',
      };
  }
};
export default reducer;
