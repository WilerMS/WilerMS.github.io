import React from 'react'
import { useTranslation } from 'react-i18next'
import * as Styled from './Collaborations.styled'
import { companies } from '@src/constants/contents.constants'

export const Colaborations = () => {

    const { t } = useTranslation()

    return (
        <Styled.Wrapper>
            <div className='collaborations-header'>
                <span>{t("I am proud to have had the opportunity to work side by side with developers and colleagues from these great companies. They teached me many things.")}</span>
            </div>
            <div className='collaborations-content'>
                {companies.map(company => (

                    <Styled.Company
                        key={company.name}
                        color={company.bg}
                    >
                        <div className="img">
                            <img
                                src={company.img}
                                alt={company.name}
                            />
                        </div>
                        <div className="title">
                            <h2>{company.name}</h2>
                        </div>
                    </Styled.Company>
                ))}
            </div>
        </Styled.Wrapper>
    )
}

export default Colaborations