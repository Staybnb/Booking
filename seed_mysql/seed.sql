LOAD DATA LOCAL INFILE  
'./sample.csv'
INTO TABLE apartment  
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
(field_1,field_2 , field_3);

-- LOAD DATA LOCAL INFILE  
-- './sample.csv'
-- INTO TABLE listing  
-- FIELDS TERMINATED BY ',' 
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- (field_1,field_2 , field_3);