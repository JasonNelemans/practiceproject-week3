# Practice Assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for practice assessment

You are allowed to ask for help of teachers and fellow students.

#### Rules for the actual assessment:

You are supposed to make your actual assessment individually. You are allowed to use any materials in the reader or on the internet, but you are NOT allowed to look at each other's code, or receive external help.

Start time: tuesday 18:00
Deadline: thursday 22:00

Passing grade: 45 / 60 points
Extension granted at: 30 / 60 points

## How to make and submit your homework

- Clone this repository using `git clone`
- install the dependencies using `npm install`
- And then run it with `npm run start`, as usual.
- You are allowed to leave `console.log`s and comments in your code, but please make your code reasonably indented/formatted, and remove unnecessary code. This will make your teachers happy :)
- Your teachers will also be happy if you make enough git commits. This way, we can see your progress. For example, committing after each section
- Since you cloned this repo it should already have the correct remote. Submit your work by `git push origin master`

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Creating components
- Composing components and passing them data via props
- Mapping, filtering & sorting arrays of objects
- Using `event listeners` and `event handlers`
- Designing and managing component local state with `useState` hook
- Using the `useEffect` hook to fetch data
- Using `react-router-dom`
- Lifting state to a parent component, and passing callback props to children
- Making controlled forms

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past weeks! Don't let it scare or overwhelm you though, you have seen all these things. Don't hesitate to use the reader, Google (Stackoverflow), or the documentation links we provide below.

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating homework experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

## What are we building?

We are building a webapp for a general practicioners office. It has 4 main pages

- A homepage with contact details
- A page where patients can see who is on duty and contact details
- A page where new patients can sign up
- A page where doctors view which patients are in their database

The data for this app is available through an api:

[Overview]('https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/')

Endpoints:

GET /doctors

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors

GET /patients

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients

The data for this app is also stored in:

`src/data` in case you want to hardcode or copy/paste the data

## Wireframe

Here is an overview for the app:

![Wire Frame](./wireframe.png)

## Features

### 1. As a patient I want to be able to navigate to different pages so I can find the information I am looking for

- The app should have navigation on all pages so patients and doctors can easily find what they are looking for
- The homepage has 2 buttons
  - Who is on duty: should link to the who is on duty page
  - I am a new patient: should link to the patient signup page

| Criteria                                      | Points |
| --------------------------------------------- | ------ |
| 4 Routes are implemented using react router   | 2      |
| Each route renders a different component      | 1      |
| A navbar can be used to navigate on all pages | 2      |
| 2 Buttons link to the correct pages           | 1      |
| The navbar indicates what page you are on     | 1      |
| Total                                         | 7      |

Hint: to indicate what page a user is on use the `<NavLink />` component

https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md

**Note:** If you are unable to implement routing in the app, you may put (render) the components for all the other features in `App.js` without using Routing at all.

### 2. As a patient I want know how and when to contact the practice

- On the homepage _and_ on the who is on duty page, we should display a phone number of the practice
- We also want to indicate wether the practice is **open** or **closed** at the moment when the user visits the page (live updating this is not required)

Business logic: the practice is open between 08:00 and 16:59

| Criteria                                                               | Points |
| ---------------------------------------------------------------------- | ------ |
| Phone number is displayed on both pages                                | 0.5    |
| Wether the practice is open right now is displayed on both pages       | 0.5    |
| Wether the practice is open or closed is dynamic, not hardcoded        | 2      |
| To display this information the same component is reused on both pages | 2      |
| Total                                                                  | 5      |

Hint: You will have to google how to get the current hour of the day using javascript to be able to display **open** or **closed** dynamically.

### 3. As a patient I want to see which doctors are on duty so I can determine wether I should go to the doctor today

The information regarding who is on duty is available from our api endpoint:

GET /doctors

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors

- On our who is on duty page, we display up to date information about which doctor is on duty.

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Doctor availabilty is displayed on the who is on duty page        | 1      |
| The data is fetched from the api, not hardcoded                   | 3      |
| If the data is still being fetched, display "loading" to the user | 3      |
| The data is displayed using .map                                  | 2      |
| There is a warning in the console regarding "key" props           | -1     |
| Doctor availability is displayed using an html `table` element    | 1      |
| Total                                                             | 10     |

