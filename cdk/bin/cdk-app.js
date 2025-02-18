#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack.js';
const app = new cdk.App();
// Get AWS account and region from environment variables
const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT || '277707130301',
    region: process.env.CDK_DEFAULT_REGION || 'us-east-1'
};
new CdkStack(app, 'ChatLlmStack', { env });
