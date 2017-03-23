import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
