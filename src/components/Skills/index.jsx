import React from 'react';
import { useTranslation } from 'react-i18next'
import { skills } from '@src/constants/contents.constants'
import * as Styled from './Skills.styled'

const SkillPanel = ({ skills }) => {

    const { t } = useTranslation();

    return (
        <Styled.SkillsPanelContainer>
            <div className='skills-panel-header'>
                <h2>{t(skills.name)}</h2>
            </div>
            <div className='skills-panel-body'>
                {skills.items.map(item => (
                    <Styled.SkillItem key={item.title}>
                        <div className='skills-item-icon'>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className='skills-item-title'>
                            <h3>{item.title}</h3>
                            <span>{t(item.subtitle)}</span>
                        </div>
                    </Styled.SkillItem>
                ))}
            </div>
        </Styled.SkillsPanelContainer>
    )
}

export const Skills = () => {

    const { t } = useTranslation()
    return (
        <>
            <div className='layout-header'>
                <span>{t('These are some of my favourite skills')}</span>
            </div>
            <div className='layout-content'>
                {skills.map(type => (
                    <SkillPanel key={type.name} skills={type} />
                ))}
            </div>
        </>
    )
}