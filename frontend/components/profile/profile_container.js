import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { editUser, getUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
  entities: {
    user: state.entities.users[ownProps.match.params.userId],
    posts: state.entities.posts
  },
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  editUser: user => dispatch(editUser(user)),
  getUser: userId => dispatch(getUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);