var should = require('should')
var request = require('supertest')
var api = require('../../../app')

describe('controllers', () => {

    describe('hello_world', () => {

        describe('GET /hello', () => {

            it('should return a default string', done => {
                request(api)
                    .get('/hello')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err)
                        res.body.should.eql('Hello, stranger!')
                        done()
                    })
            })

            it('should accept a name parameter', done => {
                request(api)
                    .get('/hello')
                    .query({ name: 'Joe'})
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err)
                        res.body.should.eql('Hello, Joe!')
                        done()
                    })
            })

        })

    })

})
