export type EmailTemplate =
  | 'welcome';

export interface SendEmailInput {
  to: string;
  subject: string;
  template: EmailTemplate;
  data?: Record<string, unknown>;
}

export interface SendEmailResult {
  success: boolean;
  id?: string;
  error?: string;
}
