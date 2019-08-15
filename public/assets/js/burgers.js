// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  // modify
  $(".eatburger").on("click", function (event) {
    console.log("eatburger button clicked");
    event.preventDefault(); // not sure this is needed
    var id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true // always true, we can not un-devour in this app
    }).then(
      function () {
        console.log("changed devour to 'true'");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // create
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var name = $("#newBurger").val().trim(); 
    console.log("burgers - create '" +name+ "'");
 
    if(name !== "") {
        var newBurger = {
            name: name
        };

        // Send the POST request.
        $.ajax("/api/burgers/"+name, {
            type: "POST",
            data: newBurger
        }).then(function() {
            // console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    }
    else {
        $("[name=burger-name]").val("");
    }



    // var newBurger = {
    //   name: name
    // };
    // console.log("burgers - create '" +name+ "'");
    // // Send the POST request.
    // $.ajax("/api/burgers", {
    //   type: "POST",
    //   data: newBurger
    // }).then(
    //   function () {
    //     console.log("created new burger");
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
  });

  // delete
  $(".deleteBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

});