import styled from 'styled-components';

export const List = styled.ul`
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 16px;
`;

export const Marker = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  padding: 2px 10px;
  box-shadow: yellowgreen 0px 1px 6px;
  background-color: #fff;
  border-color: transparent;
  width: fit-content;
  border-radius: 4px;

  &:hover,
  &:focus {
    box-shadow: yellow 0px 0px 0px 2px;
  }
`;
