import _ from 'lodash';

export default class Library {

  constructor() {
    this.name = 'Hello World';
  }

  getName() {
    return this.name;
  }

  sanitize() {
    return _.kebabCase(this.name);
  }
}
