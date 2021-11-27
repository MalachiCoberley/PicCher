import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log In'
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    loginDemo: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);