### 4. As a new patient I want to be able to sign up

- We want to make a form where new patients can sign up
- Once they have signed up successfully we want to give them some confirmation everything went well.
- We will not actually store the data, console.logging the data from the form to the console is good enough for now

| Criteria                                                                 | Points |
| ------------------------------------------------------------------------ | ------ |
| A form is displayed on the Patient Signup page                           | 1      |
| The form has inputs for firstName, lastName, email, phoneNumber & submit | 0.5    |
| The form has a select input for gender, and a date input for dateOfBirth | 0.5    |
| The state of the form is controlled using React useState hook(s)         | 2      |
| When the form is submitted, the user input for all form fields is logged | 3      |
| When the form has been submitted, we show a success message to the user  | 3      |
| Submitting the form refreshes the page                                   | -2     |
| Total                                                                    | 10     |

### 5. As a doctor I want to be able to view the data of my patients, so I can make good decisions

The data for docters & prescriptions is available from our api endpoints

GET /patients

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients

GET /doctors

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors

- We want display the data of all our patients so doctors can see all patients registered at their practice
- The patients are sorted by their `lastName` in alphabetical order
- By default only the `name`, `id` and `dateOfBirth` of each patient is displayed
- Each patient component has a `show details`, button. Clicking it also displays the `email`, `phoneNumber`, `gender` and a list of `prescriptions` for that patient.
- A doctor can select their name using a `select` input and view their specific patients. Each patient object has a `doctorId` which corresponds with the `id` of a specific doctor. When the name of a doctor is selected only the patients that match their `doctorId` are displayed.

| Doctor name  | id (doctorId) |
| ------------ | ------------- |
| Dr. Coventry | 1             |
| Dr. Adenet   | 2             |
| Dr. Tollady  | 3             |

| Criteria                                                                  | Points |
| ------------------------------------------------------------------------- | ------ |
| The `name`, `id` & `dateOfBirth` is displayed for all patients            | 1      |
| The data for each patient is displayed using a seperate component         | 2      |
| The data is displayed using .map                                          | 1      |
| There is a warning in the console regarding "key" props                   | -1     |
| The patients are sorted by their `lastName` using .sort                   | 3      |
| The data for the patients is fetched from the api, not hardcoded          | 1      |
| Each patient displayed has a `show details` button                        | 0.5    |
| When clicked: display `email`, `phoneNumber`, `gender` & `prescriptions`  | 2.5    |
| The page has a `select` input for the 3 doctors names and `all`           | 1      |
| When `all` is selected, all patients are displayed                        | 1      |
| Selecting the name of a doctor filters the patients that are displayed    | 3      |
| The names of the doctors in the `select` input are fetched, not hardcoded | 2      |
| Total                                                                     | 18     |

### 6. Styling

- Apply some styling to this app using CSS to make it look better

| Criteria                                                             | Points |
| -------------------------------------------------------------------- | ------ |
| Student has applied at least 5 style rules                           | 1      |
| Styles are split up across multiple CSS files created by the student | 1      |
| The styling of the app resembles the wireframe                       | 1      |
| The styling of the app is different on mobile and desktop            | 1      |

### 7. Finishing up

- Self assess: Score your assessment yourself using the table below
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your respository using `git push origin master`

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment                              | 2      |
| Student can reflect on their process by writing a reflection of ~200 words | 2      |
| Student has regularly committed changes with clear commit messages         | 1      |
| Student has pushed their repository using git                              | 1      |
| Total                                                                      | 6      |

### Self assessment

| Section           | Max Points | Self assessed points ~ fill this in ~ |
| ----------------- | ---------- | ------------------------------------- |
| 1 Navigation      | 7          | 0/7                                   |
| 2 Contact Details | 5          | 0/5                                   |
| 3 Availability    | 10         | 0/10                                  |
| 4 Sign up         | 10         | 0/10                                  |
| 5 Patient DB      | 18         | 0/18                                  |
| 6 Styling         | 4          | 0/4                                   |
| 7 Finishing up    | 6          | 0/6                                   |
| Total             | 60         | 0/60                                  |
