import React, { FC, useState } from 'react'

import { Formik, Form, FormikHelpers } from 'formik'

import { Wrapper, InputContainer, FormButton, Span } from './styles'
import { Input } from 'Components/Input'
import { Modal } from './Modal'

import { resetPassword } from "Api/PasswordReset"

interface FormProps {
  password: string,
  passwordConfirmation: string
}

interface PasswordChangeProps {
  token: string
}

export const PasswordChange: FC<PasswordChangeProps> = ({ token }) => {

  const [isVisible, setIsVisible] = useState(false)


  const handleSubmit = ({ password }: FormProps, { setSubmitting, setValues, setErrors }: FormikHelpers<FormProps>)  => {    
    resetPassword(password, token)
    .then((res) => {
        console.log(res)
    })
    .catch(err => {
      setErrors({
        password: err.message
      })
    })


    setSubmitting(false)
    setValues({
      password: "",
      passwordConfirmation: ""
    })
  }

  const validateSubmit = (values: FormProps) => {
    const errors: any = { }

    if(values.password !== values.passwordConfirmation){
      errors.password = "As senhas devem ser iguais"
      errors.passwordConfirmation = "As senhas devem ser iguais"
    } 

    if(!values.password || !values.passwordConfirmation) {
      errors.password = "Required"
      errors.passwordConfirmation = "Required"
    }
    return errors
  } 

  
  return (
    <>
      <Formik 
        initialValues={{
        password: '',
        passwordConfirmation: ""
          }}
          validate={validateSubmit}
          onSubmit={handleSubmit}
          >
          {({ isSubmitting }) => (
          <Wrapper isVisible={isVisible}>
            <Form>
              <InputContainer>
                <Input 
                  type="password" 
                  label="Escolha uma nova senha" 
                  placeholder="Digite sua nova senha" 
                  name="password"
                  />
              </InputContainer>
              <InputContainer>
                <Input 
                  type="password" 
                  label="Confirmação de nova senha" 
                  placeholder="Confirme sua nova senha" 
                  name="passwordConfirmation"
                  />
              </InputContainer>
              <FormButton type="submit" disabled={isSubmitting}>
                ATUALIZAR SENHA
              </FormButton>
            </Form>
            <Span onClick={() => setIsVisible(!isVisible)}> Ainda está com problemas? </Span>
          </Wrapper>
          )
          }        
        </Formik>
        <Modal isVisible={isVisible} setFunction={setIsVisible} />
      </>
  )
}

export default PasswordChange