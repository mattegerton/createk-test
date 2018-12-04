let expect = require('chai').expect;
let { timeInWords } = require('../main.js');

describe('timeInWords()', () => {
    it('should return a string', () => {
        const actual = timeInWords(1, 30)
        expect(actual).to.be.a('string')
    })
    it('should return 15 as quarter', () => {
        const actual = timeInWords(1, 15)
        expect(actual).to.eql('quarter past one')
    })
    it('should return 30 as half', () => {
        const actual = timeInWords(1, 30)
        expect(actual).to.eql('half past one')
    })
    it('should change past = to if minutes is above 30', () => {
        const actual = timeInWords(1, 35)
        expect(actual).to.eql('twenty five minutes to two')
    })
    it('should show o clock if given a rounded number', () => {
        const actual = timeInWords(1, '00')
        expect(actual).to.eql(`one o' clock`)
    })
    it('should show an error if given an invalid time', () => {
        const actual = timeInWords(22, 99)
        expect(actual).to.eql('Hours: Please enter a number between 1-12. \n Minutes: Please enter a number between 1-60.')
    })
})