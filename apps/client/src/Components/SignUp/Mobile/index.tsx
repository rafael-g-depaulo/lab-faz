import React, { FC, useRef, useState } from 'react'
import { Formik, FormikConfig, FormikValues, Form } from 'formik'
import * as yup from 'yup'
import {
  FaRegCheckCircle,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin,
} from 'react-icons/fa'

import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
import { Step6 } from './Step6'
import { Step7 } from './Step7'
import { Step8 } from './Step8'
import { Step9 } from './Step9'
import { Step10 } from './Step10'
import { Step11 } from './Step11'
import { Step12 } from './Step12'
import { Step13 } from './Step13'
import { Step14 } from './Step14'
import { Step15 } from './Step15'
import { Step16 } from './Step16'

import {
  FormTitle,
  FormContainer,
  NextButton,
  SessionContainer,
  BackButton,
  SignUpText,
  ButtonContainer,
  FormHeader,
  RightSession,
  ConfirmEmailModal,
} from './style'
import { SignUp } from 'Api/SignUp'

interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset' | undefined
}

export const Mobile: FC<ButtonProps> = ({ buttonType }) => {
  return (
    <>
      <FormHeader />
      <FormikStepper
        initialValues={{
          email: '',
          password: '',
          confirm_password: '',
          other_idiom: '',
          use_terms: '',
          profilePicture: '',
          curriculum: '',
          Other_TechnicalArea: '',
          artist: {
            name: '',
            social_name: '',
            artistic_name: '',
            show_name: '',
            gender: '',
            sexual_orientation: '',
            gender_identity: '',
            other_gender: '',
            cpf: '',
            birthday: '',
            rg: '',
            expedition_department: '',
            is_trans: '',
            race: '',
            address: {
              city: '',
              cep: '',
              neighbourhood: '',
              number: '',
              complement: '',
              residency: 'df',
              state: 'Distrito Federal'
            },
            contact: {
              whatsapp: '',
              twitter: '',
              facebook: '',
              instagram: '',
              linkedin: '',
              tiktok: '',
              youtube: '',
            },
            technical: {
              formation: '',
              is_drt: '',
              is_ceac: '',
              is_cnpj: '',
              drt: '',
              ceac: '',
              cnpj: '',
              name_enterprise: '',
              cnpj_type: '',
              profession: '',
              areas: {
                technical_formation: '',
                name: '',
                describe: '',
                started_year: '',
                certificate: [],
              },
              idiom: [],
            },
          },
          buttonType,
        }}
        onSubmit={() => {}}
      >
        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              name: yup.string().required('Nome obrigatório'),
              social_name: yup.string(),
              artistic_name: yup
                .string()
                .min(4, 'Pelo menos 4 caracteres')
                .max(10, 'Nome muito grande'),
            }),
          })}
        >
          <Step1 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              photo_url: yup.string().required('Foto obrigatória'),
              main_name: yup.string().required('Como quer ser chamado?'),
            }),
          })}
        >
          <Step2 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              cpf: yup
                .string()
                .required('Cpf obrigatório')
                .min(11, 'Cpf incompleto'),
              birthday: yup
                .string()
                .required('Data de nascimento obrigatório')
                .min(8, 'Data incompleta'),
              rg: yup
                .string()
                .required('Rg é obrigatório')
                .min(7, 'Rg incompleto'),
              expedition_department: yup
                .string()
                .required('Orgão expedidor obrigatório'),
            }),
          })}
        >
          <Step3 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              gender: yup.string().required('Campo obrigatório'),
              gender_identity: yup.string().required('Campo obrigatório'),
            }),
          })}
        >
          <Step4 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              sexual_orientation: yup.string().required('Campo obrigatório'),
            }),
          })}
        >
          <Step5 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              race: yup.string().required('Campo obrigatório'),
            }),
          })}
        >
          <Step6 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            email: yup
              .string()
              .email('Email inválido')
              .required('Email obrigatório'),
          })}
        >
          <Step7 />
        </FormikStep>

        <FormikStep>
          <Step8 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              address: yup.object({
                city: yup.string().required('Cidade obrigatória'),
                state: yup
                  .string()
                  .required('Estado obrigatório')
                  .default('Distrito Federal'),
                residency: yup.string().required('Endereço obrigatório'),
              }),
            }),
          })}
        >
          <Step9 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              address: yup.object({
                cep: yup.string().required('CEP obrigatório'),
                neighbourhood: yup.string().required('Bairro obrigatório'),
                number: yup.string().required('Número obrigatório'),
                address: yup.string().required('Endereço obrigatório'),
              }),
            }),
          })}
        >
          <Step10 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              technical: yup.object({
                formation: yup.string().required('Formação obrigatória'),
                idiom: yup.array(),
              }),
            }),
          })}
        >
          <Step11 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              technical: yup.object({
                area: yup.object({
                  technical_formation: yup
                    .string()
                    .required('Campo obrigatório'),
                }),
              }),
            }),
          })}
        >
          <Step12 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              technical: yup.object({
                area: yup.object({
                  describe: yup.string().required('Campo obrigatório'),
                }),
              }),
            }),
          })}
        >
          <Step13 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              technical: yup.object({
                is_drt: yup.boolean().required('Campo obrigatório'),
                is_ceac: yup.boolean().required('Campo obrigatório'),
              }),
            }),
          })}
        >
          <Step14 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            artist: yup.object({
              technical: yup.object({
                is_cnpj: yup.boolean().required('Campo obrigatório'),
              }),
            }),
          })}
        >
          <Step15 />
        </FormikStep>

        <FormikStep
          validationSchema={yup.object({
            password: yup
              .string()
              .required('Senha obrigatória')
              .min(6, 'Senha no minimo 6 digítos'),
            confirm_password: yup
              .string()
              .required('Confirme password')
              .when('password', {
                is: (val) => (val && val.length > 0 ? true : false),
                then: yup
                  .string()
                  .oneOf([yup.ref('password')], 'Senhas não são iguais.'),
              }),
            use_term: yup.string().required('Termos de uso obrigatório'),
          })}
        >
          <Step16 />
        </FormikStep>
      </FormikStepper>
    </>
  )
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>
}

