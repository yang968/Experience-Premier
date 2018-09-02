import { connect } from 'react-redux';
import CallPerformancePage from './call_performance_page';
import { DATA } from '../../../chart/chart_constants';

const mapStateToProps = ({ session }) => ({
  stats: DATA
});

export default connect( mapStateToProps, null )(CallPerformancePage);