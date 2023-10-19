import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useGlobalStore from "../store/global";
import { GetStudentRank } from "../api/fetcher";

const FindRank = () => {
	const [name, setName] = useState("");
  const [rank, setRank] = useState(-1);
  const {setActivePage} = useGlobalStore();

  useEffect(() => {
    setActivePage('rank');
  }, []);
  
  async function findRankClick() {
		// if (!name || !name.trim()) return;

    try {
			const r = await GetStudentRank(name);
			setRank(r);
		} catch (error) {
			alert("Failed to get the rank of student " + name);
			console.log(error);
		}
  }
  
	return (
		<div className="container">
			<Navbar />
			<div>
				<div className="d-flex w-75 mx-auto justify-content-center gap-4 align-items-center">
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="form-control "
						placeholder="Enter your name"
					/>
					<button onClick={findRankClick} className="btn btn-primary px-5">Find</button>
				</div>
        {rank > 0 && <h2 className="text-center my-4">Your Rank: {rank}</h2>}
			</div>
		</div>
	);
};

export default FindRank;
