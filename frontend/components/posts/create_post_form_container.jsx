import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';


const mSTP = session => ({
  post: {
    title: '',
    description: '',
    location: '',
    date_taken: '',
    photoFile: null,
    photoUrl: null,
    author_id: 9
  },
  formType: 'Create Post',
  session
});

const mDTP = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(PostForm);