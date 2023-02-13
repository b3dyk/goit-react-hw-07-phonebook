import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsAction } from 'redux/filter/filter.slice';
import { selectFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Input
      type="text"
      name="search"
      value={filter}
      placeholder="Search by name"
      onChange={({ target: { value } }) =>
        dispatch(filterContactsAction(value))
      }
    />
  );
};
