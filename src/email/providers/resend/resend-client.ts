import { Resend } from 'resend';
import { getEnvVar } from '../../../config/get-env-var.js';

const apiKey = getEnvVar(
  process.env.RESEND_API_KEY,
  'RESEND_API_KEY',
);

export const resendClient = new Resend(apiKey);
