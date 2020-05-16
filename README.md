# AfroPanTrack-frontend

<p align="center">
 <a href="https://github.com/chinomnsoawazie/AfroPanTrack-frontend">
 <img width="30%" src="https://github.com/chinomnsoawazie/AfroPanTrack-frontend/blob/master/logo.png" style="max-width:50%;">
 </a>
</p>

<p align="center"> <img src="https://img.shields.io/badge/-Technologies%20Used-blue" style="max-width:50%;"> </p>

<p align="center">
  <img src="https://img.shields.io/badge/CSS-3.0-blue" style="max-width:50%;">  
  <img src="https://img.shields.io/badge/HTML-5.2-green" style="max-width:50%;">
  <img src="https://img.shields.io/badge/JavaScript-1.8.5-blue" style="max-width:50%;">
  <img src="https://img.shields.io/badge/ReactJS-16.12.0-yellowgreen" style="max-width:50%;">
  <img src="https://img.shields.io/badge/Redux-4.0.5-brightgreen" style="max-width:50%;">
  <img src="https://img.shields.io/badge/React%20Activestorage%20provider-0.8.0-orange" style="max-width:50%;">
  <img src="https://img.shields.io/badge/Redux%20Thunk-2.3.0-yellowgreen" style="max-width:50%;">
  <img src="https://img.shields.io/badge/React%20Google%20Maps-9.4.5-lightgrey" style="max-width:50%;">
  <img src="https://img.shields.io/badge/axios-0.19.1-red" style="max-width:50%;">
 </p>
  
 <p align="center"> <img src="https://img.shields.io/badge/-Notices-blue" style="max-width:50%;"> </p>
   
 <p align="center"> 
  <a target="blank" rel="noopener noreferrer" href="https://github.com/chinomnsoawazie/AfroPanTrack-frontend">
    <img src="https://img.shields.io/badge/Frontend%20repository-Click%20here-green" style="max-width:50%;">
  </a>
   <img src="https://img.shields.io/badge/Status-Making%20mobile%20app%20version-brightgreen" style="max-width:50%;">
</p>

<h1>
  <a id="table-of-contents" class="anchor" href="#contents">  </a>
  Table of Contents
  </h1>
  
  <ul>
    <li><a href="#inspiration">Inspiration</a></li>
    <li><a href="#introduction">Introduction</a>
      <ul>
        <li><a href="#overview">Basic overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#goals">Goals</a></li>
        <li><a href="#challenge">Challenge</a></li>
      </ul>
    </li>
    <li><a href="#demo">Demo</a></li>  
    <li><a href="#installation">Installation</a>
      <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#backend-installation">Backend installation</a></li>
          <li><a href="#first-start">First start</a></li>
      </ul>
    </li>   
    <li><a href="#summary-of-files">Summary of files</a>
      <ul>
          <li><a href="#internal-file-structure">Internal file structure</a></li>
          <li><a href="#internal-dataset">Internal dataset</a></li>
      </ul>
    </li>
   <li><a href="#planned-improvements">Planned improvements</a></li>
   <li><a href="#contact">Contact</a></li>
   <li><a href="#credits">Credits</a></li>
 </ul>
 
 
   
 <h1 id="inspiration">Inspiration</h1>
  
 <p>Current COVID-19 pandemic ravaging the world shows different needs in different climes with respect to the same problem. In Africa, data integrity ranks highest as this will help know where resources should be channeled, ensure the right kind and level of response is being implemented and control public opinion. Also, the socioeconomic variables introduced requests different approach in aids and humanitarian efforts</p>
  
 <a href=#table-of-contents> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>
  
  <h1 id="introduction">Introduction</h1>
   <h2 id="overview">Basic Overview</h2>
    <p>User views infection map, government and scientific updates on the infection, reports new cases/leave comments about existing cases, and can request/give help from the app.</p>
    
   <h2 id="features">Features</h2>
    <p>Features of the app include the following;
      <ul> 
       <li>User can create, edit, and delete an account</li>
       <li>Users and guests can view infection map, government and scientific updates, and leave comments.</li>
       <li> A logged in user can do the following:
        <ul>
         <li>Make a report</li>
         <li>Request help</li>
         <li>Offer help</li>
         <li>Verify reports by other users</li>
        </ul>
        </li>
      </ul>
    </p>
    
  <a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>
  
  
 <h1 id="goals">Goals</h1>
  <p>The goals are to provide a reliable platform for information on pandemics in Africa and enable asking/requesting for help.</p>
  
 <a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>
 
 <h1 id="challenge">Challenge</h1>
  <p>The challenge for the backend of this app is several security measures that had to be put in place to ensure safety of users and intergrity of data. Email verification during signup works perfectly. Next is to implement text confirmation during signup.</p>
  
 <a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>
 
 
  <h1 id="demo">Demo</h1>
   <p>Coming soon</p>
      
   <a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>
   
   
   <h1 id="installation">Installation</h1>
   <h2 id="prerequisites">Prerequisites</h2>
   <ul>
     <li>Go to<a href="https://developers.google.com/maps/documentation/javascript/get-api-key"> Google maps JavaScript API key documentation page</a> to get an API key that will enable use any number of the about 14 different APIs for google maps services</li>
  <li>Have an email or create one specifically for the app</li>
  </ul>
  
   <h2 id="backend-installation">Backend installlation</h2>

   <p>FindStation backend is biult with Ruby(2.7.0), Rails(^6.0.2), PostgreSQL(0.18) for PostgreSQL 12.1, Bcrypt(^3.1.7), Image processing(^1.2) from Active Storage, JWT, Active model serializer(^0.10.0), and Dotenv-rails(^2.7). 
  
 <ul> 
  <li>Clone <a href="https://github.com/chinomnsoawazie/station-locate-backend">FindStation backend</a>
    <ul>
      <li>Ensure you have these uncommented or added in your gemfile before running <code>bundle install</code>
      <ul>
         <li><code>gem 'jwt'</code></li>
         <li><code>gem 'active_model_serializers', '~> 0.10.0'</code></li>
         <li><code>gem "dotenv-rails", "~> 2.7"</code></li>
         <li><code>gem 'bcrypt', '~> 3.1.7'</code></li>
         <li><code>gem 'image_processing', '~> 1.2'</code></li>
         <li><code>gem 'pg', '>= 0.18'</code></li>
         <li><code>gem 'rails', '~> 6.0.2'</code></li>
         <li><code>ruby '2.7.0'</code></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>In your terminal, run <code>rvm use ruby-2.7.0</code> to make sure you are using the correct Ruby version(this assumes you already had Ruby 2.7.0 installed)</li>
  <li>Run <code>bundle install</code> to install all gems/dependancies required for FindStation</li>
  <li>Run <code>rails db:create</code> to create a local PostgresQL database</li>
  <li>Run <code>rails db:migrate</code>to create the tables/columns required for proper FindStation functionality</li>
  <li>Create a file called .env in the backend directory (/station_locate_backend/) and add HMAC_SECRET = "<insert a secret string here>"(this is for your JWT token), NREL_API_KEY= "<insert API Token you were issued by National Renewable Energy Laboratory>", and GOOGLE_MAPS_API_KEY= "<insert API Token you were issued by Google maps API>" to the file</li>
   <li>Head over to  the <a href="https://github.com/chinomnsoawazie/station-locate-frontend/blob/master/README.md#frontend-installation">frontend</a> for instructions on how to install the frontend</li>

 </ul>
