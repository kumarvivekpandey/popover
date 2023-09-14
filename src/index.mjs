// Get the trigger element and popover content element
const trigger = document.getElementById('popover-trigger');
const popover = document.getElementById('popover-content');

// Function to show the popover
function showPopover() {
  popover.style.display = 'block';
}

// Function to hide the popover
function hidePopover() {
  popover.style.display = 'none';
}

// Attach event listeners to show and hide the popover
trigger.addEventListener('mouseenter', showPopover);
trigger.addEventListener('mouseleave', hidePopover);

// Close the popover if the user clicks outside of it
document.addEventListener('click', function (event) {
  if (!popover.contains(event.target) && event.target !== trigger) {
    hidePopover();
  }
});

