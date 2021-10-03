const {expect} = require('@jest/globals');
const awsMock = require('aws-sdk-mock');

const {catalogBatchProcess} = require('./catalogBatchProcess');

describe('catalogBatchProcess() lambda tests', () => {
    it('should return success true', async () => {

        const event = {
            Records: [
                {id: 1},
                {id: 2}
            ]
        }
        awsMock.mock("SNS", "publish", (params, callback) => {
            callback(undefined, 'success')
        });

        const result = catalogBatchProcess(event);
        expect(result).toEqual(true);
    });
});
