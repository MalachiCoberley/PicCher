import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, editPost } from '../../actions/post_actions';

class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
    console.log(this.state)
  }

  render() {
    // const { action, formType, post } = this.props;

    // if (!post) return null;
    return (
      // <PostForm
      //   action={action}
      //   formType={formType}
      //   post={post} />
      <div></div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state.entities,
    formType: 'Update Post'
});

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  action: post => dispatch(editPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);