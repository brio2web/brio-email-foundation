import type {
  SendEmailInput,
  SendEmailResult,
} from '../types/email.js';

import { sendWithResend } from '../providers/resend/resend-adapter.js';

export async function sendEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  return sendWithResend(input);
}
