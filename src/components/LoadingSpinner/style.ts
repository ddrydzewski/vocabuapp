import { colors, styled } from 'precise-ui';

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.eclipse};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
