import { Background, Container, Title } from "./styles";

type ModalProps = {
  children: React.ReactNode;
  title: string;
};

export const Modal = ({ children, title }: ModalProps) => {
  return (
    <Background>
      <Container>
        <Title>{title}</Title>
        <div>{children}</div>
      </Container>
    </Background>
  );
};