function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues & ButtonProps>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    FormikStepProps
  >[]

  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]

  const [confirmEmailModal, setConfirmEmailModal] = useState(true)
  const [email, setEmail] = useState('')
  const modalRef = useRef<HTMLInputElement | null>(null)

  function isLastStep() {
    return step === childrenArray.length - 1
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values: any) => {
        if (isLastStep()) {
          if (values.other_idiom) {
            const index = values.artist.technical.idiom.indexOf('Outro')

            values.artist.technical.idiom.splice(index, 1)

            values.artist.technical.idiom.push(values.other_idiom)

            delete values.other_idiom
          }

          if (values.artist.other_gender) {
            values.artist.gender = values.artist.other_gender

            delete values.artist.other_gender
          }

          if (values.Other_TechnicalArea) {
            values.artist.technical.areas.name = values.Other_TechnicalArea

            delete values.Other_TechnicalArea
          }

          delete values.artist.other_gender

          delete values.use_terms

          SignUp(values).then((res) => {
            setConfirmEmailModal(true)
            setEmail(values.email)
          })

          console.log(values)
        } else {
          setStep((currentStep) => currentStep + 1)
        }
      }}
    >
      <Form>
        <FormTitle level={1} children="Cadastre-se" />
        <SignUpText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
          ligula nibh, nec interdum nunc maximus at.
        </SignUpText>
        <SessionContainer>
          <FormContainer currentStep={step}>
            <div className="form">
              <ConfirmEmailModal ref={modalRef} isOpen={confirmEmailModal}>
                <div className="confirmEmailContainer">
                  <h1>Confirme seu email para verificar a conta</h1>
                  <h2>
                    O email com as instrucoes para ativacao e verificacao da
                    conta foram enviados para {props.initialValues.email}
                  </h2>

                  <div className="contact">
                    <label>(XX) 1234-5678</label>
                    <label htmlFor="">exemplo@ex.com.br</label>
                  </div>

                  <div className="socialMedias">
                    <a href="#" target="blank">
                      <FaYoutubeSquare />
                    </a>
                    <a href="#" target="blank">
                      <FaFacebookSquare />
                    </a>
                    <a href="#" target="blank">
                      <FaTwitterSquare />
                    </a>
                    <a href="#" target="blank">
                      <FaGooglePlusSquare />
                    </a>
                    <a href="#" target="blank">
                      <FaLinkedin />
                    </a>
                  </div>

                  <button>VOLTAR</button>
                </div>
              </ConfirmEmailModal>


              {currentChild}
              
              
              <ButtonContainer currentStep={step}>
                {step > 0 && (
                  <BackButton
                    type="button"
                    onClick={() => setStep((currentStep) => currentStep - 1)}
                  >
                    VOLTAR
                  </BackButton>
                )}
                <NextButton
                  type={
                    isLastStep() ? props.initialValues.buttonType : 'submit'
                  }
                >
                  {isLastStep() ? 'FINALIZAR' : 'AVANÇAR'}
                </NextButton>
              </ButtonContainer>
            </div>
            <RightSession currentStep={step}>
              <div className="sessionContainer">
                <div className={`formSession ${0 < step && 'checked'}`}></div>
                <div className={`formSession ${1 < step && 'checked'}`}></div>
                <div className={`formSession ${2 < step && 'checked'}`}></div>
                <div className={`formSession ${3 < step && 'checked'}`}></div>
                <div className={`formSession ${4 < step && 'checked'}`}></div>
                <div className={`formSession ${5 < step && 'checked'}`}></div>
                <div className={`formSession ${6 < step && 'checked'}`}></div>
                <div className={`formSession ${7 < step && 'checked'}`}></div>
                <div className={`formSession ${8 < step && 'checked'}`}></div>
                <div className={`formSession ${9 < step && 'checked'}`}></div>
                <div className={`formSession ${10 < step && 'checked'}`}></div>
                <div className={`formSession ${11 < step && 'checked'}`}></div>
                <div className={`formSession ${12 < step && 'checked'}`}></div>
                <div className={`formSession ${13 < step && 'checked'}`}></div>
                <div className={`formSession ${14 < step && 'checked'}`}></div>
                <div className={`formSession ${15 <= step && 'checked'}`}></div>
              </div>
            </RightSession>
          </FormContainer>
        </SessionContainer>
      </Form>
    </Formik>
  )
}