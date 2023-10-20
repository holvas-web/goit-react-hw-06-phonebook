import { Formik, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { ImAddressBook, ImUserPlus, ImUser, ImPhone } from "react-icons/im";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Styleform, StyledField, StyledLabel, ErrorMessageStyled, HeroTitleStyled, SubmitBtn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const icon ={
    phoneBook: <ImAddressBook/>,
    user: <ImUser/>,
    phone: <ImPhone/>,
    addContact:<ImUserPlus/>, 
};

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      'Invalid name format'
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format'
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const newContact = values
        const existingContact = contacts.find(
          contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
        );
        console.log(newContact)
          if (existingContact) {
            toast.info(`${newContact.name} is already in contacts.`, {
              position: "top-right",
              autoClose: 2000,});
            return;
          }
          
          actions.resetForm();
          dispatch(addContact(newContact))
      }}
    >
      {({ handleSubmit }) => (
        <Styleform onSubmit={handleSubmit}>
          <HeroTitleStyled>{icon.phoneBook} Phonebook</HeroTitleStyled>
          <StyledLabel>{icon.user} Name</StyledLabel>
          <StyledField name="name" />
          <ErrorMessage name="name" component={ErrorMessageStyled} />

          <StyledLabel>{icon.phone} Number</StyledLabel>
          <StyledField name="number" />
          <ErrorMessage name="number" component={ErrorMessageStyled} />

          <SubmitBtn type="submit">{icon.addContact} Add contact</SubmitBtn>
        </Styleform>
      )}
    </Formik>
  );
};