import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components'
import 'react-tabs/style/react-tabs.css';

const TabsContainer = styled(Tabs)`
    margin-top: 50px;
    width: 90%;
    color: white;

    .active {
        &::after {
            display: none;
        }
    }

    li {
        font-size: 1.2rem;

        &.active {
            background: #fff;
            border-color: #aaa;
            color: black;
            border-radius: 5px 5px 0 0;
        }
    }

    

`

const _Tabs = ({ tabs }) => (
    <TabsContainer selectedTabClassName='active'>
        <TabList>
            {tabs.map(({ name }) => (
                <Tab key={name}>{name}</Tab>
            ))}
        </TabList>

        {tabs.map(({ Component }, index) => (
            <TabPanel key={index}>
                <Component />
            </TabPanel>
        ))}
    </TabsContainer>
);

export default _Tabs