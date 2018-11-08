
DROP DATABASE IF EXISTS booking;

CREATE DATABASE booking;

USE booking;

CREATE TABLE apartment (

	id int NOT NULL AUTO_INCREMENT,
	price int NOT NULL,
    max int NOT NULL,
    minStay int NOT NULL,
    stars dec(4,2) NOT NULL,
    numRatings int NOT NULL,
	PRIMARY KEY (id)

);

CREATE TABLE dates (

	id int NOT NULL AUTO_INCREMENT,
	date varchar (20) NOT NULL,
	apartment_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (apartment_id)
		REFERENCES apartment (id)

);

INSERT INTO apartment (price, minStay, stars, numRatings, max)
VALUES
("40", "2", "4.83", "78", "4"),
("55", "2", "4.5", "23", "3"),
("90", "3", "4.95", "125", "5"),
("30", "1", "4.63", "80", "2"),
("65", "2", "4.9", "90", "3"),
("74", "3", "2.1", "287", "3"),
("70", "2", "4.75", "189", "4"),
("65", "1", "4.1", "77", "3"),
("30", "0", "3.9", "124", "4"),
("120", "2", "4.98", "86", "1");             

INSERT INTO dates (date, apartment_id)
VALUES
("11/1/2018", (SELECT id from apartment WHERE id = "1")),
("11/22/2018", (SELECT id from apartment WHERE id = "2")),
("11/14/2018", (SELECT id from apartment WHERE id = "1")),
("11/2/2018", (SELECT id from apartment WHERE id = "2")),
("11/13/2018", (SELECT id from apartment WHERE id = "3")),
("11/10/2018", (SELECT id from apartment WHERE id = "2")),
("11/27/2018", (SELECT id from apartment WHERE id = "3")),
("11/20/2018", (SELECT id from apartment WHERE id = "1")),
("11/7/2018", (SELECT id from apartment WHERE id = "2")),
("11/20/2018", (SELECT id from apartment WHERE id = "4")),
("11/16/2018", (SELECT id from apartment WHERE id = "5")),
("11/24/2018", (SELECT id from apartment WHERE id = "1")),
("11/18/2018", (SELECT id from apartment WHERE id = "2")),
("11/6/2018", (SELECT id from apartment WHERE id = "6")),
("11/23/2018", (SELECT id from apartment WHERE id = "7")),
("11/1/2018", (SELECT id from apartment WHERE id = "6")),
("11/2/2018", (SELECT id from apartment WHERE id = "5")),
("11/1/2018", (SELECT id from apartment WHERE id = "4")),
("11/19/2018", (SELECT id from apartment WHERE id = "3")),
("11/12/2018", (SELECT id from apartment WHERE id = "2")),
("11/23/2018", (SELECT id from apartment WHERE id = "4")),
("11/29/2018", (SELECT id from apartment WHERE id = "5")),
("11/23/2018", (SELECT id from apartment WHERE id = "7")),
("11/2/2018", (SELECT id from apartment WHERE id = "9")),
("11/28/2018", (SELECT id from apartment WHERE id = "8")),
("11/12/2018", (SELECT id from apartment WHERE id = "7")),
("11/21/2018", (SELECT id from apartment WHERE id = "6")),
("11/22/2018", (SELECT id from apartment WHERE id = "5")),
("11/25/2018", (SELECT id from apartment WHERE id = "4")),
("11/1/2018", (SELECT id from apartment WHERE id = "3")),
("11/11/2018", (SELECT id from apartment WHERE id = "2")),
("11/24/2018", (SELECT id from apartment WHERE id = "1")),
("11/6/2018", (SELECT id from apartment WHERE id = "4")),
("11/14/2018", (SELECT id from apartment WHERE id = "2")),
("11/9/2018", (SELECT id from apartment WHERE id = "3")),
("11/20/2018", (SELECT id from apartment WHERE id = "4")),
("11/8/2018", (SELECT id from apartment WHERE id = "5")),
("11/19/2018", (SELECT id from apartment WHERE id = "6")),
("11/22/2018", (SELECT id from apartment WHERE id = "7")),
("11/7/2018", (SELECT id from apartment WHERE id = "8")),
("11/9/2018", (SELECT id from apartment WHERE id = "9")),
("11/11/2018", (SELECT id from apartment WHERE id = "1")),
("11/17/2018", (SELECT id from apartment WHERE id = "8")),
("11/25/2018", (SELECT id from apartment WHERE id = "7")),
("11/18/2018", (SELECT id from apartment WHERE id = "6")),
("11/21/2018", (SELECT id from apartment WHERE id = "5")),
("11/14/2018", (SELECT id from apartment WHERE id = "4")),
("11/8/2018", (SELECT id from apartment WHERE id = "3")),
("11/12/2018", (SELECT id from apartment WHERE id = "2")),
("11/18/2018", (SELECT id from apartment WHERE id = "2")),
("11/1/2018", (SELECT id from apartment WHERE id = "3")),
("11/19/2018", (SELECT id from apartment WHERE id = "5")),
("11/10/2018", (SELECT id from apartment WHERE id = "4"))