import { createTheme, MantineProvider } from '@mantine/core';
import './App.css'
import Form from './components/form/Form'
import Header from './components/header/Header'
import '@mantine/core/styles.css';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
     <MantineProvider withGlobalStyles>
      <Header/>
      <Form/>
      <Footer/>
    </MantineProvider>
    </>
  )
}

export default App
