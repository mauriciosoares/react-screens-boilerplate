import error from 'shared/utils/error';
import redux from 'redux';

export default function normalizeNumbers(string) {
  if(typeof string !== 'string') {
    error(`${string} is not a string`);
  }

  return string.replace(/\D/g, '');
}
