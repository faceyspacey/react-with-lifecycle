import React from 'react';

function cb(f) {
  return f
    ? function(...args) {
        return f.call(this, ...args, this.props, this.state);
      }
    : undefined;
}


export default const WithLifecycle lifecycle => StatelessComponent => {
	const classProperties = {
		displayName: `WithLifecycle(${ComponentClass.displayName})`,

		componentWillMount: cb(lifecycle.componentWillMount),
		componentDidMount: cb(lifecycle.componentDidMount),
		componentWillReceiveProps: cb(lifecycle.componentWillReceiveProps),
		shouldComponentUpdate: cb(lifecycle.shouldComponentUpdate),
		componentWillUpdate: cb(lifecycle.componentWillUpdate),
		componentDidUpdate: cb(lifecycle.componentDidUpdate),
		componentWillUnmount: cb(lifecycle.componentWillUnmount),

		render() {
			return StatelessComponent(this.props);
		}
	};
	return React.createClass(classProperties);
}

