import { useState } from "react";
import Student from "../Student/Student";
import "./StudentManagement.css";
import { v4 as uuid4 } from "uuid"
import StudentTable from "../StudentTable/StudentTable";
import AddNewStudent from "../AddNewStudent/AddNewStudent";
//  Server => [  student, student ,...] => [<Student/>, <Student/>, <Student/>] => JSX => UI

const studentMockData = [
  {
    studentName: "Nguyễn Văn A",
    classCode: "12CTin",
    math: 10,
    phy: 8,
    chem: 9,
    id: "fbe60f88-f666-4f58-84bf-f214d5c9a89f"
  },
  {
    studentName: "Lee Chong Wei",
    classCode: "12B",
    math: 5,
    phy: 6,
    chem: 9,
    id: "89540217-711c-4038-9ae4-695cb2f33217"
  },
  {
    studentName: "CR7",
    classCode: "12ABCD",
    math: 5,
    phy: 10,
    chem: 9,
    id:"4b9940cc-1223-4520-8c6a-919c1dd683c9"
  },
  {
    studentName: "Lin Dan",
    classCode: "12A",
    math: 10,
    phy: 7,
    chem: 7,
    id: "0eff298f-6ce7-4bf4-bbb2-a3b659fdda4b"
  },
];

const StudentManagement = () => {
  const [studentList1, setStudentList] = useState(studentMockData);

  // Cách 1
  // Rendering list react element
  // const studentListElements = studentList.map((student) => (
  //   <Student {...student} />
  // ));

  // Thêm mới một học sinh
  const onAddStudentHandler = (student) => {
    // Bài sau: dữ liệu new student được lấy từ form
    // const newStudent = {
    //   studentName: "New Student",
    //   classCode: "Football",
    //   math: 10,
    //   phy: 10,
    //   chem: 10,
    // };
    const newStudent = {
      ...student,
      id: uuid4(),
    }
    setStudentList([...studentList1, newStudent]);
  };

  const deleteStudent = (id) => {
    const listAfterDelete = studentList1.filter(student => student.id !== id);
    setStudentList(listAfterDelete);  
  };
  
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Dự án quản lý học sinh
      </h1>
      <AddNewStudent addNewStudent123={onAddStudentHandler}/>
      <div className="student-controller">
        <button className="btn btn-success">Thêm học sinh mới</button>
        <button className="btn btn-success">Sắp xếp</button>
      </div>
      {/* <div className="student-list">{studentListElements}</div> */}
      <StudentTable studentList2={studentList1}  deleteStudent= { deleteStudent}/>
    </div>
  );
};

export default StudentManagement;

/*
  Props:
    - Được truyền từ component cha -> component con
    - Tham số mặc định của bất kì 1 component
    - READ ONLY (không thể thay đổi)
    - ReactJS => One way data binding 
    (dữ liệu truyền thông prosp => cha -> con)
*/

// Cách 2
// Rendering list react element
// let studentListElements = [];
// for (let i = 0; i < studentList.length; i++) {
//   const { studentName, classCode, math, phy, chem } = studentList[i];
//   studentListElements.push(
//     <Student
//       studentName={studentName}
//       classCode={classCode}
//       math={math}
//       phy={phy}
//       chem={chem}
//     />
//   );
// }

/*
  - Câu hỏi 1: Tại sao khi render 1 list react element cần có unique key
  - Câu hỏi 2: Shallow comparison của React khi cập nhật state  
  - Tìm hiểu trước:
    + Form trong ReactJS
    + Chức năng Delete học sinh
    + Thêm học sinh (với form)
    + Sắp xếp học sinh theo A -> Z
    + Sắp xếp học sinh theo Z -> A
    + Sắp xếp học sinh theo GPA Tăng dần
    + Sắp xếp học sinh theo GPA Giảm dần


*/
