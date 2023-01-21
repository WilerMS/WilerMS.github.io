import React, { useState } from 'react'
import * as Styled from './Contact.styled'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

const ContactFormItem = ({
  className,
  regex = /^[a-zA-Z0-9\s]*$/,
  isRequired = true,
  label = '',
  id = '',
  type = 'text',
  errorText = 'This field value is not valid.',
  element = 'input',
  onChange = (e) => { }
}) => {

  const [isValid, setIsValid] = useState(true)
  const [value, setValue] = useState('')
  const { t } = useTranslation()

  const handleChange = (e) => {
    setValue(e.target.value)
    onChange(Boolean(e.target.value) && regex.test(e.target.value) && e.target.value, className)
    setIsValid(Boolean(e.target.value) && regex.test(e.target.value))
  }

  return (
    <div
      id={id}
      className={`${className} ${isValid ? '' : 'error'}`}
    >
      {element === 'input' ?
        <input
          type={type}
          required={isRequired}
          value={value}
          onChange={handleChange}
        />
        :
        <textarea
          type={type}
          required={isRequired}
          value={value}
          onChange={handleChange}
        />
      }
      <label>{t(label)}</label>
      {!isValid &&
        <span className="error">
          {t(errorText)}
        </span>}
    </div>
  )

}

export const Contact = ({ id }) => {
  
  const { t } = useTranslation()
  const [data, setData] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  })

  const handleSubmit = () => {
    const isValid = Object.values(data).every(e => Boolean(e))

    console.log({data})

    if (!isValid) {
      Swal.fire({
        title: t('Error!'),
        text: t('Some fields are not correct.'),
        icon: t('error'),
        confirmButtonText: t('Accept')
      })
      return
    }

    // TODO: Send Messages.
    Swal.fire({
      title: t('Sended'),
      text: t(`We have received you message. We'll answer soon`),
      icon: 'success',
      confirmButtonText: t('Accept')
    })

  }

  const handleChange = (value, element) => {
    setData({
      ...data,
      [element]: value
    })
  }


  return (
    <Styled.Wrapper id={id} >
      <div className="layout">
        <Styled.LayoutTitle>
          <h1>Contact</h1>
        </Styled.LayoutTitle>
        <Styled.ContactForm>
          <ContactFormItem
            className='name'
            label='Name'
            regex={/^[a-zA-Z0-9\s]*$/}
            onChange={handleChange}
          />
          <ContactFormItem
            className='email'
            label='Email'
            regex={/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i}
            onChange={handleChange}
          />
          <ContactFormItem
            className='phone'
            label='Phone'
            regex={/^[0-9\s+]*$/}
            onChange={handleChange}
          />
          <ContactFormItem
            className='message'
            label='Message'
            element='textarea'
            regex={/^.*/}
            onChange={handleChange}
          />
          <button
            className='send'
            onClick={handleSubmit}
          >
            {t('Send')}
          </button>
        </Styled.ContactForm>
      </div>
    </Styled.Wrapper>
  )
}