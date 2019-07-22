
$(function() {
    $(".complete-task").on("click", function(event) {
      var id = $(this).data("id");
      var newComplete = $(this).data("newcomplete");
  
      var newCompleteState = {
        completed: newComplete
      };
  
      // Send the PUT request.
      $.ajax("/api/partyplan/" + id, {
        type: "PUT",
        data: newCompleteState
      }).then(
        function() {
          console.log("changed task to", newComplete);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTask = {
        name: $("#ta").val().trim(),
        completed: $("[name=completed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/partyplan", {
        type: "POST",
        data: newTask
      }).then(
        function() {
          console.log("created new task");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-task").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/partyplan/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted task", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  