</p>

 <h2 id="first-start">First start</h2>
<p>After installtion you need to fire up the backend API and the frontend in that order. For the backend, navigate into the folder you cloned the backend repo into(probably need to run an <code>ls</code> command to be sure youre in the root app folder), and run <code>rails s</code>. This would start the backend on the default <code>port 3000</code>. Then in a new shell tab or new terminal window, navivate to the folder containing the cloned and properly installed frontend repo and run <code>npm start</code>. It should come up with a dialog that informs you <code>port 3000</code> is taken and props you to chose to run the frontend on a different port. Chose yes and everything should be alright. Frontend will run on a port with a number above 3000, usually 3001.<br/>

To access the backend, go to <code>http://localhost:3000</code><br/>
To acess the frontend, go to <code>http://localhost:3001</code></p>
 
<a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>

<h1 id="summary-of-files">Summary of files</h1>
   <h2 id="internal-file-structure">Internal file structure</h2>
    <p>
 <ul>
  <li><a href="https://github.com/chinomnsoawazie/station-locate-backend/tree/master/station_locate_backend/app">App:</a> Primary location for backend API configuration
    <ul>
      <li><a href="https://github.com/chinomnsoawazie/station-locate-backend/tree/master/station_locate_backend/app/controllers">controllers:</a> Render/RESTful/CRUD methods that carry our actoins including authorizations, checks, etc</li>
       <li><a href="https://github.com/chinomnsoawazie/station-locate-backend/tree/master/station_locate_backend/app/serializers">serializers:</a>Filters for the backend API</li>
        <li><a href="https://github.com/chinomnsoawazie/station-locate-backend/tree/master/station_locate_backend/app/models">models:</a>Active Record Associations/Validation methods</li>
    </ul>
   
   </li>
   <li><a href="https://github.com/chinomnsoawazie/station-locate-backend/tree/master/station_locate_backend/config"> config:</a> Start/Backend configuration files for routes, image processing, etc</li>
  <li><a href="https://github.com/chinomnsoawazie/station-locate-backend/tree/master/station_locate_backend/db"> db:</a> Database configuration files</li>
  <li><a href="https://github.com/chinomnsoawazie/station-locate-backend/blob/master/station_locate_backend/Gemfile"> Gemfile:</a> Prerquisites and dependencies</li>
</ul>
</p>

<a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>



 <h1 id="planned-improvements">Planned improvements</h1>
    <p>  Some of the planned improvements include;

 <ul>
  <li>Persist checkins</li>
  <li>Persist commenting and sharing to social networks activities</li>
  <li>Implement tracking that lets the user know how when they need to head to a charging station and which stations they can make it to but persisting thier vehicle characteristics parameters
</li>
 </ul>
</p>

<a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>

 <h1 id="contact">Contacts</h1>
    <p>
 <ul>
  <li><a href="coawazie@gmail.com">Email</a></li>
  <li><a href="https://www.linkedin.com/in/chinomnsoawazie/">LinkedIn</a></li>
  <li><a href="https://twitter.com/COAwazie">Twitter</a></li>
  <li><a href="https://medium.com/coffee-software">Medium</a></li>
 </ul>
</p>

<a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>

 <h1 id="credits">Credits</h1>
    <p>
 <ul>
  <li><a href="https://flatironschool.com/">The Flatiron School</a></li>
  <li><a href="https://jwt.io/introduction/">JWT Auth</a></li>
  <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
    <li><a href="https://rubyonrails.org/">Rails</a></li>
  <li><a href="https://rubygems.org/gems/dotenv-rails/versions/2.7.5">dotenv-rails</a></li>
  <li><a href="https://rubygems.org/gems/bcrypt/versions/3.1.7">Bcrypt</a></li>
  <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
 </ul>
</p>

<a href="#table-of-contents"> <img src="https://img.shields.io/badge/-Back%20To%20Table%20of%20Contents-lightgrey" style="max-width:50%;"></a>

