function sortbylocation()
{
  document.getElementById("row1").innerHTML = ("<td>Software Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£29,500 - £32,500</td>" + "<button onclick='job1()'>Learn More</button>");
  document.getElementById("row2").innerHTML = ("<td>Techical Manager</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£35,500 - £38,500</td>" + "<button onclick='job2()'>Learn More</button>");
  document.getElementById("row3").innerHTML = ("<td>Web Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>DOE</td>" + "<button onclick='job3()'>Learn More</button>");
  document.getElementById("row4").innerHTML = ("<td>Software Release Engineer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>DOE</td>" + "<button onclick='job4()'>Learn More</button>");
  document.getElementById("row5").innerHTML = ("<td>Javascript Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£20,000 - £40,000</td>" + "<button onclick='job5()'>Learn More</button>");
  document.getElementById("row6").innerHTML = ("<td>Customer Services Manager</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£42,000 - £52,000</td>" + "<button onclick='job6()'>Learn More</button>");
  document.getElementById("row7").innerHTML = ("<td>Senior Suport Engineer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£33,500 - £38,500</td>" + "<button onclick='job7()'>Learn More</button>");

}

function sortAtoZ()
{
  document.getElementById("row1").innerHTML = ("<td>Javascript Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£20,000 - £40,000</td>" + "<button onclick='job5()'>Learn More</button>");
  document.getElementById("row2").innerHTML = ("<td>Software Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£29,500 - £32,500</td>" + "<button onclick='job1()'>Learn More</button>");
  document.getElementById("row3").innerHTML = ("<td>Software Release Engineer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>DOE</td>" + "<button onclick='job4()'>Learn More</button>");
  document.getElementById("row4").innerHTML = ("<td>Customer Services Manager</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£42,000 - £52,000</td>" + "<button onclick='job6()'>Learn More</button>");
  document.getElementById("row5").innerHTML = ("<td>Senior Suport Engineer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£33,500 - £38,500</td>" + "<button onclick='job7()'>Learn More</button>");
  document.getElementById("row6").innerHTML = ("<td>Techical Manager</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£35,500 - £38,500</td>" + "<button onclick='job2()'>Learn More</button>");
  document.getElementById("row7").innerHTML = ("<td>Web Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>DOE</td>" + "<button onclick='job3()'>Learn More</button>");
}

function sortbyrelevance()
{
  document.getElementById("row1").innerHTML = ("<td>Javascript Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£20,000 - £40,000</td>" + "<button onclick='job5()'>Learn More</button>");
  document.getElementById("row2").innerHTML = ("<td>Software Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£29,500 - £32,500</td>" + "<button onclick='job1()'>Learn More</button>");
  document.getElementById("row3").innerHTML = ("<td>Web Developer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>DOE</td>" + "<button onclick='job3()'>Learn More</button>");
  document.getElementById("row4").innerHTML = ("<td>Software Release Engineer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>DOE</td>" + "<button onclick='job4()'>Learn More</button>");
  document.getElementById("row5").innerHTML = ("<td>Customer Services Manager</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£42,000 - £52,000</td>" + "<button onclick='job6()'>Learn More</button>");
  document.getElementById("row6").innerHTML = ("<td>Senior Suport Engineer</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£33,500 - £38,500</td>" + "<button onclick='job7()'>Learn More</button>");
  document.getElementById("row7").innerHTML = ("<td>Techical Manager</td>" + "<td>Location</td>" + "<td>Company</td>" + "<td>£35,500 - £38,500</td>" + "<button onclick='job2()'>Learn More</button>");
}


function job1()
{
  document.getElementById('id01').style.display='block';
  document.getElementById("modalheadertext").innerHTML = ("Job Discription")
  document.getElementById("modalparatext").innerHTML = ("As a Developer, working as part of the Solution Delivery Team for Technology and Information Services, you will conduct development work to deliver IT solutions that meet business needs and provide a good user experience.  This will include design, development/configuration and testing.  You will be assigned to a Portfolio Team and work in the following areas: web development, configuration/customisation of business applications, bespoke application development, database development. <br><br> <u>Qualifications</u> <br> * Educated to Bachelor degree level or holds relevant professional qualifications in software development.");
}

