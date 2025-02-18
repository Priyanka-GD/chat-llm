import AWS from 'aws-sdk';

// Initialize AWS Bedrock
const bedrock = new AWS.BedrockRuntime({
    region: 'us-east-1', // Set the correct AWS region
});

exports.handler = async (event: any) => {
    try {
        const requestBody = JSON.parse(event.body);
        const userMessage = requestBody.text;

        if (!userMessage) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'No input provided' }),
            };
        }

        // Call AWS Bedrock LLM
        const params = {
            modelId: 'amazon.titan-tg1-large', // Example model ID
            contentType: 'application/json',
            accept: 'application/json',
            body: JSON.stringify({
                inputText: userMessage,
            }),
        };

        const response = await bedrock.invokeModel(params).promise();
        const responseBody = JSON.parse(response.body);

        return {
            statusCode: 200,
            body: JSON.stringify({ llmResponse: responseBody }),
        };
    } catch (error) {
        console.error('Error invoking LLM:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error processing request' }),
        };
    }
};
