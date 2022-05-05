const {test, expect} = require('@jest/globals')
const object = require ('./script.js')

test('retour objet', () => {
    expect(object("test", "test2", "25")).toEqual({ Name: 'test', Surname: 'test2', Age: '25' })
})