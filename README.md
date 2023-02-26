# Interview Scheduler
Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors.


Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer.
When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list.
The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted.


The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

# Final Product
## Switching Days
![Switching Days](https://github.com/ehsanelgendi/scheduler/blob/master/docs/switching-days.gif?raw=true)


## Book, edit, remove an appointment
![Book, Edit, Remove Appointment](https://github.com/ehsanelgendi/scheduler/blob/master/docs/book-edit-delete-appointment.gif?raw=true)

# Setup

## 1. Install dependencies
```sh
npm install
```

## 2. Running scheduler-api Server

Follow the instructions [here](https://github.com/lighthouse-labs/scheduler-api) to run the API server

## 3. Running Webpack Development Server

```sh
npm start
```

## 4. Running Jest Test Framework

```sh
npm test
```

## 5. Running Storybook Visual Testbed

```sh
npm run storybook
```

## 6. Running Cypress End-to-End Testing
In Scheduler-API:
1. Create a new database called scheduler_test
2. Add ```"test:server": "NODE_ENV=test npm start"```, to your package.json file under scripts.
3. Duplicate your .env.development file, name it .env.4. test, and change ```PGDATABASE=scheduler_test```.
5. Run ```npm run test:server```.

In Scheduler:
```sh
npm run cypress
```

# Dependencies
- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

## Dev Dependencies
- babel/core
- storybook/addon-actions
- storybook/addon-backgrounds
- storybook/addon-links
- storybook/addons
- storybook/react
- testing-library/jest-dom
- testing-library/react
- testing-library/react-hooks
- types/classnames
- babel-loader
- prop-types
- react-test-renderer
- sass