function job2()
{
  document.getElementById('id01').style.display='block';
  document.getElementById("modalheadertext").innerHTML = ("Job Discription")
  document.getElementById("modalparatext").innerHTML = ("As Technical Manager (ADA) you will support the Faculty Business Manager, Faculty Technical Manager, and the School Executive (Art, Design & Architecture) in managing a team of 31 technical staff providing a high quality, effective and responsive service to students and staff across the School supporting world class teaching and research.  Supported by Technical Supervisors you will be responsible for the day-to-day operations and leadership of the technical service across a diverse range of subject areas including Architecture, Building, Digital Art & Technology, Fine Art, Graphic Communications, Illustration, Media Arts and Photography. <br><br> <u>Qualifications</u> <br> * You will be educated to degree level (or equivalent), and will have a proven track record of leading, managing or supervising a technical team.  ")
}
function job3()
{
  document.getElementById('id01').style.display='block';
  document.getElementById("modalheadertext").innerHTML = ("Job Discription")
  document.getElementById("modalparatext").innerHTML = ("company are looking for a web developer to work in our Cornwall office to develop high end bespoke business applications. This is an excellent opportunity for someone looking for a career in software development. <br><br> <u>Qualifications</u> <br> * Good knowledge of PHP JQuery and Javascript <br> * Familiar with Git and version control <br> * Excellent communication skills")
}
function job4()
{
  document.getElementById('id01').style.display='block';
  document.getElementById("modalheadertext").innerHTML = ("Job Discription")
  document.getElementById("modalparatext").innerHTML = ("company are looking for a software release engineer to work in our Cornwall office. The role requires working with both developers and project managers to schedule and organise the delivery of software releases. <br><br> <u>Qualifications</u> <br> * A drive to get products delivered <br> * Excellent communication skills <br> * Knowledge of PHP and Python <br> * Good presentation skills ")
}
function job5()
{
  document.getElementById('id01').style.display='block';
  document.getElementById("modalheadertext").innerHTML = ("Job Discription")
  document.getElementById("modalparatext").innerHTML = ("The successful candidate will be joining an existing team here at Headforwards and working on a web application for one of the largest telecoms companies in the world. You will be part of a fast-moving development team delivering multiple releases every day. We fully employ the use of Agile methodologies within our business to better achieve project objectives. <br><br>  <u>Qualifications</u> <br> * Demonstrable JavaScript Development experience <br> * Experience of working with JavaScript frameworks such as Backbone.js/AngularJS and jQuery <br> * Solid understanding of fundamental web technologies – HTML, CSS, AJAX")
}
function job6()
{
  document.getElementById('id01').style.display='block';
  document.getElementById("modalheadertext").innerHTML = ("Job Discription")
  document.getElementById("modalparatext").innerHTML = ("You will work closely with other members of the Senior Management Team, Customers and End Users, Customer Operations Manager teams <br><br> <u>Qualifications</u> <br> * Relevant Tertiary education in Customer Services or Business Administration. <br> * 5+ years’ experience of Customer Service management in a software environment. <br> * Demonstrated ability to lead and mentor team members <br> * A proven ability to work as a member of a team working to tight deadlines <br> * Demonstrated ability to make sound judgments with superior problem-solving skills")
}

function job7()
{
  document.getElementById('id01').style.display='block';
  document.getElementById("modalheadertext").innerHTML = ("Job Discription")
  document.getElementById("modalparatext").innerHTML = ("You will work closely with customers, end users and the Customer Services Manager teams. <br><br> <u>Qualifications</u> <br> * Relevant Tertiary education in Information Technology <br> * 3+ years’ experience in a technical software environment. <br> * Demonstrated ability to make sound judgments with superior problem-solving skills <br> * Possess high-level ethics and integrity <br> * Plan, manage and co-ordinate multiple tasks effectively and efficiently")
}

function search() { //Script from W3 Schools (source: https://www.w3schools.com/howto/howto_js_filter_table.asp)


  var input = document.getElementById("search"); //defines the variable "input" based on the value of the input field
  var filter = input.value.toUpperCase();           //defines the variable "filter" based on the capitalised value of "input"
  var table = document.getElementById("table"); //defines the variable "table" based on the content of the element "table"
  var tablecontent = table.getElementsByTagName("tr"); //defines the variable "tr" based on all element with the <tr> tag

  for (i = 0; i < tablecontent.length; i++) { //Loops through all rows of the table

    td = tablecontent[i].getElementsByTagName("td")[0]; //gets all elements that equal "tr"

    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) //Checks to see if any of the items match the input
      {
        tablecontent[i].style.display = ""; //If the item matches, do nothing
      }
      else
      {
        tablecontent[i].style.display = "none"; //if the items doesn't match, hide.
      }
    }
  }
}
