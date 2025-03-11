'use client';

import StyledComponentsRegistry from '../registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/config/theme';
import GlobalStyles from '@/shared/styles/global';
import Toast from '@/widgets/toast/Toast';
import ConfirmDialog from '@/widgets/confirm-modal/ConfirmModal';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toast />
        <ConfirmDialog />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

Provider.displayName = 'Provider';

export default Provider;
