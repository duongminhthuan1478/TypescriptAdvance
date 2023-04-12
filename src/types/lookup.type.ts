type Artical = {
  author: {
    name: string,
    email: string,
  }
  content: {
    title: string,
    date: Date,
  }
}

// Lookup type
type Author = Artical['author'];

function getAuthor(): Author {
  return {
    name: 'Duong Minh Thuan',
    email: 'duongminhthuan1478@gmail.com'
  }
}