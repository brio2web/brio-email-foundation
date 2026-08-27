import type {
  SendEmailInput,
  SendEmailResult,
} from '../../types/email';

export async function sendWithResend(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  // Resend SDK implementation will be added here.

  void input;

  return {
    success: false,
    error: 'Resend provider is not configured.',
  };
}
