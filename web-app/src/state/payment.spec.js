import { createPaymentReducer, updatePaymentReducer } from 'state/payments';

describe('createPaymentReducer', () => {
  const stubs = {};
  beforeEach(() => {
    stubs.state = [];
    stubs.action = { payload: { stuff: 'foo' } };
  });

  test('when state is empty', () => {
    createPaymentReducer(stubs.state, stubs.action);
    expect(stubs.state).toEqual([{ id: 1, stuff: 'foo' }]);
  });

  test('when state has an item', () => {
    stubs.state.push({ id: 1, stuff: 'bar' });
    createPaymentReducer(stubs.state, stubs.action);
    expect(stubs.state).toEqual([
      { id: 1, stuff: 'bar' }, { id: 2, stuff: 'foo' },
    ]);
  });
});

describe('updatePaymentReducer', () => {
  const stubs = {};
  beforeEach(() => {
    stubs.state = [];
    stubs.action = { payload: { stuff: 'bar', id: 1 } };
  });

  test('when state does not have item, item is not updated', () => {
    stubs.state.push({ id: 2, stuff: 'foo' });
    updatePaymentReducer(stubs.state, stubs.action);
    expect(stubs.state).toEqual([
      { id: 2, stuff: 'foo' },
    ]);
  });

  test('when state has item, item is updated', () => {
    stubs.state.push({ id: 1, stuff: 'foo' });
    updatePaymentReducer(stubs.state, stubs.action);
    expect(stubs.state).toEqual([
      { id: 1, stuff: 'bar' },
    ]);
  });

  test('when state has multiple items, right item is updated', () => {
    stubs.state.push({ id: 1, stuff: 'foo' }, { id: 2, stuff: 'baz' });
    updatePaymentReducer(stubs.state, stubs.action);
    expect(stubs.state).toEqual([
      { id: 1, stuff: 'bar' }, { id: 2, stuff: 'baz' },
    ]);
  });
});
