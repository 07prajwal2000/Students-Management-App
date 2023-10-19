import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LoadingOverlay from "../components/LoadingOverlay";
import useGlobalStore from "../store/global";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CreateStudent, UpdateStudent } from "../api/fetcher";

const Student = () => {
	const [params] = useSearchParams();
	const [loading, setLoading] = useState(false);
	const nav = useNavigate();
	const [student, setStudent] = useState({
		name: "",
		address: "",
		city: "",
		country: "",
		pincode: "",
		sat: 400,
		passed: "",
	});
	const { setActivePage, setEditing, students, editing } = useGlobalStore();

	useEffect(() => {
		setActivePage("student");
		const studentId = params.get("id");
		setEditing(studentId != null);

		if (studentId) {
			const s = students.filter((x) => x.id == studentId);
			if (s.length) {
				setStudent(s[0]);
			}
		}

		return () => setEditing(false);
	}, []);

	async function onSubmit() {
		try {
			if (editing) {
				await UpdateStudent(student);
			} else {
				await CreateStudent(student);
			}
		} catch (error) {
			console.log(error);
			editing
				? alert("Failed to update student")
				: alert("Failed to create student");
		} finally {
			nav("/viewall");
		}
	}

	return (
		<div className="container">
			<Navbar />
			<h3 className="text-center">Student form</h3>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="position-relative w-75 d-flex flex-column gap-2 border p-4 rounded-2 mx-auto"
				action=""
			>
				<LoadingOverlay loading={loading} />
				<div>
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						disabled={editing}
						onChange={(e) =>
							setStudent((s) => ({
								...s,
								name: e.target.value,
							}))
						}
						type="text"
						id="name"
						value={student.name}
						className="form-control"
					/>
				</div>
				<div>
					<label htmlFor="address" className="form-label">
						Address
					</label>
					<input
						disabled={editing}
						onChange={(e) =>
							setStudent((s) => ({
								...s,
								address: e.target.value,
							}))
						}
						type="text"
						id="address"
						value={student.address}
						className="form-control"
					/>
				</div>
				<div>
					<label htmlFor="city" className="form-label">
						City
					</label>
					<input
						disabled={editing}
						onChange={(e) =>
							setStudent((s) => ({
								...s,
								city: e.target.value,
							}))
						}
						type="text"
						id="city"
						className="form-control"
						value={student.city}
					/>
				</div>
				<div>
					<label htmlFor="country" className="form-label">
						Country
					</label>
					<input
						disabled={editing}
						type="text"
						id="country"
						className="form-control"
						value={student.country}
						onChange={(e) =>
							setStudent((s) => ({
								...s,
								country: e.target.value,
							}))
						}
					/>
				</div>
				<div>
					<label htmlFor="pincode" className="form-label">
						Pincode
					</label>
					<input
						disabled={editing}
						type="text"
						id="pincode"
						className="form-control"
						value={student.pincode}
						onChange={(e) =>
							setStudent((s) => ({
								...s,
								pincode: e.target.value,
							}))
						}
					/>
				</div>
				<div>
					<label htmlFor="sat" className="form-label">
						SAT Score
					</label>
					<input
						type="number"
						min={400}
						max={1600}
						onChange={(e) =>
							setStudent((s) => ({
								...s,
								sat_score: e.target.value,
							}))
						}
						id="sat"
						className="form-control"
						value={student.sat_score}
					/>
				</div>
				<button onClick={onSubmit} className="btn btn-primary mt-2">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Student;
