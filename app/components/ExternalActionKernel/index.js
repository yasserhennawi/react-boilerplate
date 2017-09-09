import { Component } from 'react';
import { connect } from 'react-redux';

import { switchText } from './actions';

class ExternalActionKernel extends Component {
  componentDidMount() {
    window.triggerExternalAction = (action, payload) => this.props[action](payload);
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = { switchText };
export default connect(null, mapDispatchToProps)(ExternalActionKernel);
