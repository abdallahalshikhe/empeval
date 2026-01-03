Role: You are an expert Full Stack Web Developer and Systems Architect.

Task: I need you to write a comprehensive technical design description and implementation plan for a web-based "Employee Performance Evaluation System." This description will be used to generate the actual code later.

Tech Stack:

Frontend: HTML, CSS, Vanilla JavaScript.

Backend/Database: MySQL.

Visual Reference & Requirements: I have a wireframe design with three main components. Please structure your response to cover the following implementation details based on these components:

1. Frontend Design (UI/UX):

Theme: Use a dark mode theme (dark background, light text, purple/neon accents) to match the wireframe style.

Section A: Employee Information Form:

Create a form container with inputs for: Full Name (Text), Department (Text), and Job Description (Text Area).

Section B: Performance Criteria (Evaluation Board):

Create a section with 5 distinct performance categories. Based on the wireframe, these appear to be weighted scores or gauges.

Categories:

Time (Input range or number).

Task (Input range or number).

Comm (Communication).

Creative (Creativity).

Personal Ev (Personal Evolution/Growth).

Logic: Include a JavaScript function to auto-calculate the "Result" (Total Score) at the bottom based on the inputs provided in the 5 categories.

2. Database Schema (MySQL):

Based on the relational diagram in the wireframe, design the SQL schema for two tables with a One-to-Many or One-to-One relationship:

Table 1 (employees): Should contain columns for id (Primary Key), full_name, department, and job_description.

Table 2 (evaluations): Should contain columns for id, employee_id (Foreign Key linking to Table 1), and columns for the 5 score categories (score_time, score_task, score_comm, score_creative, score_personal), plus the total_result.

3. Interaction Logic:

Describe how the JavaScript will fetch the form data and send it to a backend endpoint (mock the API call description) to insert the data into the MySQL database.

Output: Please provide the step-by-step architectural breakdown, the SQL CREATE TABLE commands, and the HTML structure description.