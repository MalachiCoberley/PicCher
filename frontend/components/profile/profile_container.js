import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
fetchPost: postId => dispatch(fetchPost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);