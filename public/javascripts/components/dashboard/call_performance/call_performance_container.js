import { connect } from 'react-redux';
import CallPerformancePage from './call_performance_page';

const mapStateToProps = ({ session }) => ({
  employees: session.currentUser.subordinates  
});

export default connect( mapStateToProps, null )(CallPerformancePage);