const mockFn = jest.fn();
jest.mock('axios', () => {
    return {
        create: jest.fn(() => ({
            get: mockFn,
        })),
    };
});
const address = require('../../src/common/address');

jest.setTimeout(10000);
describe('正常', () => {
    test('レスポンス確認 ハイフンなし', async () => {
        mockFn.mockResolvedValue({
            status: 200,
            data: {
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
            },
        });
        const postCode = '1020072';
        const result = await address.search(postCode);
        expect(result.status).toBe(200);
        expect(result.results).toStrictEqual([
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
        ]);
    });

    test('レスポンス確認 ハイフンあり', async () => {
        mockFn.mockResolvedValue({
            status: 200,
            data: {
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
            },
        });
        const postCode = '102-0072';
        const result = await address.search(postCode);
        expect(result.status).toBe(200);
        expect(result.results).toStrictEqual([
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
        ]);
    });
});
