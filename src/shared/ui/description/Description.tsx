import { theme } from '@/shared/config/theme';
import styled from 'styled-components';

interface DescriptionProps {
  type?: 'default' | 'help' | 'error' | 'info' | 'warning' | 'success';
  text: string;
}

const DESCRIPTION_STYLE_LIST = {
  help: {
    color: theme.sementicColors.text.tertiary,
  },
  error: {
    color: theme.sementicColors.text.danger,
  },
  info: {
    color: theme.sementicColors.text.brand,
  },
  warning: {
    color: theme.sementicColors.text.warning,
  },
  success: {
    color: theme.sementicColors.text.success,
  },
  default: {
    color: theme.sementicColors.text.tertiary,
  },
};

const Description = ({ type = 'default', text }: DescriptionProps) => {
  return <Wrapper type={type}>{text}</Wrapper>;
};
interface DescriptionStyledProps {
  type: 'default' | 'help' | 'error' | 'info' | 'warning' | 'success';
}
const Wrapper = styled.p<DescriptionStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  color: ${({ type }) => DESCRIPTION_STYLE_LIST[type].color};
`;

Description.displayName = 'Description';

export default Description;
