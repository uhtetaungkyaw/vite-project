import React from "react";

// arr=[a,b,c]
const studentList = [
  {
    id: 1,
    name: "Aung",
    grade: "A",
  },
  {
    id: 2,
    name: "BoBo",
    grade: "A",
  },
  {
    id: 3,
    name: "Aye Aye",
    grade: "C",
  },
  {
    id: 4,
    name: "Mg Mg",
    grade: "B",
  },
];
const StudentList = () => {
  return (
    <div>
      <h2>StudentList</h2>
      <div className="students">
        {studentList.map((student) => (
          <div className="student" key={student.id}>
            <h3>Student Name: {student.name}</h3>
            <p>Student Grade: {student.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
