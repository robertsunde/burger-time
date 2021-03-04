CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE `burgers` (
`id` int auto_increment PRIMARY KEY,
`burger_name` varchar(50) NOT NULL,
`devoured` BOOLEAN NOT NULL);