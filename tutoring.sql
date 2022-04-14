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
    course_id VARCHAR(255),
    zip_code VARCHAR(255)
);

DROP TABLE IF EXISTS tutor;

CREATE TABLE IF NOT EXISTS tutor(
    tutor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    pass varchar(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    course_id VARCHAR(255),
    zip_code VARCHAR(255)
   
);
