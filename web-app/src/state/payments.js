import { createSlice } from '@reduxjs/toolkit';

export const createPaymentReducer = (state, action) => {
  state.push({
    ...action.payload,
    id: state.length + 1,
  });
};

export const updatePaymentReducer = (state, action) => {
  const { id } = action.payload;
  const updated = state.map((p) => {
    if (p.id === id) {
      return action.payload;
    }
    return p;
  });
  state.splice(0, state.length, ...updated);
};

export const deletePaymentReducer = (state, action) => {
  const filetered = state.filter((p) => p.id !== action.payload);
  state.splice(0, state.length, ...filetered);
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: [],
  reducers: {
    createPayment: createPaymentReducer,
    updatePayment: updatePaymentReducer,
    deletePayment: deletePaymentReducer,
  },
});

const { actions, reducer } = paymentsSlice;
export const { createPayment, updatePayment, deletePayment } = actions;
export default reducer;
