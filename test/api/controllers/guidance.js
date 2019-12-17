var should = require('should')
var request = require('supertest')
var api = require('../../../app')

describe('controllers', () => {

    describe('config', () => {

        describe('GET /guidance', () => {
            
            it('should accept the following parameters: patient_id, model, model_plugin_id, timestamp', done => {
                request(api)
                    .get('/guidance')
                    .query({
                        patient_id: '5',
                        model: 'some-model',
                        model_plugin_id: 'some-model-plugin-id',
                        timestamp: '1970-01-01T00:00:00Z',
                    })
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end((err, res) => {
                        should.not.exist(err);
                        done();
                    });
            });

            it('should return json', done => {
                request(api)
                    .get('/config')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end((err, res) => {
                        should.not.exist(err)
                        done()
                    })
            })

        })

    })

})
