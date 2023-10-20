import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 16px;
`;

export const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
`;

export const FormField = styled.input`
  border-color: #eef0f2;
  border-style: solid;
  border-radius: 2px;
  box-shadow: yellowgreen 0px 1px 6px;
  font-size: 16px;
  font-weight: 400;

  &:hover,
  &:focus {
    box-shadow: yellow 0px 0px 0px 2px;
  }
`;
