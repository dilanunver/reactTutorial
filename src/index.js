import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'

// setup vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back'
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
    author: 'Shannon Olsen ',
    title: 'Our Class is a Family'
  },
  {
    img: "data:image/webp;base64,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",
    author: 'Lisa Tawn Bergren ',
    title: 'God Gave Us You'
  },
];


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {

        return <Book book={book}></Book>
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props)
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img}
        alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}


// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// function Greeting() {
//   return (

//     <div>
//       <h3>Hello people</h3>
//       <ul>
//         <li>
//           <a href="#">hello world</a>
//         </li>
//         <img src='' alt=''></img>
//       </ul>
//     </div>

//   );
// }

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
// }


// Nested Components, React Tools

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Name />
//     </div>
//   )
// }
// const Person = () => <h1>Hello world</h1>;
// const Name = () => {
//   return <p> John Doe</p>
// }


ReactDom.render(<BookList />, document.getElementById('root'))