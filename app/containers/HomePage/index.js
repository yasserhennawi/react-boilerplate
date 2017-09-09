/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { connect } from 'react-redux';

import messages from './messages';
import selectors from './selectors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Button = styled.div`
  border: 1px solid #EEE;
  padding: 5px 10px;
`;
const getText = (textNum) => {
  switch (textNum) {
    case 'one':
      return <FormattedMessage {...messages.header1} />;
    case 'two':
      return <FormattedMessage {...messages.header2} />;
    case 'three':
      return <FormattedMessage {...messages.header3} />;
    default:
      return <FormattedMessage {...messages.header0} />;
  }
};

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Wrapper>
        {getText(this.props.switchText)}
        <Button onClick={() => window.triggerExternalAction('switchText', 'one')}>
          click me to switch to text one
        </Button>
        <Button onClick={() => window.triggerExternalAction('switchText', 'two')}>
          click me to switch to text two
        </Button>
        <Button onClick={() => window.triggerExternalAction('switchText', 'three')}>
          click me to switch to text three
        </Button>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  switchText: PropTypes.string,
};

const mapStateToProps = selectors();

export default connect(mapStateToProps, null)(HomePage);
