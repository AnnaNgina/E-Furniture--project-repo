document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("form-container")
  form.addEventListener('submit', function (event) {
      event.preventDefault()
      const fullName = document.getElementById('fname').value
      console.log(fullName)
      const yourEmail = document.getElementById('email').value
      console.log(yourEmail)
      const itemDescription = document.getElementById('description-form1').value
      console.log(itemDescription)  
      const donFile = document.getElementById('myFile').value
      console.log(donFile)
  }
)
}
)
const input = document.getElementById("button")
function clickAlert() 
{ alert("Thank you! write your request below");
 }
 input.addEventListener('click', clickAlert);



let url="http://localhost:3000/rentals";
fetch(url)
.then(res =>res.json())
.then(data =>{
    
    let html='';
data.map(value =>{

  
    html+=`

    <div class="col-md-4">
    <div class="card" style="width:400px">
        <img class="card-img-top" src="${value.imageurl}" style="width:100%">
        <div class="card-body">
          <h4 class="card-title">${value.price}</h4>
          <h3 class="card-description">${value.type}</h3>
          <p class="card-text">${value.location}</p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
</div>
`
}
)
document.getElementById('houses').innerHTML=html;
})
.catch((err)=>console.log(err))
