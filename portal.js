function validateportal(){
    console.log("validateportal...");
    let valid = true;

    let ticketData = data[Ticket_ID];
    for (let Ticket_ID = 0; Ticket_ID < data.length; Ticket_ID++) {
      const ticketData = data[Ticket_ID]; // Get the data for the current ticket
    
      // Perform validation on the ticket data here
      if (!ticketData.name) {
        console.error(`Missing name for ticket ${Ticket_ID}`);
      }
      if (!ticketData.price || isNaN(ticketData.price)) {
        console.error(`Invalid price for ticket ${Ticket_ID}`);
      }
      if (someCondition) {
        break;
      }
    }
    
    let Tittle =document.getElementById("tittle");
    let Email = document.getElementById("email").value;
    let Ticket_Description = document.getElementById("tickDes").value;
    let Priority = document.getElementById("prior").value;

    console.log("ticketID =" + Ticket_ID);
    console.log("tittle =" + Tittle);
    console.log("email =" + Email);
    console.log("tickDes =" + Ticket_Description);
    console.log("prior =" + Priority);

    document.getElementById("tittleError").innerHTML ='';
    document.getElementById("emailError").innerHTML ='';
    document.getElementById("ticketDiscripError").innerHTML ='';
    document.getElementById("priorityError").innerHTML ='';

    

      
        if(Ticket_ID == ""){
   console.log("generate an id");
   document.getElementById('ticketIDError').innerHTML ='';
   document.getElementById('ticket_id').innerHTML ='';
   return Math.random().toString(36).substring(2, 8);
   }
    if (Tittle == "") {
      console.log("tittle is emtpy");
      documents.getElementById('tittleError').innerHTML ='no tittle....?';
      document.getElementById('tittle').focus();
      valid = false;
      return valid;
    }
    if (Email == ""){
      console.log("email is empty");
      document.getElementById('emailError').innerHTML ='email Id please...'
      document.getElementById('email').focus();
      valid = false;
      return valid;
    }
    if (Ticket_Description == "") {
      console.log("ticketDescrition is empty");
      document.getElementById('ticketDescritionError').innerHTML ='Description....';
      document.getElementById('tickDes').focus();
      valid = false;
      return valid;
    }

  console.log("End validateportal..");
  }

function validateReview(){

    let valid = true;
        let Priority = document.getElementById("prior").value;
        let Assigned_To = document.getElementById("assignTo").value;
        let Status = document.getElementById("stat").value;
        
        console.log("prior =" + Priority);
        console.log("assignTo =" + Assigned_To);
        console.log("stat =" + Status);

        
        
        document.getElementById("priorityError").innerHTML ='';
        document.getElementById("Assigned_ToError").innerHTML ='';
        document.getElementById("statusError").innerHTML ='';
    
       
          
          if (Assigned_To == "") {
            console.log("Assigned_To is empty");
            document.getElementById('Assigned_ToError').innerHTML ='Assigned name please....';
            document.getElementById('assignTo').focus();
            valid = false;
            return valid;
          }
          if (Priority == ""){
            console.log("priority is Empty");
            document.getElementById('priortyError').innerHTML ='Please Slect Priority';
            document.getElementsByName('priority').focus();
            valid = false;
            return valid; 
          }
          if(Status == ""){
            console.log("status not slectected");
            document.getElemnetByID('statusError').innerHTML ='Please Select Status';
            document.getElementById('stat').focus();
            valid = false;
            return valid;

          }
    
      console.log("End validateportal..");
      }
