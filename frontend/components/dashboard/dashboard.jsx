import React from 'react';
import { Link, withRouter } from 'react-router';
import DashboardSidebarContainer from './dashboard_sidebar_container';
import AttendeeEventsContainer from './dashboard_sidebar_container';
import HostEventsContainer from './dashboard_sidebar_container';
import NoEvents from './no_events';

const Dashboard = () => (
  <div> -dashboard-
    <DashboardSidebarContainer />
    <div>
      <NoEvents />
      <AttendeeEventsContainer />
      <HostEventsContainer />
    </div>
  </div>
);

export default withRouter(Dashboard);
