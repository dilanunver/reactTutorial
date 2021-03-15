import React from 'react';
import ReactDom from 'react-dom';



function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
}
const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg"
    alt=""
  />
)

const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4>
  Amelia Hepworth</h4>

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