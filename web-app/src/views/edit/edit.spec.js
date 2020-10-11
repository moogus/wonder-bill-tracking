import React from 'react';
import { shallow } from 'enzyme';
import { navigate } from 'gatsby';

import EditView from './edit';

jest.mock('gatsby');

const render = ({ payment = null, updatePayment = () => {}, deletePayment = () => {} } = {}) => {
  const props = { payment, updatePayment, deletePayment };
  return shallow(<EditView {...props} />);
};

describe('EditView', () => {
  describe('payment is not passed to the Edit route', () => {
    let editView;
    beforeAll(() => {
      jest.clearAllMocks();
      editView = render();
    });

    test('default render is as expected', () => expect(editView).toMatchSnapshot());

    test('navigate is called with "/"', () => expect(navigate).toHaveBeenCalledWith('/'));
  });

  describe('payment is passed to the Edit route', () => {
    let editView;
    const payment = {
      id: 0,
      name: 'foo',
      amount: 'bar',
      startDate: 'baz',
      frequency: 'always',
    };

    beforeAll(() => {
      jest.clearAllMocks();
      editView = render({ payment });
    });

    test('default render is as expected', () => expect(editView).toMatchSnapshot());

    test('navigate is called with "/"', () => expect(navigate).not.toHaveBeenCalled());
  });
});
