import { connect } from 'react-redux';
import ShowPost from './show_post';
import { fetchPost, deletePost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  formType: 'Update Post'
});

const mapDispatchToProps = dispatch => ({
fetchPost: postId => dispatch(fetchPost(postId)),
deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);