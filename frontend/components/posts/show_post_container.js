import { connect } from 'react-redux';
import ShowPost from './show_post';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { createFollow, getFollows } from '../../actions/follow_actions';
import { getUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  loading: true,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
fetchPost: postId => dispatch(fetchPost(postId)),
deletePost: postId => dispatch(deletePost(postId)),
getUser: userId => dispatch(getUser(userId)),
createFollow: follow => dispatch(createFollow(follow)),
getFollows: userId => dispatch(getFollows(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);