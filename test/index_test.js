const request = require('supertest')
const app = require('../app') // the express server
const expect = require('chai').expect

describe('GET / endpoint', () => {
  it('GET / endpoint successfully returns response', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).to.equal(200)
      })
  })
})

describe('GET /suma endpoint', () => {
  it('GET /suma endpoint successfully sum very well', () => {

    num1 = 45;
    num2 = 80;
    suma = num1 + num2;
    return request(app)
      .get(`/suma/${num1}/${num2}`)
      .then((response) => {
        expect(response.statusCode).to.equal(200)
        expect(response.text).to.equal(`Suma: ${suma}`)
      })
  })
})
