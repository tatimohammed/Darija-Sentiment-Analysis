function predictSentiment() {
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];
    var formData = new FormData();
    var pos = 50;
    var neg = 50;
    formData.append('f0', file);

    $.ajax({
        url: 'http://587d-34-147-104-139.ngrok.io/predict',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log(data);

            pos = (parseInt(data["pos"]) / parseInt(data["len"])) * 100
            neg = 100 - pos
            console.log(pos);
            console.log(neg);
            var xValues = ["Positive", "Negative"];
            var yValues = [pos, neg];
            var barColors = ["green", "red"];
            new Chart("myChart", {
                type: "pie",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "World Wide Wine Production"
                    }
                }
            });

        }
    });


}

function createPieChart() {

}
