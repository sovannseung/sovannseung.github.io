$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
            "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    //var guestList = "You need to modify this method to display the updated guest list.  Remember to build the entire list before adding it to the DOM.";
    var guestList = "<select>";
    for(var i=0; i<data.length; i++){
        guestList+= "<option value=" + data[i].first + data[i].last + ">" + data[i].first + " " + data[i].last + "</option>";
    }
    guestList+= "</select>"

    $("#guestList").html(guestList);

}