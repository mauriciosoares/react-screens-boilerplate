import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {increment} from 'actions/dashboard';
import Select from './components/select';
import Label from 'shared/components/label';

class Dashboard extends React.Component {
  render() {
    const {counter, increment} = this.props;

    return (
      <div>
        <button onClick={increment}>Increment</button><br />
        <Label text={counter} />
        <Select />
      </div>
    );
  }
}

Dashboard.displayName = 'Dashboard';

function mapStateToProps(state) {
  return state.dashboard;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({increment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
