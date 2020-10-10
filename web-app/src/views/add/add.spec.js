import React from 'react';
import { shallow } from 'enzyme';

import AddView from './add';

const render = ({ createPayment = () => {} } = {}) => {
  const props = { createPayment };
  return shallow(<AddView {...props} />);
};

describe('AddView', () => {
  test('default render is as expected', () => expect(render()).toMatchSnapshot());
});
