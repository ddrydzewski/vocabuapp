import { colors, styled, TextField } from 'precise-ui';
import { white } from 'precise-ui/dist/es6/colors';

export const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0)',
  },

  content: {
    color: white,
    top: '3.5rem',
    left: '3rem',
    width: '26rem',
    bottom: 'auto',
    background: colors.black,
    borderColor: colors.grey1,
  },
};


export const StyledTextFieldWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledTextField = styled(TextField)``;

export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
