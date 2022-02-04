import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { editUser, getUser } from '../../actions/user_actions';
import { createFollow, deleteFollow, getFollows } from '../../actions/follow_actions';


const mapStateToProps = (state, ownProps) => ({
  entities: {
    user: state.entities.users[ownProps.match.params.userId],
    posts: state.entities.posts,
    follows: state.entities.follows
  },
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  editUser: user => dispatch(editUser(user)),
  getUser: userId => dispatch(getUser(userId)),
  createFollow: follow => dispatch(createFollow(follow)),
  getFollows: userId => dispatch(getFollows(userId)),
  deleteFollow: followId => dispatch(deleteFollow(followId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);