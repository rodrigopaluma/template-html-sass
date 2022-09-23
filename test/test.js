const request= require('supertest');
const app= require('../index.js');

describe('GET /', ()=> {
    it('Home Companhia', (done) => {
        request(app).get('/').expect('Equitação',done)
    })
});
