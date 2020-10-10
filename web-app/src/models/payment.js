import { number, string } from 'prop-types';

export default {
  id: number.isRequired,
  name: string.isRequired,
  amount: string.isRequired,
  startDate: string.isRequired,
  frequency: string.isRequired,
};
