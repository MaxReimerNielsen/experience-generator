import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'sitecore-ui/Card';
import Divider from 'sitecore-ui/Divider';
import Panel from './Panel.js';
import CampaignItem from './CampaignItem';

const Campaigns = (props) => {
    const {
        data,
        onChange
    } = props;
    
    const campaignItems = data.map((campaign, index) => {
        return(
            <div key={'campaign-container-' + index}>
                <CampaignItem name={campaign.name} value={campaign.value} onChange={onChange.bind(this, index)} />
                {index !== data.length - 1 &&
                    <Divider style={{ marginTop: 0, marginBottom: 0 }} />
                } 
            </div>
        );
    });
    
    return (
        <Panel header="Campaigns">
            {campaignItems}
        </Panel>
    );
}

export default Campaigns;