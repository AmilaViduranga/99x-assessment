# 99x-Assessment

## Technologies using
 - AngularJs @ Frontend
 - Java - SpringBoot @ Backend
 - MySql - Database
 - Hibernate - ORM tool
 - npm - Version controller @ Frontend
 - gradle - Version controller @ Backend

## Prerequisites 
 - You should have Java v 1.8 and Nodejs v10 or above in your machine
 - You can download Java in https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
 - You can download nodejs in https://nodejs.org/en/
 - You have to install angular cli by refering https://cli.angular.io/
 - you can setup gradle by refering https://docs.gradle.org/current/userguide/installation.html
 - If you are wish to use eclipse IDe then you should have Eclipse IDE 2019‑09. You can download that by refering https://www.eclipse.org/downloads/. Eclipse will suport to run gradle projects. Otherwise you have to run the gradle project manually. If you are interest on that you have to install gradle dependancies and build the project. For further installation you can refer https://guides.gradle.org/creating-new-gradle-builds/. Here I suppose you are using eclipse ide. It will reduce the additional effort.
  - You have to switch on MYSQL server and need to create a database called "assessment". Then you have to import "assessment.sql" file to mysql server. (It's better to use XAMPP server. It include apachie server and mysql database server. You can download XAMPP server by refering https://www.apachefriends.org/download.html).

## setup API
 - I suppose you are using eclipse IDE. If so then you have to import "assessment" folder. Inside that folder it consist with all the gradle dependancies and other needs. When you importing that project as gradle project it will automatically install all the dependancies and setup other needs. For import gradle project you can refer 
 http://makble.com/how-to-import-gradle-project-into-eclipse document.
 - Then you have to run the project using eclipse ide
 
## setup Frontend App
 - You have to navigate into price-calculator folder
 - Then you have to run "npm install" in terminal (I hope you already install nodejs, if not refer the Prerequisites section).
 - Then you have to run "ng serve --aot" or  "ng serve" command
 - Then open any browser and type "http://localhost:4200" in address bar.
 
## Further Details
- This is assessment for 99x organization frontend developer possition
- credentials for login as admin  (This will needed when you going to change the excsting data)
  - User name is :- assessment
  - password is :- password

## references
- for JWT Token I refered "https://dzone.com/articles/spring-boot-security-json-web-tokenjwt-hello-world"
- for hibernate I refered "https://www.callicoder.com/spring-boot-rest-api-tutorial-with-mysql-jpa-hibernate/"
