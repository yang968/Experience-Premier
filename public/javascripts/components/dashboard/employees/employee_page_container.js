import EmployeePage from './employee_page';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/employee_actions';

const mapStateToProps = ({ entities }) => {
  return ({
    employee: entities.employees,
    tasks: entities.tasks
  })
};

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeePage);