
# Student Database Management System (NexusEdu)

A comprehensive web application for managing student data, courses, grades, attendance, and academic records.

## Project Overview

NexusEdu is a Student Database Management System designed for educational institutions to efficiently manage student information. The application provides an intuitive interface for administrators, faculty, and staff to handle various aspects of student data management.

## Features

- **Student Management**: Add, edit, view, and delete student profiles with comprehensive information
- **Course Management**: Create and manage courses, assign instructors, and track enrollment
- **Grade Management**: Record and track student grades across courses and semesters
- **Attendance Tracking**: Monitor student attendance records
- **Reporting**: Generate various academic reports and analytics
- **User-friendly Interface**: Intuitive dashboard with data visualization

## Database Schema Design

### Entity-Relationship Diagram

The database is designed with the following key entities and relationships:

#### Students
- student_id (PK)
- first_name
- last_name
- email
- date_of_birth
- gender
- address
- phone
- enrollment_date
- program_id (FK to Programs)
- status

#### Programs
- program_id (PK)
- program_name
- department
- duration
- description

#### Courses
- course_id (PK)
- course_code
- title
- description
- credits
- program_id (FK to Programs)

#### Instructors
- instructor_id (PK)
- first_name
- last_name
- email
- phone
- department
- hire_date
- specialization

#### Enrollment
- enrollment_id (PK)
- student_id (FK to Students)
- course_id (FK to Courses)
- semester_id (FK to Semesters)
- enrollment_date
- status

#### Grades
- grade_id (PK)
- enrollment_id (FK to Enrollment)
- assignment_type
- grade_value
- comments
- date_recorded

#### Attendance
- attendance_id (PK)
- enrollment_id (FK to Enrollment)
- date
- status (present, absent, late)
- comments

#### Semesters
- semester_id (PK)
- name
- start_date
- end_date
- academic_year

## Technologies Used

- **Frontend**: React, Tailwind CSS, shadcn/ui components
- **Backend**: (To be implemented in Step 3 & 4)
- **Database**: (To be implemented in Step 3 & 4)

## Project Status

This project follows the 4-step implementation process:

1. ✅ Database schema design and ER Diagram
2. ✅ User interface implementation
3. ✅ Database creation
4. ✅ Connection of UI with database

## Installation and Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd student-database-management-system

# Install dependencies
npm install

# Start the development server
npm run dev
```

## License

This project is for educational purposes.
