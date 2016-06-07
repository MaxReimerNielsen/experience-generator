import React, { Component } from 'react';
import Panel from './internal/Panel.js';
import PanelRow from './internal/PanelRow.js';
import PanelCell from './internal/PanelCell.js';
import Slider from 'sitecore-ui/Slider';
import Divider from 'sitecore-ui/Divider';
import TextField from 'sitecore-ui/TextField';
import DatePicker from 'sitecore-ui/DatePicker';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData} from '../../../actions/Overview_actions';
import  OverviewSlider from './internal/OverviewSlider.js';

class OverviewPage extends Component {
    constructor(props) {
        super(props);

        if (!props.overview.dataLoaded) {
            props.getData();
        }
    }

    render() {
        const {
            overview: {
                uniqueVisitorsNumber,
                generatedVisitsNumber,
                bounceRate,
                percentageIdentifiedVisitors,
                peageviewsPerVisit,
                timeSpentPerVisit,
                startDate,
                endDate,
                dailyDistribution,
                monthlyDistribution,
                trafficDistribution,
                location
            }
        } = this.props;
        
      
        const trafficDistr = trafficDistribution.map((item, index)=>{
            return(
                <OverviewSlider value={item.value} name={item.name} key={index}/>
            );
        });
      
        const locationSliders = location.map((item, index)=>{
            return(
                <OverviewSlider value={item.value} name={item.name} key={index}/>
            );
        });

        const dailyDistr = dailyDistribution.map((item, index)=>{
            return(
                <OverviewSlider value={item.value} name={item.name} key={index}/>
            );
        });

        const monthDistr = monthlyDistribution.map((item, index)=>{
            return(
                <OverviewSlider value={item.value} name={item.name} key={index}/>
            );
        });

        return (
            <div>
                <Panel header="Overview">
                    <PanelRow>
                        <PanelCell colClass="s4">

                            <TextField
                                name="uniqueVisitorsNumber"
                                floatingLabelText={uniqueVisitorsNumber.name}
                                value={uniqueVisitorsNumber.value}
                                />
                            <TextField
                                name="generatedVisitsNumber"
                                floatingLabelText={generatedVisitsNumber.name}
                                value={generatedVisitsNumber.value}
                                />
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s12">
                                    {bounceRate.name}
                                </PanelCell>
                                <PanelCell colClass="s12">
                                    <Slider value={bounceRate.value}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s12">
                                    {percentageIdentifiedVisitors.name}
                                </PanelCell>
                                <PanelCell colClass="s12">
                                    <Slider value={percentageIdentifiedVisitors.value}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <TextField
                                name="peageviewsPerVisit"
                                floatingLabelText={peageviewsPerVisit.name}
                                value={peageviewsPerVisit.value}
                                />
                            <TextField
                                name="timeSpentPerVisit"
                                floatingLabelText={timeSpentPerVisit.name}
                                value={timeSpentPerVisit.value}
                                />

                        </PanelCell>


                        <PanelCell colClass="s4">
                            <div>Traffic distribution</div>
                            {trafficDistr}
                        </PanelCell>

                        <PanelCell colClass="s4">
                            <div>Location</div>
                            {locationSliders}
                        </PanelCell>
                    </PanelRow>

                    <PanelRow>
                        <PanelCell colClass="s4">
                            <div>Start Date</div>
                            <DatePicker container="inline" name="StartDate" />
                            <div>End Date</div>
                            <DatePicker container="inline" name="EndDate"/>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s12">
                                    Annual increase in traffic
                                </PanelCell>
                                <PanelCell colClass="s12">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                        </PanelCell>
                        <PanelCell colClass="s4">
                            <div>Daily distribution</div>
                            {dailyDistr}
                        </PanelCell>

                        <PanelCell colClass="s4">
                            <div>Monthly distribution</div>
                            {monthDistr}
                        </PanelCell>

                    </PanelRow>

                </Panel>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return { overview: state.overview };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
