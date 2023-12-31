const mockFn = jest.fn();
const axios = require('axios');
const request = require('supertest');
jest.mock('axios', () => ({
    __esModule: true,
    default: {
        create: jest.fn(() => {
            return {
                get: mockFn,
            };
        }),
    },
}));
const address = require('../../src/common/address');

const path = '/api/root';

jest.setTimeout(10000);
describe('正常', () => {
    test('レスポンス確認', async () => {
        mockFn.mockResolvedValue(() => {
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
        const postCode = '1610034';
        const result = await address.search(postCode);
        expect(result.statusCode).toBe(200);
        expect(result.body).toStrictEqual({
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
        });
    });
});
