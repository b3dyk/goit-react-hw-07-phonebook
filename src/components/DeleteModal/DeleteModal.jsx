import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContactAction } from 'redux/contacts.slice';
import { Backdrop, Button, ModalWindow, Wrapper } from './DeleteModal.styled';
import { ThemeProvider } from 'styled-components';

Button.defaultProps = {
  theme: {
    main: '#45b6fe',
  },
};

const theme = {
  main: '#ff6242',
};

export const DeleteModal = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const handleClose = evt => {
    if (evt.target === evt.currentTarget) {
      onClose(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteContactAction(id));
    onClose(false);
  };
  return (
    <Backdrop onClick={handleClose}>
      <ModalWindow>
        <h4>Are you shure you want to delete this buddy?</h4>
        <Wrapper>
          <ThemeProvider theme={theme}>
            <Button type="button" onClick={handleDelete}>
              F@&k this c@#t!
            </Button>
          </ThemeProvider>
          <Button type="button" onClick={handleClose}>
            No way
          </Button>
        </Wrapper>
      </ModalWindow>
    </Backdrop>
  );
};

DeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
