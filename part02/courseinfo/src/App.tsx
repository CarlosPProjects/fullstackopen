import Course from "./components/Course"
import courses from "./data/courses"

function App() {

  return (
    <Course courses={courses} />
  )
}

export default App
