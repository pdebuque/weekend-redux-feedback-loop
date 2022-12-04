
<!-- ABOUT THE PROJECT -->
## About The Project

![full-app screenshot](ReadMe_screenshots/full_app_screenshot.png)

This is a simple full-stack feedback-sharing portal. Users submit feedback, which is stored as global state using redux before being submitted to a database. Also available is admin view, where authorized usres can see all past pieces of feedback.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [node.js](https://nodejs.org/en/)
* [express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Material.ui](https://mui.com/)
* [axios](https://www.npmjs.com/package/axios)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

You will need Node.js and PostgreSQL installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pdebuque/weekend-redux-feedback-loop
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. In PostgreSQL, create a database called 'prime_feedback' on localhost, port 5432
4. In this database, create the table and starting data by executing the commands in database.sql
5. Start up client with npm run client and server with npm run server.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

This app is quite simple - simply answer the survey as given to you. To see all past submissions, navigate to /admin

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Thank you to Prime Digital Academy and my peers in the Shawl cohort!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


