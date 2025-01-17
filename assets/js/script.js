var formEl = $("#skills-form");
var nameInputEl = $("#skill-name");
var dateInputEl = $("#datepicker");
var skillsListEl = $("#skills-list");

var printSkills = function (name, date) {
  var listEl = $("<li>");
  var listDetail = name.concat(" on ", date);
  listEl.addClass("list-group-item").text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log("You need to fill out the form!");
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val("");
  dateInputEl.val("");
};

formEl.on("submit", handleFormSubmit);

// TODO: Add comments to describe the functionality of this jQuery UI interaction
// This IIFE function has the skillNames list that will be used as autocomplete items
// Then we use jQuery autocomplete method that will need to query the input box and method will
// listen your keyword then suggest the words from the list that you give as source.
$(function () {
  var skillNames = [
    "Bootstrap",
    "C",
    "C++",
    "CSS",
    "Express.js",
    "Git",
    "HTML",
    "Java",
    "JavaScript",
    "jQuery",
    "JSON",
    "MySQL",
    "Node.js",
    "NoSQL",
    "PHP",
    "Python",
    "React",
    "Ruby",
  ];
  $("#skill-name").autocomplete({
    source: skillNames,
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
// This IIFE function use the jQuery datepicker method. That method help us to pick the date
// easily with highly configurable plugin. In this case we use changeMonth and changeYear
// for allowing user to choose the month and year.
$(function () {
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
// This function is Immediately Invoked Function Expression (IIFE) and It automatically invoked when ready
// with the power of jQuery. It query the #skills-list and use sortable method. That method need the placeholder
// so use the jQuery theme value 'ui-state-highlight' for selected value. so you can move sort that queried list
// The last one is for disable selection but that method link deprecated during this comment

$(function () {
  $("#skills-list").sortable({
    placeholder: "ui-state-highlight",
  });
  $("#skills-list").disableSelection();
});
