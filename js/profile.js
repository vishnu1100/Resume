const profile = {
  title: "VISHNU SANTHOSH",
  job: "Software Developer",
  about:
    " I'm a junior web developer focused on web designing & backend development using Python frameworks like Django. Currently I am developing my skill in the field of frontend development,studying deeper fundamentals and also learning to use a frontend technology.",
  address: "Rohini thekkevila p.o, kollam, Kerala",
  email: "vishnusanthoshvr@gmail.com",
  phone: "+91 9746083905",
};

const { title, job, about, address, email, phone } = profile;

const nameValue = document.querySelector("h1.home_title");
const jobValue = document.querySelector(".home_proffesion");
const aboutValue = Array.from(
  document.querySelectorAll(".profile_description")
);
const informationValue = Array.from(
  document.querySelectorAll(".home_information")
);

nameValue.innerHTML = title;
jobValue.innerHTML = job;

const infomationData = [];

const addressText = infomationData.push(document.createTextNode(address));
const emailText = infomationData.push(document.createTextNode(email));
const numberText = infomationData.push(document.createTextNode(phone));

informationValue.map((value, index) => {
  value.appendChild(infomationData[index]);
});

aboutValue.map((value) => {
  value.innerHTML = about;
});
