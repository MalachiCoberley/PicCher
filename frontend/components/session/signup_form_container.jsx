import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up'
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);
