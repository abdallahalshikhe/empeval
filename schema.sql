-- Database Schema for Employee Performance Evaluation System

-- Table 1: Employees
CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    job_description TEXT
);

-- Table 2: Evaluations
CREATE TABLE IF NOT EXISTS evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    score_time INT DEFAULT 0,
    score_task INT DEFAULT 0,
    score_comm INT DEFAULT 0,
    score_creative INT DEFAULT 0,
    score_personal INT DEFAULT 0,
    total_result INT DEFAULT 0,
    
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);
