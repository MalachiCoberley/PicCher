import { connect } from 'react-redux';
import { searchPosts, deletePost } from '../../actions/post_actions';
import SearchResults from './search_results';


const mapStateToProps = (state, ownProps) => ({
  entities: {
    posts: state.entities.posts,
    follows: state.entities.follows
  },
  session: state.session,
  search: ownProps.match.params.searchQuery
});

const mapDispatchToProps = dispatch => ({
  searchPosts: search => dispatch(searchPosts(search)),
  deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);