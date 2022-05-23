import { Paragraph, Span, Wrapper } from "./styles";

export default function WalletMessageCard() {
  return (
    <Wrapper>
      <Paragraph>
        Muito bem, sua carteira está positiva!
        <Span>Considere investir o seu saldo!</Span>
      </Paragraph>
    </Wrapper>
  );
}
