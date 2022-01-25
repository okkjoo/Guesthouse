// export const getLists = value => {
//   return fetch(`/api/getLists?value=${value}`).then(res =>
//     res.json().catch(err => {
//       console.error(err)
//     }),
//   )
// }
export const getLists = value => {
  return fetch(`/api/getListsAsync?value=${value}`).then(res =>
    res.json().catch(err => {
      console.error(err)
    }),
  )
}
