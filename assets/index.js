document.addEventListener("DOMContentLoaded", function () {
  const signUpSection = document.getElementById("signUp");
  const conferenceSection = document.getElementById("conference");
  const dependantSection = document.getElementById("dependant");
  const attendanceSection = document.getElementById("attendance");
  const campingSection = document.getElementById("camping");
  const ministeriesSection = document.getElementById("ministeries");
  const ministerSection = document.getElementById("minister");
  const tcgcSection = document.getElementById("tcgc");
  const imgcSection = document.getElementById("imgc");
  const firstTimeSection = document.getElementById("firstTime");
  const expectationSection = document.getElementById("expectation");
  const pastSection = document.getElementById("past");

  // CONFERENCE SECTION
  // Previous button for Conference section
  const prevButton2 = document.getElementById("prev-button-2");
  prevButton2.addEventListener("click", function () {
    signUpSection.style.display = "block";
    conferenceSection.style.display = "none";
  });

  // Next button for Conference section
  const nextButton2 = document.getElementById("next-button-2");
  nextButton2.addEventListener("click", function () {
    const dependantRadio = document.querySelector(
      "input[name='dependant']:checked"
    );
    if (dependantRadio && dependantRadio.value === "yes") {
      // User has dependents, go to Dependant section
      conferenceSection.style.display = "none";
      dependantSection.style.display = "block";
    } else if (dependantRadio && dependantRadio.value === "no") {
      // User does not have dependents, go to Attendance section
      conferenceSection.style.display = "none";
      attendanceSection.style.display = "block";
    } else {
      alert("Please select whether you have a dependant.");
    }
  });

  // Previous button for Dependant section
  const prevButton3 = document.getElementById("prev-button-3");
  prevButton3.addEventListener("click", function () {
    conferenceSection.style.display = "block";
    dependantSection.style.display = "none";
  });

  // Next button for Dependant section
  const nextButton3 = document.getElementById("next-button-3");
  nextButton3.addEventListener("click", function () {
    dependantSection.style.display = "none";
    attendanceSection.style.display = "block";
  });

  // Previous button for Attendance section
  const prevButton4 = document.getElementById("prev-button-4");
  prevButton4.addEventListener("click", function () {
    attendanceSection.style.display = "none";
    conferenceSection.style.display = "block";
  });

  // Next button for Attendance section
  const nextButton4 = document.getElementById("next-button-4");
  nextButton4.addEventListener("click", function () {
    const campingRadio = document.querySelector(
      "input[name='camping']:checked"
    );
    if (campingRadio && campingRadio.value === "yes") {
      // User want to camp, go to Camping section
      attendanceSection.style.display = "none";
      campingSection.style.display = "block";
    } else if (campingRadio && campingRadio.value === "no") {
      // User does not want to camp, go to Ministeries section
      attendanceSection.style.display = "none";
      ministeriesSection.style.display = "block";
    } else {
      alert("Please select whether you'll be camping.");
    }
  });

  // Previous button for Camping section
  const prevButton5 = document.getElementById("prev-button-5");
  prevButton5.addEventListener("click", function () {
    campingSection.style.display = "block";
    attendanceSection.style.display = "none";
  });

  // Next button for Camping section
  const nextButton5 = document.getElementById("next-button-5");
  nextButton5.addEventListener("click", function () {
    campingSection.style.display = "none";
    ministeriesSection.style.display = "block";
  });

  // Previous button for Ministeries section
  const prevButton6 = document.getElementById("prev-button-6");
  prevButton6.addEventListener("click", function () {
    ministeriesSection.style.display = "none";
    attendanceSection.style.display = "block";
  });

  // Next button for Ministeries section
  const nextButton6 = document.getElementById("next-button-6");
  nextButton6.addEventListener("click", function () {
    const ministerRadio = document.querySelector(
      "input[name='minister']:checked"
    );
    if (ministerRadio && ministerRadio.value === "yes") {
      // User is a minister, go to Minister section
      ministeriesSection.style.display = "none";
      ministerSection.style.display = "block";
    } else if (ministerRadio && ministerRadio.value === "no") {
      // User is not a minister, go to TCGC section
      ministeriesSection.style.display = "none";
      tcgcSection.style.display = "block";
    } else {
      alert("Please select whether you're Minister.");
    }
  });

  // Previous button for Minister section
  const prevButton7 = document.getElementById("prev-button-7");
  prevButton7.addEventListener("click", function () {
    ministerSection.style.display = "none";
    ministeriesSection.style.display = "block";
  });

  // Next button for Minister section
  const nextButton7 = document.getElementById("next-button-7");
  nextButton7.addEventListener("click", function () {});

  // Prev button for TCGC section
  const prevButton8 = document.getElementById("prev-button-8");
  prevButton8.addEventListener("click", function () {
    ministeriesSection.style.display = "block";
    tcgcSection.style.display = "none";
  });

  // Next button for TCGC section
  const nextButton8 = document.getElementById("next-button-8");
  nextButton8.addEventListener("click", function () {
    const memberRadio = document.querySelector("input[name='member']:checked");
    if (memberRadio && memberRadio.value === "yes") {
      // User is a member of TCGC, go to IMGC section
      tcgcSection.style.display = "none";
      imgcSection.style.display = "block";
    } else if (memberRadio && memberRadio.value === "no") {
      // User does not have dependents, go to First Time section
      tcgcSection.style.display = "none";
      firstTimeSection.style.display = "block";
    } else {
      alert("Please select whether you're TCGC Member.");
    }
  });

  // Previous button for IMGC section
  const prevButton9 = document.getElementById("prev-button-9");
  prevButton9.addEventListener("click", function () {
    imgcSection.style.display = "none";
    tcgcSection.style.display = "block";
  });

  // Next button for IMGC section
  const nextButton9 = document.getElementById("next-button-9");
  nextButton9.addEventListener("click", function () {
    imgcSection.style.display = "none";
    firstTimeSection.style.display = "block";
  });

  // Prev button for First tIme section
  const prevButton10 = document.getElementById("prev-button-10");
  prevButton10.addEventListener("click", function () {
    firstTimeSection.style.display = "block";
    tcgcSection.style.display = "none";
  });

  // Next button for FirstTime section
  const nextButton10 = document.getElementById("next-button-10");
  nextButton10.addEventListener("click", function () {
    const firstTimeRadio = document.querySelector(
      "input[name='firstTime']:checked"
    );
    if (firstTimeRadio && firstTimeRadio.value === "yes") {
      // User first time, go to expectation section
      firstTimeSection.style.display = "none";
      expectationSection.style.display = "block";
    } else if (firstTimeRadio && firstTimeRadio.value === "no") {
      // This is not user first time, go to past section
      firstTimeSection.style.display = "none";
      pastSection.style.display = "block";
    } else {
      alert("Please select whether this is your first time.");
    }
  });

  // Previous button for Expectation section
  const prevButton11 = document.getElementById("prev-button-11");
  prevButton11.addEventListener("click", function () {
    expectationSection.style.display = "none";
    firstTimeSection.style.display = "block";
  });

  // Previous button for Past section
  const prevButton12 = document.getElementById("prev-button-12");
  prevButton12.addEventListener("click", function () {
    pastSection.style.display = "none";
    firstTimeSection.style.display = "block";
  });
});

