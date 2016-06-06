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

class OverviewPage extends Component {
     constructor(props) {
        super(props);
        
        if(!props.overview.dataLoaded) {
            props.getData();
        }
    }
    
    render() {
          const {
            overview: {
                uniqueVisitorsNumber
            }
        } = this.props;
        
        return (
            <div>
                <Panel header="Overview">
                    <PanelRow>
                        <PanelCell colClass="s4">

                            <TextField
                                floatingLabelText="Number of unique visitors"
                                value={uniqueVisitorsNumber.value}
                                />
                            <TextField
                                floatingLabelText="Number of visits generated (approx.)"
                                value="500"
                                />
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s12">
                                    Bounce rate
                                </PanelCell>
                                <PanelCell colClass="s12">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s12">
                                    Percentage identified visitors
                                </PanelCell>
                                <PanelCell colClass="s12">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <TextField
                                floatingLabelText="Pageviews per visit (avg)"
                                value="4"
                                />
                            <TextField
                                floatingLabelText="Time spent per page (avg)"
                                value="00:30"
                                />

                        </PanelCell>


                        <PanelCell colClass="s4">
                            <div>Traffic distribution</div>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    micro
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    website
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                        </PanelCell>
                        
                        <PanelCell colClass="s4">
                            <div>Location</div>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Europe, Middle East, Africa
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Asia Pacific
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Americas
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
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
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Monday
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Tuesday
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Wednesday
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Thursday
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Friday
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Saturday
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Sunday
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                        </PanelCell>
                        
                        <PanelCell colClass="s4">
                        <div>Daily distribution</div>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    January
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    February
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    March
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    April
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    May
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    June
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    July
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    August
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    September
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    October
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    November
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    December
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                        </PanelCell>
                        
                    </PanelRow>

                </Panel>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    
    return {overview:state.overview};
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getData }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(OverviewPage);
