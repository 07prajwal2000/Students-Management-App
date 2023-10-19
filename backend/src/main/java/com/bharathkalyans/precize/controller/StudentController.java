package com.bharathkalyans.precize.controller;


import com.bharathkalyans.precize.model.Student;
import com.bharathkalyans.precize.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/")
public class StudentController {

    @Autowired
    private StudentService studentService;


    @GetMapping("/students")
    public ResponseEntity<List<Student>> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/students/rank/{name}")
    public ResponseEntity<?> getRankByName(@PathVariable String name) {
        return studentService.getRankUsingName(name);
    }

    @PostMapping("/students")
    public ResponseEntity<Student> addStudent(@Valid @RequestBody Student student) {
        return studentService.createStudent(student);
    }

    @PutMapping("/students")
    public ResponseEntity<Student> updateStudentScore(@Valid @RequestBody Student student, @RequestParam int score) throws Exception {
        return studentService.updateStudentScore(student, score);
    }

    @DeleteMapping("/students/{name}")
    public ResponseEntity<String> deleteStudentByName(@PathVariable String name) {
        studentService.deleteStudentByName(name);
        return ResponseEntity.ok("Student Deleted");
    }


}
