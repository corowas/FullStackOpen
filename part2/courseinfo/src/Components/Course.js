import React from 'react'

const Header = ({name}) => {
    return (
    <h1>{name}</h1>
    )
}
const Content = ({parts}) => {
    const partElements = parts.map(e => { return <Part key={e.id} parts={e} /> } )
      
        return (
            <ul>
                {partElements}
            </ul>
        )
}
const Part = (props) => {
      console.log(props)
      return (
        <div>
          <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
      )
    }
    const Total = (props) => {
        console.log(props)
        const sumTotal = props.parts.reduce((sum, current) => sum + current.exercises, 0)
        return (
            <div>
                <p>
                   There are {sumTotal} total exercises! You got this!
                </p>
            </div>
        )
    }


const Course = ({course}) => {
    return(
        
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}


export default Course
