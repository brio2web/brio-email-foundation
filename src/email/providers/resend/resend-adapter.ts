import { render } from '@react-email/components';

import type {
  SendEmailInput,
  SendEmailResult,
} from '../../types/email';

import { WelcomeEmail } from '../../templates/welcome';
import { resendClient } from './resend-client';

export async function sendWithResend(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  try {
    if (input.template !== 'welcome') {
      return {
        success: false,
        error: `Unsupported email template: ${input.template}`,
      };
    }

    const name =
      typeof input.data?.name === 'string'
        ? input.data.name
        : undefined;

    if (!name) {
      return {
        success: false,
        error: 'The welcome email requires a name.',
      };
    }

    const html = await render(
      <WelcomeEmail name={name} />,
    );

    const from = process.env.RESEND_FROM_EMAIL;

    if (!from) {
      return {
        success: false,
        error: 'RESEND_FROM_EMAIL is not configured.',
      };
    }

    const result = await resendClient.emails.send({
      from,
      to: input.to,
      subject: input.subject,
      html,
    });

    if (result.error) {
      return {
        success: false,
        error: result.error.message,
      };
    }

    return {
      success: true,
      id: result.data?.id,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'An unknown email error occurred.',
    };
  }
} 
