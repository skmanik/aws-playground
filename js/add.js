$(document).ready(() => {
    console.log("Hello!");

    $("#submit-form").click(event => {
        event.preventDefault();

        let title = $("#contract-title").val().trim();
        let summary = $("#contract-summary").val().trim();

        console.log("Submit has been clicked!");

        let newContract = {
            title: title,
            summary: summary,
        }

        console.log("NEW FORM", newContract);

        // post comment to api
        $.ajax({
            method: "POST",
            url: "https://uwcxmaj4x0.execute-api.us-west-2.amazonaws.com/staging/contracts",
            data: newContract
        });
    });
});