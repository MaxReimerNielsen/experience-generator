import React, { Component } from 'react';
import Slider from 'sitecore-ui/Slider';
import PanelRow from './PanelRow.js';
import PanelCell from './PanelCell.js';

const OverviewSlider = (props) => {
    const {
        name,
        onChange,
        value

    } = props;

    return (
        <PanelRow style={{ padding: '15px 0' }}>
            <PanelCell colClass="s3">
                {name}
            </PanelCell>
            <PanelCell colClass="s9">
                <Slider value={value} > </Slider>
            </PanelCell>
        </PanelRow>
    );
}

export default OverviewSlider;