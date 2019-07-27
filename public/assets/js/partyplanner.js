
$(function() {
    $(".complete-task").on("click", function(event) {
      var id = $(this).data("id");
      var newTask = $(this).data("newtask");
      console.log("TCL: newTask", newTask)
  
      var newTaskState = {
        completed: newTask
      };
  
      // Send the PUT request.
      $.ajax("/api/partyplan/" + id, {
        type: "PUT",
        data: newTaskState
      }).then(
        function() {
          console.log("changed task to", newTask);
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
  console.log(newTask);
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
  
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    let target = button.querySelector('.target');
    function handleMove(e) {
      const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
      const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;
  
      target.style.setProperty('--x', `${ x }px`)
      target.style.setProperty('--y', `${ y }px`)
    }
    button.addEventListener('mousemove', (e) => {
      handleMove(e);
    });
    button.addEventListener('touchmove', (e) => {
      handleMove(e.changedTouches[0]);
    });
  });