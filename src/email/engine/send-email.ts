import type {
  SendEmailInput,
  SendEmailResult,
} from '../types/email';

export async function sendEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  // Provider implementation will be connected here.
  // Resend will be added through the provider adapter.

  void input;

  return {
    success: false,
    error: 'Email provider is not configured.',
  };
}
