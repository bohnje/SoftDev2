function Obligation (obligationid, userid, name, description, startTime, endTime, priority, status, category)
{
    this.obligationid = obligationid;
    this.userid = userid;
	this.name = name
	this.description = description
	this.startTime = startTime
	this.endTime = endTime;
	this.priority = priority;
	this.status = status;
	this.category = category;
}

Obligation.prototype.toString = function() {
    return "Name: "+ this.name + "\nDescription: "+this.description+ "\nStart time:"+this.startTime+"\nEnd Time:"+this.endTime+"\n";
}

function deleteObligation(obligation_id) {
    var path = "/obligations/" + obligation_id;
    $.ajax({
        url: path,
        type: 'DELETE',
        success: function() {
            $.bootstrapGrowl("Obligation was successfully deleted!", { 
                type: 'success',
                allow_dismiss: true,
                align: 'center',
                width: 'auto',
                offset: {from: 'top', amount: 200}
            });
            location.reload();
        },
        error: function(){
            $.bootstrapGrowl("We were unable to delete obligaion " + obligation_id + "! Try again shortly.", { 
                type: 'info',
                allow_dismiss: true,
                align: 'center',
                width: 'auto',
                offset: {from: 'top', amount: 200}
            });
            location.reload();
        }
    });
}
