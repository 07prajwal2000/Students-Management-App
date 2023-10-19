import axios from "axios";

const domain = `http://3499e84713125de5b0700cc2d46d39b4.serveo.net`;

/**
 *
 * @returns {Promise<Array<{id: number,name: string, address: string,"city": string,"country": string,"pincode": number,"sat_score": number,"passed": boolean}>>}
 */
export async function GetStudents() {
	const response = await axios.get(`${domain}/api/v1/students`);
	return response.data;
}

export async function UpdateStudent(student) {

  await axios.put(`${domain}/api/v1/students?score=${student.sat_score}`, student, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function DeleteStudent(name) {
  await axios.delete(`${domain}/api/v1/students/${name}`);
}


export async function GetStudentRank(name) {
  const response = await axios.get(`${domain}/api/v1/students/rank/${name}`);
  return response.data;
}

export async function CreateStudent(student) {
  await axios.post(`${domain}/api/v1/students`, student);
}