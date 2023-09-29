import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setFilter from '../../redux/contactsSlice';
import { Input } from 'components/ContactForm/ContactForm.styled';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search by name"
    />
  );
}

