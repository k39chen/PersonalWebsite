import get from 'lodash/get';
import en_US from '../assets/i18n/en_US.json';

export function localize(bucket, key) {
  const translations = en_US;
  return get(translations, `${bucket}.${key}`);
}
