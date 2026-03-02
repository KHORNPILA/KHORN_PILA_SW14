document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault(); 
   var Fullname = document.getElementById("fullName").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;   
    var salary = document.getElementById("salary").value;
    var dob = document.getElementById("dob").value;
    var position = document.getElementById("position").value;
    var description = document.getElementById("description").value;
    var currency =Number(salary).toLocaleString("en-US",{style:"currency", currency:"USD"});

    document.getElementById("result").innerHTML = `
        <div class="card border-success mt-4" style="max-width: 600px; margin: auto;">
            <div class="card-header bg-success text-white d-flex justify-content-between align-items-center">
                <h5 class="mb-0">✓ Information Submitted</h5>
                <button type="button" class="btn btn-link text-white" onclick="document.getElementById('result').innerHTML = ''" style="text-decoration: none;"><i class="bi bi-x-circle"></i></button>
            </div>
            <div class="card-body">
                <p> <i class="bi bi-person-circle text-primary"></i> <strong>Full Name:</strong> ${Fullname}</p>
                <p><i class="bi bi-gender-ambiguous text-secondary"></i> <strong>Gender:</strong> ${gender}</p>
                <p><i class="bi bi-coin text-success"></i> <strong>Salary:</strong> ${currency}</p>
                <p><i class="bi bi-calendar text-warning"></i> <strong>Date of Birth:</strong> ${dob}</p>
                <p><i class="bi bi-briefcase text-info"></i> <strong>Position:</strong> ${position}</p>
                <p><i class="bi bi-pencil-square text-dark"></i> <strong>Description:</strong> ${description}</p>
            </div>
        </div>`;

        
});
