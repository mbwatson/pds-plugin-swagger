var should = require('should')
var request = require('supertest')
var api = require('../../../app')

describe('controllers', () => {

    describe('config', () => {

        describe('GET /config', () => {

            it('should return json', done => {
                request(api)
                    .get('/config')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err)
                        done()
                    })
            })

        })

    })

})
