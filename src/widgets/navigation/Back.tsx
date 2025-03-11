import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Back = () => {
  const router = useRouter();

  return <Wrapper onClick={() => router.back()}>{' < '}</Wrapper>;
};

const Wrapper = styled.button`
  position: relative;
  display: flex;
`;

Back.displayName = 'Back';

export default Back;
