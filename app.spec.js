const request = require('supertest');
const app = require('./app');

describe('Default spec', () => {
  it('return my favorite film', async () => {
    const actual = await request(app).get('/myfavoritefilm');
    expect(actual.statusCode).toBe(200);
    expect(JSON.stringify(actual.body).length).toBeGreaterThan(0);
  });
});
