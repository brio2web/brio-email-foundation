import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';

export interface WelcomeEmailProps {
  name: string;
}

export function WelcomeEmail({ name }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to BrioWeb</Preview>

      <Body>
        <Container>
          <Heading>Welcome, {name}!</Heading>

          <Text>
            Thanks for getting started with BrioWeb.
          </Text>

          <Button href="https://example.com">
            Get Started
          </Button>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;
