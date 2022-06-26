let url="https://jsonplaceholder.typicode.com/users";
fetch(url)
.then(res => res.json())
.then(data =>{
    
    let html='';
data.map(value =>{

  
    html+=`

    <div class="col-md-3">
    <div class="card" style="width:400px">
        <img class="card-img-top" src="/images/capturer.png" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-title">${value.name}</h4>
          <h3 class="card-description">${value.address.city}</h3>
          <p class="card-text">${value.phone}</p>
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
