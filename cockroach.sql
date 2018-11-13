CREATE TABLE apartment (
	id int PRIMARY KEY,
	price int NOT NULL,
  max int NOT NULL,
  minStay int NOT NULL,
  stars dec(4,2) NOT NULL,
  numRatings int NOT NULL,
);
  CSV DATA ('./apartment.csv')
        WITH skip = '1';



IMPORT TABLE apartment (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  price int,
  max int,
  minStay int,
  stars int,
  numRatings int,
)
CSV DATA ('./apartment.csv')
  WITH
    skip='1'
;