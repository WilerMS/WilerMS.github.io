import React, { useState } from 'react'
import * as Styled from './Contact.styled'
import { useTranslation } from 'react-i18next'

const ContactFormItem = ({
  className,
  regex = /^[a-zA-Z0-9\s]*$/,
  isRequired = true,
  label = '',
  id = '',
  type = 'text',
  errorText = 'This field value is not valid.',
  element = 'input'
}) => {

  const [isValid, setIsValid] = useState(true)
  const [value, setValue] = useState('')
  const { t } = useTranslation()

  const handleChange = (e) => {
    setValue(e.target.value)
    setIsValid(regex.test(e.target.value))

    console.log(regex.test(e.target.value))
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

  return (
    <Styled.Wrapper
      id={id}
    >
      <div className="layout">
        <Styled.LayoutTitle>
          <h1>Contact</h1>
        </Styled.LayoutTitle>
        <Styled.ContactForm>
          <ContactFormItem
            className='name'
            label='Name'
            regex={/^[a-zA-Z0-9\s]*$/}
          />
          <ContactFormItem
            className='email'
            label='Email'
            regex={/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i}
          />
          <ContactFormItem
            className='phone'
            label='Phone'
            regex={/^[0-9\s+]*$/}
          />
          <ContactFormItem
            className='message'
            label='Message'
            element='textarea'
            regex={/^.*/}
          />
        </Styled.ContactForm>
      </div>
    </Styled.Wrapper>
  )
}