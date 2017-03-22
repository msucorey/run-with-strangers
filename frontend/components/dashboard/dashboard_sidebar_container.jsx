import { connect } from 'react-redux';
import DashboardSidebar from './dashboard_sidebar';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardSidebar);
