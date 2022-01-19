export const editUser = user => (
  $.ajax({
    method: "PATCH",
    url: `api/user/${user.id}`,
    data: {user}
  })
)