// daigon-drop----------

$(document).ready(function () {
    // Handle dropdown toggle
    $('.dropdown-item.dropdown-toggle').on('click', function (e) {
        e.preventDefault();

        const $this = $(this); // Get the clicked dropdown
        const $parentDropdown = $this.closest('.dropdown-menu'); // Get the parent dropdown

        // If the clicked dropdown is already open, close it
        if ($this.next('.dropdown-menu').is(':visible')) {
            $this.next('.dropdown-menu').slideUp(); // Close it
        } else {
            // Close any other open dropdowns in the same parent dropdown
            $parentDropdown.find('.dropdown-menu').slideUp();
            // Then open the clicked dropdown
            $this.next('.dropdown-menu').slideDown();
        }
    });

    // Close dropdowns when clicking outside of them
    $(document).on('click', function (e) {
        // If the clicked element is not inside any dropdown
        if (!$(e.target).closest('.dropdown-menu').length && !$(e.target).closest('.dropdown-toggle').length) {
            // Close all open dropdowns
            $('.dropdown-menu').slideUp();
        }
    });
});



///------------------vedio popup ----------------------
