import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
export class CdkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Create AWS Lambda function for the Spring Boot backend
        const backendLambda = new lambda.Function(this, 'ChatLlmLambda', {
            runtime: lambda.Runtime.JAVA_17, // Ensure Java 17+ is supported
            handler: 'src.main.java.com.chatapp.chatllm..ChatLlmApplication::handleRequest',
            code: lambda.Code.fromAsset('../backend/target/chat-llm-0.0.1-SNAPSHOT.jar'), // Update the JAR path
            memorySize: 1024,
            timeout: cdk.Duration.seconds(30),
        });
        // Create API Gateway to expose the Lambda function
        const api = new apigateway.LambdaRestApi(this, 'ChatApiGateway', {
            handler: backendLambda,
            proxy: true,
        });
        // Output the API Gateway URL
        new cdk.CfnOutput(this, 'ApiGatewayUrl', {
            value: api.url,
            description: 'API Gateway endpoint for Chat LLM backend',
        });
    }
}
