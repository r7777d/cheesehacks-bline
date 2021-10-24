DROP DATABASE IF EXISTS `datadb` ;
CREATE DATABASE `datadb` ;
CREATE SCHEMA IF NOT EXISTS `datadb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `datadb` ;




CREATE TABLE IF NOT EXISTS `users` 
(
  `id`                    INT NOT NULL AUTO_INCREMENT,
  `user`                  VarChar(100),
  `pwd`                   VarChar(100),
  `email`                 VarChar(100),
  `role`                  INT,
 PRIMARY KEY 
  (
      `id` ,
      `user`
  )
);



INSERT INTO `users` (`user`, `pwd`,`email` , `role`) VALUES
('ritwick','abc','a@b.com',0),
('rit','def','ab@b.com',0),
('wick','fgh','ac@b.com',0),
('abc','abdf','adf@b.com',0);
('new','user','email.com',0);



