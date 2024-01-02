const mockFn = jest.fn();
const request = require('supertest');
const app = require('../app.js');

const address = require('../src/common/address.js');
const spyAddressSearch = jest.spyOn(address, 'search');

const path = '/api/root';

jest.setTimeout(10000);
describe('正常', () => {
    test('レスポンス確認', async () => {
        spyAddressSearch.mockImplementationOnce(() => {
            return {
                results: [
                    {
                        address1: '東京都',
                        address2: '千代田区',
                        address3: '飯田橋',
                        kana1: 'ﾄｳｷｮｳﾄ',
                        kana2: 'ﾁﾖﾀﾞｸ',
                        kana3: 'ｲｲﾀﾞﾊﾞｼ',
                        prefcode: '13',
                        zipcode: '1020072',
                    },
                ],
                status: 200,
            };
        });
        const result = await request(app)
            .get(path)
            .query({ id: 'ezaki', postCode: '1020072' });

        expect(result.statusCode).toBe(200);
        expect(result.body).toStrictEqual({
            id: 'ezaki',
            address: {
                results: [
                    {
                        address1: '東京都',
                        address2: '千代田区',
                        address3: '飯田',
                        kana1: 'ﾄｳｷｮｳﾄ',
                        kana2: 'ﾁﾖﾀﾞｸ',
                        kana3: 'ｲｲﾀﾞﾊﾞｼ',
                        prefcode: '13',
                        zipcode: '1020072',
                    },
                ],
                status: 200,
            },
        });
    });
});
