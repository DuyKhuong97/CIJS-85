import "./Student.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Student = (props) => {
  const { student, order, deleteStudent } = props;
  const { studentName, classCode, math, phy, chem, id } = student || {};
  const gpa = ((+math + +phy + +chem) / 3).toFixed(1);
  return (
    <tr>
      <th scope="row">{order + 1} </th>
      <td>{studentName}</td>
      <td>{classCode}</td>
      <td>{math}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td>{gpa}</td>
      <td>
        <div className="d-flex aligh-items-center">
         <button onClick={() => deleteStudent(id)} style={{border: "none", background:"none"}}><FontAwesomeIcon icon={faDeleteLeft} style={{ color: '#ff0000' }} /></button>
        </div>
      </td>
    </tr>
  );
};

export default Student;
