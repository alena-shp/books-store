export default class bookService {
  data = [
    {
      id: "1",
      title: "Flowers for Algernon",
      author: "Daniel Keyes",
      price: 24,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/41gvkhScVBL._SX315_BO1,204,203,200_.jpg"
    },
    {
      id: "2",
      title: "Dandelion Wine",
      author: "Ray Bradbury",
      price: 30,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51LVKTpT0bL._SY346_.jpg"
    }
  ]
  getBooks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }
}
