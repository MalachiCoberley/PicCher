import React from 'react';
import {CommentsIndexItem} from './comments_index_item'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingComments: true,
      comment: ""
    }

    this.updateComment = this.updateComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId).then(() => this.setState({loadingComments: false}))
  }

  updateComment(e) {
    this.setState({comment: e.target.value})
  }

  handleSubmit(e) {
    let newComment = {
      post_id: this.props.postId,
      user_id: this.props.currentUser,
      comment: this.state.comment
    }
    e.preventDefault()
    let commentBar = document.getElementById("comment-input")
    this.props.createComment(newComment).then(() => commentBar.value = "")
  }

  render() {
    if (this.state.loadingComments) {
      return <div>Loading</div> 
    } else {
      let {comments} = this.props.entities
      return (
        <div className='comment-section'>
          <form className='add-comment-section' onSubmit={e => this.handleSubmit(e)}>
            <img src="https://pacdn.500px.org/userpic.png" alt='profile picture'/>
            <input id="comment-input" type="text" className='add-comment-input' placeholder="Add a comment" onChange={e => this.updateComment(e)}/>
          </form>
          <h4>{Object.keys(comments).length} Comment</h4>
          <div className='comment-index'>
          {
            Object.values(comments).map(comment => (
            <CommentsIndexItem
            deleteComment={this.props.deleteComment}
            currentUsername={this.props.currentUsername}
            comment={comment}
            key={comment.id}
            />
            ))
          }
          </div>
        </div>
      )
    }
  }
}

export default Comment;