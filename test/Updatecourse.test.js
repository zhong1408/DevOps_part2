const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../index'); 
chai.use(chaiHttp);

describe('Update Course API Tests', () => {
    let baseUrl;

    before(async () => {
        const { address, port } = server.address();
        baseUrl = `http://${address === '::' ? 'localhost' : address}:${port}`;
        
    });

    after(() => {
        server.close();
    });

    describe('PUT /update-course/:id', () => {
        const validCourseId = "1730794622848618"; 
        const invalidCourseId = "9999999999999999";

        it('should return validation error for invalid course code format', (done) => {
            chai.request(baseUrl)
                .put(`/update-course/${validCourseId}`)
                .send({
                    name: "Updated Course",
                    code: "ABCD1234", // Invalid code format
                    description: "Testing invalid code",
                    credits: 3
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Code must be 3 uppercase followed by 3 numbers');
                    done();
                });
        });

        it('should return error for duplicate course code', (done) => { 
            chai.request(baseUrl)
                .put(`/update-course/${validCourseId}`)
                .send({
                    name: "Updated Course",
                    code: "LAP123", // Duplicate code
                    description: "Testing duplicate code",
                    credits: 3
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Course code already exists!');
                    done();
                });
        });

        it('should update course successfully with valid input', (done) => {
            chai.request(baseUrl)
                .put(`/update-course/${validCourseId}`)
                .send({
                    name: "FINAL UPDATE Course Name",
                    code: "NEW456",
                    description: "Updated description",
                    credits: 4
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body.message).to.equal('Course modified successfully!');
                    done();
                });
        })
        it('should return error when required fields are missing', (done) => {
            chai.request(baseUrl)
                .put(`/update-course/${validCourseId}`)
                .send({
                    name: "", 
                    code: "LAP001", 
                    description: "", 
                    credits: "" 
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('All fields are required!');
                    done();
                });
            });
        });
    });
    