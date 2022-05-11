
document.querySelector('button').addEventListener('click', find)

function find() {
  const inputField = document.querySelector('input').value.toLocaleLowerCase()
  

  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${inputField}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
