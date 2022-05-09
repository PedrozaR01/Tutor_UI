USE tutoring;

SELECT t.tutor_id, t.first_name, t.last_name, t.intro, s.subject_title  
FROM tutor as t
INNER JOIN tutor_subject as ts
ON t.tutor_id = ts.tutor_id 
LEFT JOIN subject AS s
ON s.subject_id = ts.subject_id;


