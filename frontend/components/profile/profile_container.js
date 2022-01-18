import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPosts, deletePost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => ({
  entities: {
    user: state.entities.users[ownProps.match.params.userId],
    posts: state.entities.posts
  }
});

const mapDispatchToProps = dispatch => ({
fetchPosts: () => dispatch(fetchPosts()),
deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);