import React from 'react';
import { Link, withRouter } from 'react-router';
import DashboardSidebarContainer from './dashboard_sidebar_container';
import AttendeeEventsContainer from './attendee_events_container';
import HostEventsContainer from './host_events_container';
import NoEvents from './no_events';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let noEvents = <NoEvents user={this.props.user} />;
    let attendeeEvents = <div></div>;
    let hostEvents = <div></div>;
    if (this.props.user.events.length > 0) {
      noEvents = <div></div>;
      hostEvents = <HostEventsContainer />;
    }
    if (this.props.user.run_dates.length > 0) {
      noEvents = <div></div>;
      attendeeEvents = <AttendeeEventsContainer />;
    }

    return (
      <div className="dashboard">
        <DashboardSidebarContainer />
        <div className="dashboard-events">
          {noEvents}
          {attendeeEvents}
          {hostEvents}
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
