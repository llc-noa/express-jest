const request = require('supertest');
const app = require('../app.js');

const path = '/api/root';

jest.setTimeout(10000);
describe('正常', () => {
    test('レスポンス確認', async () => {
        const result = await request(app).get(path).query({ id: 'ezaki' });

        expect(result.statusCode).toBe(200);
        expect(result.body).toStrictEqual({
            id: 'ezaki',
        });
    });
});
