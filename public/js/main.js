let tab = $(".s-sidebar__nav-link.active");
$(".s-sidebar__nav-link:not('.active')").on({
    mouseenter: function () {
        tab.removeClass("active");
    },
    mouseleave: function () {
        tab.delay("slow").addClass("active");
    }
});

//------------keep it always on the bottom ---------------//
var headerProfileAvatar = document.getElementById("avatarWrapper");
var headerProfileDropdownArrow = document.getElementById("dropdownWrapperArrow");
var headerProfileDropdown = document.getElementById("dropdownWrapper");

document.addEventListener("click", function (event) {
    var headerProfileDropdownClickedWithin = headerProfileDropdown.contains(event.target);

    if (!headerProfileDropdownClickedWithin) {
        if (headerProfileDropdown.classList.contains("active")) {
            headerProfileDropdown.classList.remove("active");
            headerProfileDropdownArrow.classList.remove("active");
        }
    }
});

headerProfileAvatar.addEventListener("click", function (event) {
    headerProfileDropdown.classList.toggle("active");
    headerProfileDropdownArrow.classList.toggle("active");
    event.stopPropagation();
});
