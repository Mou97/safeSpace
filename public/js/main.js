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