const AWS = require('aws-sdk');

exports.catalogBatchProcess = (event, context) => {
    const data = event.Records.map(record => record);
    let success = false;
    const sns = new AWS.SNS({ region: 'eu-west-1' });
    sns.publish({
        Subject: 'catalogBatchProcess is going',
        Message: JSON.stringify(data[0].body),
        TopicArn: process.env.SNS_ARN
    }, (error, data) => {
        success = true;
        console.log('Send email with csv body: ', data);
    })

    return success;

}
