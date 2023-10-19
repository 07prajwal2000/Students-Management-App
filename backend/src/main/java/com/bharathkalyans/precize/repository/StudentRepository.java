package com.bharathkalyans.precize.repository;

import com.bharathkalyans.precize.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    void deleteByName(String name);

    Student findByName(String name);

    @Query(nativeQuery = true, value = "SELECT rank_number FROM ( SELECT *, RANK() OVER (ORDER BY sat_score) rank_number FROM student) s WHERE name=?1 ")
    Optional<Integer> getRankOfStudent(String name);

}
