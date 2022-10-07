import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components'
import 'react-tabs/style/react-tabs.css';

import useWindowsDimensions from '@hooks/useWindowsDimensions'
import * as constants from '@src/constants/styles.constants'

const TabsContainer = styled(Tabs)`
    margin-top: 50px;
    width: 100%;
    color: white;

    .active {
        &::after {
            display: none;
        }
    }

    ul {
        overflow-y: hidden;
        overflow-x: auto;
        display: flex;
        align-items: flex-end;
    }

    li {
        font-size: 1.2rem;
        white-space: nowrap;
        overflow: hidden;

        svg {
            font-size: 2rem;
        }

        &.active {
            background: #fff;
            border-color: #aaa;
            color: black;
            border-radius: 5px 5px 0 0;

            svg {
                color: black;
            }
        }
    }

    

`

const _Tabs = ({ tabs }) => {

    const { width } = useWindowsDimensions()

    return (
        <TabsContainer selectedTabClassName='active'>
            <TabList>
                {tabs.map(({ name, Icon }) => (
                    <Tab key={name}>
                        {width > constants.MEDIA_QUERIES.sm
                            ? name

                            : <Icon />
                        }
                    </Tab>
                ))}
            </TabList>

            {tabs.map(({ Component }, index) => (
                <TabPanel key={index}>
                    <Component />
                </TabPanel>
            ))}
        </TabsContainer>
    );
}

export default _Tabs