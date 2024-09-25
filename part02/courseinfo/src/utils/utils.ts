const sumCoursePartsExercises = (parts: TPart[]) => {
  return parts.reduce((a, b) => a + b.exercises, 0)
}

export { sumCoursePartsExercises }