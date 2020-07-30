export const getBooksFromLocalStorage = () => {
  const data = localStorage.getItem('books')
  return data ? JSON.parse(data) : []
}

export const deleteBookFromLocalStorage = (id) => {
  let data = getBooksFromLocalStorage();
  data = data.filter(book => book.id !== id)
  setDataToLocalStorage(data)
  return data
}

export const getBookfromLocalStorage = (id) => {
  let data = getBooksFromLocalStorage();
  return data.find(book => book.id === +id)
}

export const updateBookFromLocalStorage = (book) => {
  let data = getBooksFromLocalStorage();
  const index = data.findIndex((b) => b.id === book.id)
  data[index] = book
  setDataToLocalStorage(data)
}

export const addNewBookFromLocalStorage = (book) => {
  const data = getBooksFromLocalStorage()
  data.push(book)
  setDataToLocalStorage(data)
}

const setDataToLocalStorage = (data) => {
  localStorage.setItem('books', JSON.stringify(data))
}