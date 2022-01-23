export const getFollows = () => (
  $.ajax({
    method: "GET",
    url: "follows",
  })
)

export const unfollowUser = followId => (
  $.ajax({
    method: "DELETE",
    url: `follows/${followId}`
  })
)

export const followUser = follow => (
  $.ajax({
    method: "POST",
    url: `follows`,
    data: {follow}
  })
)