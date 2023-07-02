// const Hello = (props) => {
//   console.log(props)
//   return (
//    <div>
//     <p>
//       Hello {props.name}, you are {props.age} years old
//       </p>
//    </div>
//   )
// }
// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href='https://github.com/mluukai'>mluukkai</a>
//     </div>
//   )
// }
const App = () => {
  const friends = [
    {name: 'Peter', age: 4 },
    {name: 'Janet', age: 82 },
  ]


  return (
    <div>
     <p>this is my friend {friends[0].name} he is {friends[0].age} years old</p>
     <p>{friends[1].name} {friends[1].age}</p>

    </div>
  )
}

export default App;
