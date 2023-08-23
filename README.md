
![956a9a60a9212f2a7a937d0a670a4fa](https://user-images.githubusercontent.com/97992495/211347691-a2d2415d-1493-4175-8545-c01b97526241.jpg)
# <div align="center"> [NSTORM](https://nstorm.onrender.com)</div>

Welcome to Nstorm! 
Nstorm is a e-commerce website clone inspired by Nordstorm. Nstorm provides a convenient shopping expreience and order management features to all the users. 

## 🔗Wiki Link
* [Database Schema](https://github.com/iffy713/Nstorm/wiki/Database-Schema)
* [Feature List](https://github.com/iffy713/Nstorm/wiki/Feature-Lists)
* [User Stories](https://github.com/iffy713/Nstorm/wiki/User-Stories)

## 💻Tech Stack
### Languages
[![My Skills](https://skillicons.dev/icons?i=html,css,js,py)](https://skillicons.dev)

### 📚Frameworks and Libraries
[![My Skills](https://skillicons.dev/icons?i=react,redux,flask)](https://skillicons.dev)

### 🕮Database:
[![My Skills](https://skillicons.dev/icons?i=postgres)](https://skillicons.dev)
Sqlalchemy

## 💫Features
### Homepage
<!-- ![55674145d7203b88349567d2fb71b62](https://user-images.githubusercontent.com/97992495/211351761-64c9ef18-b0da-4f77-9acf-c81e46d9e802.png) -->
<img width="1128" alt="f978b3ef6c3c1af3b70de278814c823" src="https://github.com/iffy713/Nstorm/assets/97992495/1d9d61f6-065f-486c-9383-8d4dbc1f2f51">


### Sign in
![ad8227348e0a6abe9bef965eaa3fac3](https://user-images.githubusercontent.com/97992495/211351862-136441bf-230f-47fb-a64d-3be59be83a28.png)

### Sign up
![aa17925cbfb8b94d7bc1e61472a2178](https://user-images.githubusercontent.com/97992495/211351900-12f05c3b-9827-466b-b004-a12fdad75442.png)

### Shopping Cart
![3339a282dba960fd892a5060a6a72e9](https://user-images.githubusercontent.com/97992495/211351987-5639a248-153c-4656-8067-aee9c6c03c59.png)

### Checkout 
![91df80177669623e3be57ab2ed5b68d](https://user-images.githubusercontent.com/97992495/211352052-dc185d1c-b62b-44a5-a609-8e3b2b71d776.png)

### Orders
![0a623158cd19c8b092e20d96b562d9a](https://user-images.githubusercontent.com/97992495/211352124-2305f61d-b5f4-4fec-bf63-64970e0bac47.png)

### Address
![f9ae523b2fd91b6f14248ecb6b4a6fd](https://user-images.githubusercontent.com/97992495/211352182-80502d44-3e96-4e19-bcd1-1720092ca0d6.png)

### Categoraries

### Search Products


## 🚀Getting started
1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


## Deployment through Render.com

First, refer to your Render.com deployment articles for more detailed
instructions about getting started with [Render.com], creating a production
database, and deployment debugging tips.

From the [Dashboard], click on the "New +" button in the navigation bar, and
click on "Web Service" to create the application that will be deployed.

Look for the name of the application you want to deploy, and click the "Connect"
button to the right of the name.

Now, fill out the form to configure the build and start commands, as well as add
the environment variables to properly deploy the application.

### Part A: Configure the Start and Build Commands

Start by giving your application a name.

Leave the root directory field blank. By default, Render will run commands from
the root directory.

Make sure the Environment field is set set to "Python 3", the Region is set to
the location closest to you, and the Branch is set to "main".

Next, add your Build command. This is a script that should include everything
that needs to happen _before_ starting the server.

For your Flask project, enter the following command into the Build field, all in
one line:

```shell
# build command - enter all in one line
npm install --prefix react-app &&
npm run build --prefix react-app &&
pip install -r requirements.txt &&
pip install psycopg2 &&
flask db upgrade &&
flask seed all
```

This script will install dependencies for the frontend, and run the build
command in the __package.json__ file for the frontend, which builds the React
application. Then, it will install the dependencies needed for the Python
backend, and run the migration and seed files.

Now, add your start command in the Start field:

```shell
# start script
gunicorn app:app
```

_If you are using websockets, use the following start command instead for increased performance:_

`gunicorn --worker-class eventlet -w 1 app:app`

### Part B: Add the Environment Variables

Click on the "Advanced" button at the bottom of the form to configure the
environment variables your application needs to access to run properly. In the
development environment, you have been securing these variables in the __.env__
file, which has been removed from source control. In this step, you will need to
input the keys and values for the environment variables you need for production
into the Render GUI.

Click on "Add Environment Variable" to start adding all of the variables you
need for the production environment.

Add the following keys and values in the Render GUI form:

- SECRET_KEY (click "Generate" to generate a secure secret for production)
- FLASK_ENV production
- FLASK_APP app
- SCHEMA (your unique schema name, in snake_case)
- REACT_APP_BASE_URL (use render.com url, located at top of page, similar to
  https://this-application-name.onrender.com)

In a new tab, navigate to your dashboard and click on your Postgres database
instance.

Add the following keys and values:

- DATABASE_URL (copy value from Internal Database URL field)

_Note: Add any other keys and values that may be present in your local __.env__
file. As you work to further develop your project, you may need to add more
environment variables to your local __.env__ file. Make sure you add these
environment variables to the Render GUI as well for the next deployment._

Next, choose "Yes" for the Auto-Deploy field. This will re-deploy your
application every time you push to main.

Now, you are finally ready to deploy! Click "Create Web Service" to deploy your
project. The deployment process will likely take about 10-15 minutes if
everything works as expected. You can monitor the logs to see your build and
start commands being executed, and see any errors in the build process.

When deployment is complete, open your deployed site and check to see if you
successfully deployed your Flask application to Render! You can find the URL for
your site just below the name of the Web Service at the top of the page.

[Render.com]: https://render.com/
[Dashboard]: https://dashboard.render.com/