// VALIDATION
// Field validation for SignUp Section
function signUpFields() {
  var email = document.getElementById("email");
  var lname = document.getElementById("lname");
  var fname = document.getElementById("fname");
  var gender = document.getElementById("gender");
  var occupation = document.getElementById("occupation");
  var city = document.getElementById("city");
  var country = document.getElementById("country");
  var age = document.getElementById("age");

  // sections
  const signUpSection = document.getElementById("signUp");
  const conferenceSection = document.getElementById("conference");
  //
  var fields = [
    email,
    lname,
    fname,
    phone,
    gender,
    occupation,
    city,
    country,
    age,
  ];
  var emptyFields = [];

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value === "") {
      emptyFields.push(fields[i]);
    }
  }

  if (emptyFields.length > 0) {
    alert("Please fill in all required fields.");

    // Highlight empty fields
    emptyFields.forEach(function (field) {
      field.style.borderColor = "red";
    });
  } else {
    signUpSection.style.display = "none";
    conferenceSection.style.display = "block";

    // Reset field borders
    fields.forEach(function (field) {
      field.style.borderColor = ""; // Reset to default
    });
  }
}

// Field validation for Ministers Section
function ministersFields() {
  var church = document.getElementById("church");

  // sections
  const ministerSection = document.getElementById("minister");
  const tcgcSection = document.getElementById("tcgc");
  //
  var fields = [church];
  var emptyFields = [];

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value === "") {
      emptyFields.push(fields[i]);
    }
  }

  if (emptyFields.length > 0) {
    alert("Please tell us the name of your Church/Fellowship.");

    // Highlight empty fields
    emptyFields.forEach(function (field) {
      field.style.borderColor = "red";
    });
  } else {
    ministerSection.style.display = "none";
    tcgcSection.style.display = "block";

    // Reset field borders
    fields.forEach(function (field) {
      field.style.borderColor = ""; // Reset to default
    });
  }
}
