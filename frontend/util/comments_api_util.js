export const fetchComments = (postId) => (
  $.ajax({
    method: "GET",
    url: `/api/posts/${postId}/comments`,
  })
)

export const createComment = comment => (
  $.ajax({
    method: "POST",
    url: `/api/post/`,
    comment
  })
)

export const deleteComment = comment => (
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${comment.post_id}/comments/${comment.id}`,
  })
)