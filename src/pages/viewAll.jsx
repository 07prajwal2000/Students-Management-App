import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useGlobalStore from "../store/global";
import { Link } from "react-router-dom";
import { DeleteStudent, GetStudents } from "../api/fetcher";

const ViewAll = () => {
	const { setActivePage, students, setStudents } = useGlobalStore();

	useEffect(() => {
		setActivePage("viewall");
		getStudents();
	}, []);

	async function getStudents() {
		try {
			const response = await GetStudents();
			setStudents(response);
		} catch (error) {
			console.log(error);
		}
	}

  async function onDelete(name) {
    if (!confirm("Are you sure want to delete the student with name: " + name)) return;
    // actual delete logic
		await DeleteStudent(name);
		window.location.reload();
  }

	return (
		<div className="container">
			<Navbar />
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Address</th>
						<th scope="col">City</th>
						<th scope="col">Country</th>
						<th scope="col">Pincode</th>
						<th scope="col">SAT Score</th>
						<th scope="col">Passed</th>
					</tr>
				</thead>
				<tbody>
					{students.map((s) => (
						<tr key={s.id}>
							<td>{s.name}</td>
							<td>{s.address}</td>
							<td>{s.city}</td>
							<td>{s.country}</td>
							<td>{s.pincode}</td>
							<td>{s.sat_score}</td>
							<td>{s.passed ? "✅" : "🟥"}</td>
							<td className="btn btn-outline-primary">
								<Link to={"/student?id=" + s.id}>
									<img width="22px" src="/edit.png" alt="" />
								</Link>
							</td>
							<td onClick={() => onDelete(s.name)} className="btn btn-outline-danger">
								<img width="22px" src="/delete.png" alt="" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ViewAll;
