import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingComments: true,
      newComment: {
        post_id: this.props.postId,
        user_id: this.props.currentUser,
        comment: ""
      }
    }

    this.updateComment = this.updateComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId).then(() => this.setState({loadingComments: false}))
  }

  updateComment(e) {
    this.setState({newComment: {comment: e.target.value}})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createComment(this.state.newComment)
  }

  render() {
    if (this.state.loadingComments) {
      return <div>Loading</div> 
    } else {
      return (
        <div className='comment-section'>
          <form className='add-comment-section' onSubmit={e => this.handleSubmit(e)}>
            <img src="https://pacdn.500px.org/userpic.png" alt='profile picture'/>
            <input type="text" className='add-comment-input' placeholder="Add a comment" onChange={e => this.updateComment(e)}/>
          </form>
          <h4>Comment Count</h4>
          {console.log(this.props)}
          {console.log(this.state)}
        </div>
      )
    }
  }
}

export default Comment;