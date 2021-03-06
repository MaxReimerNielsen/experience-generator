import { Component } from 'react';
import Panel from './internal/Panel.js';
import PanelRow from './internal/PanelRow.js';
import PanelCell from './internal/PanelCell.js';
import Slider from 'sitecore-ui/Slider';
import Divider from 'sitecore-ui/Divider';
import { connect } from 'react-redux';
import { updateSlider, updateCategorySlider, dragStart, dragStop } from '../../../actions/Actions';
import { bindActionCreators } from 'redux';

const data = [
  { category: "3rd Party", label: "Email inclusion", value: 0 },
  { category: "3rd Party", label: "Other 3rd party", value: 0 },
  { category: "3rd Party", label: "Other 3rd party pay-per-lead", value: 0 },
  { category: "3rd Party", label: "Virtual events", value: 0 },
  { category: "Apps", label: "App push", value: 0 },
  { category: "Apps", label: "App store activity", value: 0 },
  { category: "Apps", label: "App usage", value: 0 },
  { category: "Apps", label: "Other apps", value: 0 },
  { category: "Automation Programs", label: "Email automation", value: 0 },
  { category: "Automation Programs", label: "Other automation", value: 0 },
  { category: "Automation Programs", label: "SMS automation", value: 0 },
  { category: "Digital Events", label: "Other digital events", value: 0 },
  { category: "Digital Events", label: "Webinar live", value: 0 },
  { category: "Digital Events", label: "Webinar recorded", value: 0 },
  { category: "Direct", label: "Facebook display", value: 0.5 },
  { category: "Display", label: "Google display", value: 0 },
  { category: "Display", label: "LinkedIn display", value: 0 },
  { category: "Display", label: "Other display", value: 0 },
  { category: "Display", label: "Twitter display", value: 0 },
  { category: "Email Campaigns", label: "Email marketing", value: 0 },
  { category: "Email Campaigns", label: "Email newsletter", value: 0 },
  { category: "Email Campaigns", label: "Email notifications", value: 0 },
  { category: "Email Campaigns", label: "Email purchased list", value: 0 },
  { category: "Email Campaigns", label: "Email sent", value: 0 },
  { category: "Email Campaigns", label: "Other email", value: 0 },
  { category: "Organic Search", label: "Organic branded search", value: 0 },
  { category: "Organic Search", label: "Organic non-branded search", value: 0 },
  { category: "Organic Search", label: "Search not provided home page", value: 0 },
  { category: "Organic Search", label: "Search Not provided not Home page", value: 0 },
  { category: "Paid Search", label: "Bing ads", value: 0 },
  { category: "Paid Search", label: "Facebook ads", value: 0 },
  { category: "Paid Search", label: "Google ads", value: 0 },
  { category: "Paid Search", label: "LinkedIn ads", value: 0 },
  { category: "Paid Search", label: "Other ads", value: 0 },
  { category: "Paid Search", label: "YouTube ads", value: 0 },
  { category: "Referral", label: "Affiliate referrals", value: 0 },
  { category: "Referral", label: "Organic referrals", value: 0 },
  { category: "Referral", label: "Other referrals", value: 0 },
  { category: "Referral", label: "Owned referrals", value: 0 },
  { category: "Referral", label: "Partner referrals", value: 0 },
  { category: "Referral", label: "PR referrals", value: 0 },
  { category: "Referral", label: "RSS referrals", value: 0 },
  { category: "SMS Campaigns", label: "Other SMS", value: 0 },
  { category: "SMS Campaigns", label: "SMS marketing", value: 0 },
  { category: "SMS Campaigns", label: "SMS notifications", value: 0 },
  { category: "SMS Campaigns", label: "SMS sent", value: 0 },
  { category: "Social Community", label: "Facebook social community", value: 0 },
  { category: "Social Community", label: "Google Plus social community", value: 0 },
  { category: "Social Community", label: "LinkedIn social community", value: 0 },
  { category: "Social Community", label: "Other social community", value: 0 },
  { category: "Social Community", label: "Twitter social community", value: 0 },
  { category: "Social Community", label: "YouTube social community", value: 0 },
  { category: "Social Mentions", label: "Blogs", value: 0 },
  { category: "Social Mentions", label: "Other social mentions", value: 0 },
  { category: "Social Mentions", label: "Wiki", value: 0 },
  { category: "Social Sponsored Posts", label: "Facebook sponsored posts", value: 0 },
  { category: "Social Sponsored Posts", label: "LinkedIn sponsored posts", value: 0 },
  { category: "Social Sponsored Posts", label: "Other sponsored posts", value: 0 },
  { category: "Social Sponsored Posts", label: "Twitter sponsored posts", value: 0 },
];

class Page extends Component {
  constructor(props) {
    super(props);
  }
  onDragStart() {
    this.props.dragStart();
  }

  onDragStop() {
    this.props.dragStop();
  }

  onSliderChange(evt, value) {
    this.props.updateSlider(value);
  }

  onCategorySliderChange(index, evt, value) {
    this.props.updateCategorySlider(index, value);
  }


  shouldComponentUpdate() {
    return !this.props.channels.dragging;
  }

  render() {
    const dividerStyles = { marginTop: 0, marginBottom: 0, marginLeft: 15, marginRight: 15 }

    return (
      <div>
        <Panel header="Channel traffic">
          <PanelRow>
            <PanelCell colClass="s6">Percentage of traffic with explicitly set channel</PanelCell>
            <PanelCell colClass="s6">
              <Slider onChange={this.onSliderChange.bind(this) } defaultValue={this.props.channels.channelTraffic} onFocus={this.onDragStart.bind(this) } onBlur={this.onDragStop.bind(this) }></Slider>
            </PanelCell>
          </PanelRow>
        </Panel>
        <Panel header="Channels" style={{ paddingBottom: '15px' }}>
          {data.map((row, index, list) => {
            let prev = list[index - 1];
            let showCategory = row.category !== (prev && prev.category);
            const categoryStyle = { fontWeight: 'bold', visibility: showCategory ? '' : 'hidden' };

            return (
              <div key={index}>
                {index !== 0 &&
                  <Divider style={dividerStyles} />
                }
                <PanelRow>
                  <PanelCell colClass="s2" style={categoryStyle}>{row.category}</PanelCell>
                  <PanelCell colClass="s8">{row.label}</PanelCell>
                  <PanelCell colClass="s2"><Slider onChange={this.onCategorySliderChange.bind(this, index) } onFocus={this.onDragStart.bind(this) } onBlur={this.onDragStop.bind(this) } defaultValue={this.props.channels.channelCategorySlider[index].value}></Slider></PanelCell>
                </PanelRow>
              </div>

            );
          }) }
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateSlider, updateCategorySlider, dragStart, dragStop }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);