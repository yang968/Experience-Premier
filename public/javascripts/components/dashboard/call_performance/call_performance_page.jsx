import React from 'react';

class CallPerformancePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    console.log(this.props);
		return (
			<div>
        <h1>Mark's performance page</h1>
      </div>
		);
	}
}

export default CallPerformancePage;