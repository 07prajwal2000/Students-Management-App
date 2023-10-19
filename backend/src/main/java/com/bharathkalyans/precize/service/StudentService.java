package com.bharathkalyans.precize.service;

import com.bharathkalyans.precize.model.Student;
import com.bharathkalyans.precize.repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StudentService {


    @Autowired
    private StudentRepository studentRepository;

    public ResponseEntity<List<Student>> getAllStudents() {
        return ResponseEntity.ok(studentRepository.findAll());
    }

    public ResponseEntity<Student> updateStudentScore(Student student, int score) throws Exception {
        Student updateStudent = studentRepository.findByName(student.getName());

        if (updateStudent == null) {
            return null;
//            student.setSat_score(score);
//            createStudent(student);
//            return ResponseEntity.ok(student);
        }
        updateStudent.setPassed(((double) score / 1400) > 0.3);
        updateStudent.setSat_score(score);
        return ResponseEntity.ok(studentRepository.save(updateStudent));
    }

    public void deleteStudentByName(String name) {
        System.out.println(name);
        studentRepository.deleteByName(name);
    }

    public ResponseEntity<?> getRankUsingName(String name) {
        Optional<Integer> rankOfStudent = studentRepository.getRankOfStudent(name);
        if (rankOfStudent.isPresent()) {
            return ResponseEntity.ok(rankOfStudent.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Rank not found for " + name);
        }

    }

    public ResponseEntity<Student> createStudent(Student student) {
        int marks = student.getSat_score();
        student.setPassed(((double) marks / 1400) > 0.3);
        studentRepository.save(student);
        return ResponseEntity.ok(student);
    }
}
