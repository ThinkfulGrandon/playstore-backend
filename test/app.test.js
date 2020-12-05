const app = require('../app')
const {expect} = require('chai');
const supertest = require('supertest');

describe('/GET /apps', () => {
    it('should be 400 if sort is incorrect', () => {
        return supertest(app)
          .get('/apps')
          .query({ sort: 'MISTAKE' })
          .expect(400, 'Sort must be of either "Title", or "Rating"');
    });
    it('Request should return an array', () => {
        return supertest(app)
            .get('/apps')
            .expect(200)
            .then(res => {
                expect(res.body).to.be.an('array')
            })
            
    })
});