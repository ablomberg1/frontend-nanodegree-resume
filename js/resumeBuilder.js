/*
This is empty on purpose! Your code to build the resume will go here.
*/

 // $("#header").prepend(formattedRole);  adds the role to the top of the page before my name
 //append added the role to the right of my name
 $(document).click(function(loc) {
 	var x = loc.pageX;
 	var y = loc.pageY;

 	logClicks(x,y);
 }
 );

 var bio = {
 	"name" : "Audrey Blomberg",
 	"role" : "Web Developer",
 	"contacts" : {
 		"mobile" : "425-210-2543",
 		"email" : "ablomberg9830@att.net",
 		"github" : "ablomberg1",
 		"twitter" : "@blomberg_audrey",
 		"location" : "Marysville, WA"
 	},
 	"welcomeMessage" : "Hello, and thank you for taking an interest in my resume.",
 	"skills" : [
 	"Analytical skills", "SQL", "Python", "HTML", "CSS", "Java Script developer in the making" 
 	],
 	"biopic" : "images/me.jpg"
 };

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedGithub);
 $("#topContacts").append(formattedTwitter);
 $("#topContacts").append(formattedLocation);
 $("#header").append(formattedBioPic);
 $("#header").append(formattedWelcomemsg);


 if(bio.skills.length > 0) {
 	$("#header").append(HTMLskillsStart);
 	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
 	$("#skills").append(formattedSkills);
 	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
 	$("#skills").append(formattedSkills);
 	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
 	$("#skills").append(formattedSkills);
 	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
 	$("#skills").append(formattedSkills);
 };

 //using dot notation
 var work = {
 	"jobs" : [
 	{
 		"employer" :  "AT&T",
 		"position" :  "SR Specialist - Technical Architect",
 		"location" : "Bothell, WA",
 		"dates" : "August-2006 to present",
 		"description" : "Responsible for performance of any and all functions involved in the mainteannce support for bizComp application. Tasks include tickt resolution, data analyasis and coumentation of root cause tickets.  Duties also include working directly with the internal clients to analyze/resolve issues. Monitor on-line systems, processing, and file loading.  Utilize SQL to perform analysis of data. Act as liason to our business client, interact with sustainment analysts, developers and test analysts. Manage required training tracking and create easy to use tools for team to stay current on required and personal development training."
 	},
 	{
 		"employer" : "JanSport",
 		"position" :  "Process Analyst, Payroll Specialist and Tech Support",
 		"location" : "Everett, WA",
 		"dates" : "February-1999 to July-2006",
 		"description" : "Small office conducive to many jobs. Analyze processes and implement improvements thru trianing, better materias and supplies. Complete payroll for 20-130 employees. Updated system from timecards to ADP clock system reducing support hours by more than 90% and providing real time data to supervisors for more accurrate payroll. Contact person for all IS and IT support requests. Installed computer hardware and provided PC support. Resolved shipping applicaiton and label generation datbase issues."
 	}
 	]
 };

 function displayWork() {
 	for (job in work.jobs) {
 		$("#workExperience").append(HTMLworkStart);
 		var formattedWorkemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 		var formattedWorktitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
 		var formattedEmployerTitle = formattedWorkemployer + formattedWorktitle;
 		$(".work-entry:last").append(formattedEmployerTitle);
 		var formattedWorkdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 		$(".work-entry:last").append(formattedWorkdates);
 		var formattedWorklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 		$(".work-entry:last").append(formattedWorklocation);
 		var formattedWorkdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 		$(".work-entry:last").append(formattedWorkdescription);
 	};
 };

 displayWork();

 var projects = {
 	"projects" : [
 	{
 		"title" : "tbd",
 		"dates" : 2015,
 		"description" : "Waiting for my first one, so the images included are placeholders and are not in any way a creation of my own.",
 		"images" : [
 		"images/project.jpg"
 		]
 	},
 	{
 		"title" : "tbd2",
 		"dates" : 2016,
 		"description" : "Still waiting for my first one, so the images included are placeholders and are not in any way a creation of my own.",
 		"images" : [
 		"images/project2.jpg"
 		]
 	}
 	]
 };

 function displayProject() {
 	for (project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);

 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 		$(".project-entry:last").append(formattedTitle);
 		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 		$(".project-entry:last").append(formattedDates);
 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 		$(".project-entry:last").append(formattedDescription);

 		if (projects.projects[project].images.length > 0) {
 			for (image in projects.projects[project].images) {
 				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 				$(".project-entry:last").append(formattedImage);
 			}
 		}

 	}
 };

 displayProject();


 var education = {
 	"schools" : [
 	{
 		"name" : "University of Phoenix",
 		"location" : "Mountlake Terrace, WA",
 		"degree" : "BS",
 		"majors" : "Information Systems",
 		"dates" : 2003
 	},
 	{ 	
 		"name" : "University of Phoenix",
 		"location" : "Bellevue, WA",
 		"degree" : "MS",
 		"majors" : "Business Adminimstration",
 		"dates" : 2007
 	}
 	],
 	"onlineCourses" : [
 	{
 		"school" : "Udacity",
 		"title" : "Intro to Programming",
 		"dates" : 2015,
 		"url" : "http://www.udacity.com"
 	}
 	]
 };

 function displayEducation() {
 	for (school in education.schools) {
 		$("#education").append(HTMLschoolStart);

 		var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
 		var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
 		var formattedSchoolTitle = formattedSchoolname + formattedSchooldegree;
 		$(".education-entry:last").append(formattedSchoolTitle);
 		var formattedSchooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
 		$(".education-entry:last").append(formattedSchooldates);

 		var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
 		$(".education-entry:last").append(formattedSchoolmajor);
 		var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
 		$(".education-entry:last").append(formattedSchoollocation)

 	};
 	for (online in education.onlineCourses) {
 		$(".education-entry:last:last").append(HTMLonlineClasses);

 		var formattedOnlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
 		var formattedOnlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
 		var formattedSOnlineName = formattedOnlinetitle + formattedOnlineschool;
 		$(".education-entry:last:last").append(formattedSOnlineName);
 		var formattedOnlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
 		$(".education-entry:last").append(formattedOnlinedates);
 		var formattedOnlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
 		$(".education-entry:last").append(formattedOnlineurl);

 	}
 };

 displayEducation();


// quiz - not needed for resume
$("#main").append(internationalizeButton);

function inName(bio_obj) {
	var internationalName = bio.name
	var names = internationalName.split(" ");
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	internationalName = names.join(" ");
	return internationalName;
};

// you want to see a map? here's a map

$("#mapDiv").append(googleMap); 

