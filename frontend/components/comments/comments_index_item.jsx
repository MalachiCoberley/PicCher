import React from "react";


export function CommentsIndexItem(props) {
  const handleDelete = () => {
    let deletedComment = {
      id: props.comment.id,
      post_id: props.comment.postId,
      user_id: props.comment.currentUser,
      comment: props.comment.comment
    }
    props.deleteComment(deletedComment)
  }

  return (
    <div className='comment-container'>
      <img src="https://pacdn.500px.org/userpic.png" alt='comment-profile picture'/>
        <div className='comment-contents'>
          {props.comment.username ? <h3>{props.comment.username}</h3> : <h3>{props.currentUsername}</h3>}
          <p>{props.comment.comment}</p>
        {
          typeof(props.comment.username) == "undefined" || props.comment.username === props.currentUsername
          ? <button className="comment-button" onClick={() => handleDelete()}>Delete</button>
          : <></>
        }
        </div>
    </div>
  )
}