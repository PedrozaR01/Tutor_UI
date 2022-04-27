SELECT tutor.tutor_id, first_name, last_name, intro, subject_title 
FROM tutor 
INNER JOIN subject 
ON tutor.tutor_id = subject.tutor_id 
WHERE subject_title LIKE "%beat%";
