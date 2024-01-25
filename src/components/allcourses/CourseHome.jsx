import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <div style={{ height: "50px" }}></div>
      <CoursesCard />
      <OnlineCourses />
      <br/>
      <br/>
      <div style={{ height: "50px" }}></div>
    </>
  )
}

export default CourseHome
