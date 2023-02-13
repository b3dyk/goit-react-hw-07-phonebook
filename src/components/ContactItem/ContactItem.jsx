import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Item, Text } from './ContactItem.styled';
import { DeleteModal } from 'components/DeleteModal/DeleteModal';

export const ContactItem = ({ id, name, number }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => setDeleteModal(true)}>
        Delete
      </Button>
      {deleteModal && <DeleteModal id={id} onClose={setDeleteModal} />}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
