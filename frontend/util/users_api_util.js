export const editUser = user => (
  $.ajax({
    method: "PATCH",
    url: `api/user/${user.id}`,
    data: {user}
  })
)

export const getUser = userId => (
  $.ajax({
    method: "GET",
    url: `api/user/${userId}`
  })
)