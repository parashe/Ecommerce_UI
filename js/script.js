//for sliding slider of explore page
$(document).ready(function () {
  $("#customRange1").on("input", function () {
    var value = $(this).val();
    $("#sliderValue").text(value);
  });
});

//map

$(document).ready(function () {
  // Create a map instance
  var map = L.map("map").setView([52.5187, -1.9945], 16);

  // Add a tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  // Add a marker to the map
  var marker = L.marker([52.5187, -1.9945]).addTo(map);

  // Add a popup to the marker
  marker.bindPopup("<b>Hello, Parash!</b><br>Online shop").openPopup();
});
I;

///navbar
$(document).ready(function () {
  // Toggle the navbar dropdown on click
  $(".nav-list > li").click(function () {
    $(this).find(".navbar-dropdown").toggle();
  });

  // Toggle the mobile view on click
  $("#navbar-toggle").click(function () {
    $(".nav-list").toggleClass("active");
  });

  // Close the navbar dropdown and mobile view when clicking outside of them
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".nav-list").length &&
      !$(event.target).closest("#navbar-toggle").length
    ) {
      $(".navbar-dropdown").hide();
      $(".nav-list").removeClass("active");
    }
  });
});

(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".navbar-dropdown").slideToggle("slow");

      // Close dropdown when select another dropdown
      $(".navbar-dropdown").not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $("html").click(function () {
      $(".navbar-dropdown").hide();
    });
  });
})(jQuery);

$(document).ready(function () {
  // Toggle the navbar dropdown on click
  $(".nav-list > li").click(function () {
    $(this).find(".navbar-dropdown").toggle();
  });

  // Toggle the mobile view on click
  $("#navbar-toggle").click(function () {
    $(".nav-list").toggleClass("active");
  });

  // Close the navbar dropdown and mobile view when clicking outside of them
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".nav-list").length &&
      !$(event.target).closest("#navbar-toggle").length
    ) {
      $(".navbar-dropdown").hide();
      $(".nav-list").removeClass("active");
    }
  });
});

$(document).ready(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".navbar-dropdown").slideToggle("slow");

      // Close dropdown when select another dropdown
      $(".navbar-dropdown").not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $("html").click(function () {
      $(".navbar-dropdown").hide();
    });
  });
});
