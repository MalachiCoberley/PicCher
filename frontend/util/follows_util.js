export const getFollows = userId => (
  $.ajax({
    method: "GET",
    url: `api/user/${userId}/follows`,
    data: {userId}
  })
)

export const unfollowUser = followId => (
  $.ajax({
    method: "DELETE",
    url: `follows/${followId}`
  })
)

export const followUser = (follow) => {
  return (
  $.ajax({
    method: "POST",
    url: `follows`,
    data: {follow}
  })
)}