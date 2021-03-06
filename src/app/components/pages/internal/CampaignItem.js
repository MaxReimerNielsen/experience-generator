import React, { Component } from 'react';
import Slider from 'sitecore-ui/Slider';
import PanelRow from './PanelRow.js';
import PanelCell from './PanelCell.js';

const CampaignItem = (props) => {
    const { name, onChange, showLargeSlider, value } = props;
    const nameColSize = (showLargeSlider ? 's6' : 's9');
    const sliderColSize = (showLargeSlider ? 's6' : 's3');
    
    return (
        <PanelRow>
            <PanelCell colClass={nameColSize}>{name}</PanelCell>
            <PanelCell colClass={sliderColSize}><Slider value={value} onChange={onChange} /></PanelCell>
        </PanelRow>
    );   
}

export default CampaignItem;