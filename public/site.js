document.addEventListener('DOMContentLoaded', function(){ 
  document.getElementById("submit").addEventListener("click", ()=>{
    var empId = document.getElementById("empId").value;
    let elems = document.getElementsByClassName("info");

    Array.from(elems).forEach((e) => {
      e.innerHTML = "";
    })

    fetch(`/getEmployeeInfo?empId=${empId}`)
    .then(res => res.json())
    .then(data => {
      let keys = Object.keys(data);
      keys.forEach((k) => {
        document.getElementById(`${k}`).innerHTML = data[k];
      })
      fetch(`/getOrgInfo?department=${data["department"]}`)
      .then(res => res.json())
      .then(data => {
        let keys = Object.keys(data);
        keys.forEach((k) => {
          if (document.getElementById(`${k}`)){
            document.getElementById(`${k}`).innerHTML = data[k];
          }
        })
        fetch(`/getEmployeeInfo?empId=${data["managerId"]}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          document.getElementById("managerName").innerHTML = `${data["firstName"]} ${data["lastName"]}`
        })
      })
    })
    
  });
}, false);