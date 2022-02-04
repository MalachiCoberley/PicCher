import { connect } from 'react-redux';
import Comments from './comments';
import { createComment, fetchComments, deleteComment } from "../../actions/comment_actions"

const mapStateToProps = (state, ownProps) => ({
  entities: {
    comments: state.entities.comments
  },
  postId: parseInt(ownProps.postId),
  currentUser: ownProps.currentUser,
  currentUsername: ownProps.currentUsername
});

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);