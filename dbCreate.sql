CREATE DATABASE IF NOT EXISTS company;
USE company;

DROP TABLE iF EXISTS tblEmployees;
DROP TABLE iF EXISTS tblDepartments;

CREATE TABLE tblDepartments(
	dpID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	dpName VARCHAR(40)
);

CREATE TABLE tblEmployees(
	empID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	empName VARCHAR(40),
	empActive BOOLEAN,
	emp_dpID  INT,
	INDEX dep_ind (emp_dpID),
	FOREIGN KEY (emp_dpID) 
        REFERENCES tblDepartments(dpID)
        ON DELETE CASCADE 
);


INSERT INTO tblDepartments (dpName) VALUES ('Lviv Department');
INSERT INTO tblDepartments (dpName) VALUES ('Ivano-Frankivsk Department');
INSERT INTO tblDepartments (dpName) VALUES ('Lutsk Department');

INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Oleg Semyanchuk', 1, 2);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Igor Bodlak', 0, 3);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Lesya Karceva', 1, 1);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Andriy Semyanchuk', 1, 2);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Jack Bodlak', 0, 3);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('John Karceva', 1, 1);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Drake Semyanchuk', 1, 2);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Norimyxxxo Bodlak', 0, 3);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('50 Cent', 1, 1);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Slim Shady', 1, 2);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Eminem', 0, 3);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Buzz', 1, 1);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('DeadPool', 1, 2);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Pegasus', 0, 3);
INSERT INTO tblEmployees (empName, empActive, emp_dpID) VALUES ('Superman', 1, 1);
