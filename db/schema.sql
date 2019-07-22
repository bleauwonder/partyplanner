CREATE DATABASE partyplannerDB;

USE partyplannerDB;

CREATE TABLE plan (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(255) NOT NULL,
  completed BOOLEAN,
  PRIMARY KEY (id)
);