import { create } from "zustand";

const students = [
  {
      "id": 10,
      "name": "Bharath Kalyan",
      "address": "Tumkur",
      "city": "Tumkur",
      "country": "India",
      "pincode": 572104,
      "sat_score": 890,
      "passed": true
  },
  {
      "id": 13,
      "name": "Prajwal",
      "address": "Tumkur",
      "city": "Tumkur",
      "country": "India",
      "pincode": 572104,
      "sat_score": 1090,
      "passed": true
  },
  {
      "id": 14,
      "name": "Ananth",
      "address": "Tumkur",
      "city": "Tumkur",
      "country": "India",
      "pincode": 572104,
      "sat_score": 1090,
      "passed": true
  },
  {
      "id": 15,
      "name": "Ram",
      "address": "Tumkur",
      "city": "Tumkur",
      "country": "India",
      "pincode": 572104,
      "sat_score": 100,
      "passed": false
  },
  {
      "id": 16,
      "name": "Rafik",
      "address": "Tumkur",
      "city": "Tumkur",
      "country": "India",
      "pincode": 572104,
      "sat_score": 100,
      "passed": false
  }
]

const useGlobalStore = create((set, get) => ({
  students: students,
  setStudents: function(students) {
    set((s) => ({...s, students}));
  },
  activePage: 'add',
  setActivePage: (page) => {
    set((s) => ({...s, activePage: page}));
  },
  editing: false,
  setEditing: (editing) => {
    set((s) => ({...s, editing}));
  },
}));

export default useGlobalStore;