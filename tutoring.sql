DROP DATABASE IF EXISTS tutoring;
CREATE DATABASE IF NOT EXISTS tutoring;

USE tutoring;

DROP TABLE IF EXISTS student;

CREATE TABLE IF NOT EXISTS student (
    student_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    pass VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    zip_code VARCHAR(255)
);

DROP TABLE IF EXISTS tutor;

CREATE TABLE IF NOT EXISTS tutor(
    tutor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    pass varchar(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    intro varchar(1000),
    tutor_img VARCHaR(500),
    zip_code VARCHAR(255)
);

DROP TABLE IF EXISTS subject;

CREATE TABLE IF NOT EXISTS subject(
	subject_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    subject_title VARCHAR(255),
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES tutor(tutor_id) ON DELETE SET NULL
    );
    
DROP TABLE IF EXISTS student_tutor;

CREATE TABLE IF NOT EXISTS student_tutor(
	tutor_id INT NOT NULL REFERENCES tutor(tutor_id),
    student_id INT NOT NULL	 REFERENCES student(student_id),
    subject_id INT NOT NULL REFERENCES subject(subject_id) 
	);
	
