import { styled, TextField } from 'precise-ui';
import { black } from 'precise-ui/dist/es6/colors';

export const ModalStyles = {
  overlay: {
    margin: 'auto',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },

  content: {
    color: black,
    fontSize: '22px',
    width: '26rem',
    bottom: 'auto',
    background: '#edf5e1',
    borderColor: 'black',
  },
};


export const StyledTextFieldWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledTextField = styled(TextField)`
color: black;
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
