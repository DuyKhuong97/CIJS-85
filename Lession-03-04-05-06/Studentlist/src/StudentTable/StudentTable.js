import Student from '../Student/Student'

const StudentTable = (props) => {
    const { studentList2 ,  deleteStudent} = props;

    const tableBody = studentList2.map((student, index) =>{
        return <Student student={student} order={index}  deleteStudent={ deleteStudent}/>;
        // chưa hiểu đoạn return students này
    })
    return <div className="student-list">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Lớp</th>
                    <th scope="col">Điểm toán</th>
                    <th scope="col">Điểm lý</th>
                    <th scope="col">Điểm hóa</th>
                    <th scope="col">GPA</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>

    </div>

}
export default StudentTable;