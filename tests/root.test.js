const request = require('supertest');
const app = require('../app.js');

const path = '/api/root';

jest.setTimeout(10000);

test('status 200 with id', async () => {
    const result = await request(app).get(path).query({ id: 'ezaki' });

    expect(result.statusCode).toBe(200);
});
