// BUSINESS LOGIC

function fullName(firstName, lastName) {
  return firstName + lastName;
}

// UI LOGIC 

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const firstName = $("#name1").val();
    const lastName = $("#name2").val();
    const result = (firstName + " " + lastName);
    $("#output").text(result + " - " + flavor.toUpperCase());
  });
});