# TurboTenant QA Engineer Test

## Bug List

### 1. Able to register with empty password
##### Description: Users are able to register a new account without setting a password
##### Severity: P1
##### Possible root cause: lack of data validation on the web form and on the backend

1. Click on "Need an account? Register"
2. Fill out username
3. Leave password input empty
4. Click on register

### 2. Able to create property with empty title and description 
##### Description: When creating or editing a property the application accepts title and description input fields to be empty
##### Severity: P1
##### Possible root cause: lack of data validation on the web form and on the backend

1. Click on "Add Property"
2. Leave "Title" empty
3. Leave "Description" empty
4. Fill "Rent" input with any number
5. Click on Submit

### 3. Rent input accepts negative values 
##### Description: When creating or editing a property the application accepts negative values on the rent input field
##### Severity: P1
##### Possible root cause: lack of data validation on the web form and on the backend

1. Click on "Add Property"
2. Fill "Title" input
3. Fill "Description" input
4. Fill "Rent" input with a negative number
5. Click on Submit

### 4. Requests are not protected by authentication 
##### Description: When making a GET, POST, PUT or DELETE request on the API, it does not require any authentication
##### Severity: P0
##### Possible root cause: backend application does not have any authentication wall

1. Make a POST request against "https://qa-app-api.dev.turbotenant.com/api/properties" with the following body \
    `{ "title": "Prop API", "description": "Prop Desc", "rent": "aaaa", "userId": 123 }`
2. Leave "Authorization" empty

### 5. Able to create empty lead
##### Description: When creating a new lead, it is possible to leave all fields empty
##### Severity: P1
##### Possible root cause: lack of data validation on the web form and on the backend

1. Navigate to any property
2. Click on "Add Lead"
3. Leave all input fields empty
4. Click on Submit

### 6. User session not maintained
##### Description: Users are required to log in on every page refresh since sessions are not kept
##### Severity: P1
##### Possible root cause: missing functionality

1. Log in with any user
2. Refresh the page
3. User is prompted to log in again
