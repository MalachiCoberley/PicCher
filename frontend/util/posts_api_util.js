export const fetchPosts = (posts) => (
  $.ajax({
    method: "GET",
    url: "/api/posts",
  })
)

export const fetchPost = id => (
  $.ajax({
    method: "GET",
    url: `/api/post/${id}`,
    post
  })
)

export const createPost = post => (
  $.ajax({
    method: "POST",
    url: `/api/post/`,
    post
  })
)

export const editPost = post => (
  $.ajax({
    method: "PATCH",
    url: `/api/post/${post.id}`,
    post
  })
)

export const deletePost = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${id}`,
  })
)

export const searchPosts = search => (
  $.ajax({
    method: "GET",
    url: `/api/search`,
    data: {search: search}
  })
)