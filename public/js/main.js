
$(document).ready(function () {

    console.log('script loaded')
    let speach = 'i hate you dude'
    let url = "http://127.0.0.1:5000/api?data=" + speach
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data == "Hate speech detected.")
            if (data == "Hate speech detected.") {
                JSON.stringify({ report: data })

                $.post("/saveReport", { 'report': data }, function (result) {
                    console.log(result)

                    $('.report_tb tbody').append(`
                    
                    <tr>
                      <td colspan="2" class="text">${data}</td>
                      <td>11:50 AM</td>
                      <td><i class="fa fa-ellipsis-v"></i></td>
                    </tr>

                    `)

                });

            } else {
                console.log('no hatefull comment')
            }
        })
        .catch(error => console.error(error))

})


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
