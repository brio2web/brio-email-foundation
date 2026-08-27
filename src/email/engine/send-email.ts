import type {
  SendEmailInput,
  SendEmailResult,
} from '../types/email';

import { sendWithResend } from '../providers/resend/resend-adapter';

export async function sendEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  return sendWithResend(input);
}
