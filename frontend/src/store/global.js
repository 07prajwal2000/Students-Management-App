import { create } from "zustand";


const useGlobalStore = create((set, get) => ({
  students: [],
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