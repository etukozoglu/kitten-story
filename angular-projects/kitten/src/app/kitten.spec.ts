import { Kitten } from './kitten';

describe('Kitten', () => {
    it('should create an instance', () => {
    expect(new Kitten()).toBeTruthy(); //Check if the value, when cast to a boolean, will be a truthy value.
    });
});