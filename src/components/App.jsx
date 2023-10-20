
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./GlobalStyled";
import { Wrapper } from "./App.styled";
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <Wrapper>
      <ContactForm />
        <Filter/>
        <ContactList/>
      <ToastContainer />
      </Wrapper>
      <GlobalStyle/>
    </Layout>
  );
};
