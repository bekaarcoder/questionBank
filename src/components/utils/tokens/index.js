import {AsyncStorage} from 'react-native';

export const setTokens = (values, callback) => {
  const dateNow = new Date();
  const expiration = dateNow.getTime() + (3600 * 1000);

  AsyncStorage.multiSet([
    ['@questionBank@token', values.idToken],
    ['@questionBank@refToken', values.refreshToken],
    ['@questionBank@expireToken', expiration.toString()],
    ['@questionBank@uid', values.localId]
  ]).then((response) => {
    callback();
  });
}

export const getTokens = (callback) => {
  AsyncStorage.multiGet([
    '@questionBank@token',
    '@questionBank@refToken',
    '@questionBank@expireToken',
    '@questionBank@uid'
  ]).then((tokens) => {
    callback(tokens);
  });
}