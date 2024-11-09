Use Cases
	Actor(s): Authenticated Admin users
	Use Cases
		List Team members
		Add a new team member
		Edit existing member
		Delete a member
Client
	Tech stack
		React
		Axios(For RESTful service calls from react based client side)
Server
	Tech stack
		Python 3.12
		Django 5.1
		Django rest framework 

Database
	SQLite: SQLite is chosen as the persistent data storage considering that the requirement is simple. We need a light weight storage to retrieve and return to the client applications.

High Level design
	This application is built as a 3 tier architecture. 
	
 	Web client (Presentation layer)
		This web client is built using react java script framework. Considering the simplicity of the requirement, the application is using the state management supported out of the box in react, This avoids the complexity of using state management frameworks like redux, mobx etc. As the system continues to extend in the future, a more sophisticated state management framework can be used.  
		This is a SPA and page navigation is done with Routing mechanism in react. 
		CSS and related UI styling is done with the support of styled-components library. This gives the flexibility in building reusable UI libraries and keep the code readable. This considerably improve the maintainability of the code long term.
		Axios package is used for API call to pull th data from Django REST framework
	
	API/Services (Business Logic Layer)
		This is the service layer where code business functionalities are implemented. This is extensible in such a way that any future enhancements to the functionalities can be easily incorporated. 
	This service is RESTbased and can be easily scale based on the future traffic needs. This can be achieved by horizontally scaling the services. We can improve the availability and reduce the latency by hosting the service in multiple regions and availability zones. 

	Database (Data layer)
	This is the persistent storage powered by sqlite3. This is integrated from Django directly which makes the deployment easy. Django provides libraries out of the box to directly communicate with SQLite. All CRUD operations are done through library calls from Django. Modal, ModelViewSet and Serilizers in Django encapsulate the data retrieval and manipulation operations. We can add proper monitoring calls to keep track of the server data usage and make necessary adjustments in the future.

	Below is the data structure of the Emp model which is saved in the database. 

	   first_name = models.CharField(max_length=200, blank=False)
	   last_name = models.CharField(max_length=200, blank=False)
	   email = models.EmailField(blank=False)
	   phone_number = models.CharField(max_length=20, blank=False)
	   role = models.BooleanField(default=EmpRole.REGULAR)

Testing
	All the use cases are converted into detailed test cases. Manual testing is performed on all the test cases. 
	There are three types of automation testing which can be performed.
		Unit testing across client and server code. We can use python “unittest” library for server side unit testing. For Java script unit testing, I would recommend to use Jest which is a reliable and stable library for unit testing. 
		API automation testing: This is required to test all the success and failure cases in hitting the API.
		UI testing.: This automation testing is required to test all UI navigations across three pages. Automation pipeline will fail if any UI flow is failing which will prevent the code to be built for deployment. I would recommend using cypress for web based UI automation testing.

Deployment
	Deploying the system is straightforward. There are mainly two parts we need to take care
	Web deployment
		Package.json file contains all the dependencies related to the web client. Run the following command to build the code for production deployment
			npm run build
	Server deployment 
		Identify the production environment(Eg. AWS, GCS, Azure etc.)
		Install the dependencies(eg. Python 3.12, Django 5.1 etc.)
		Enable version control and automate the deployment process with Github or Gitlab of Jenkins
		Build and deploy Django package in Docker or related containers.
		Add and connect to SQLite
