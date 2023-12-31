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
                        address2: '新宿区',
                        address3: '上落合',
                        kana1: 'ﾄｳｷｮｳﾄ',
                        kana2: 'ｼﾝｼﾞｭｸｸ',
                        kana3: 'ｶﾐｵﾁｱｲ',
                        prefcode: '13',
                        zipcode: '1610034',
                    },
                ],
                status: 200,
            };
        });
        const result = await request(app)
            .get(path)
            .query({ id: 'ezaki', postCode: '1610034' });

        expect(result.statusCode).toBe(200);
        expect(result.body).toStrictEqual({
            id: 'ezaki',
            address: {
                results: [
                    {
                        address1: '東京都',
                        address2: '新宿区',
                        address3: '上落合',
                        kana1: 'ﾄｳｷｮｳﾄ',
                        kana2: 'ｼﾝｼﾞｭｸｸ',
                        kana3: 'ｶﾐｵﾁｱｲ',
                        prefcode: '13',
                        zipcode: '1610034',
                    },
                ],
                status: 200,
            },
        });
    });
});
