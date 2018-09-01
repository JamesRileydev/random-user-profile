window.onload = function () {

  var url = "https://randomuser.me/apidfdffdfsdsdsd";
  var fullnameDisp = this.document.querySelector('#fullname');
  var avatar = this.document.querySelector('#avatar');
  var username = this.document.querySelector('#username');
  var email = this.document.querySelector('#email');
  var city = this.document.querySelector('#city');

  // var btn = document.('#btn');
  // btn.addEventListener('click', function () {
  this.fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(function (err) {
      console.log(err);
    });
  // });

  function parseJSON(res) {
    return res.json().then(function (parsedData) {
      return parsedData.results[0];
    })
  }

  function updateProfile(data) {
    console.log(data);
    var fullName = data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullName;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    email.innerText = data.email;
    city.innerText = data.location.city;
  }

  function handleErrors(res) {
    if(!res.ok) {
      throw Error(res.status);
    }
    return res;
  }

}

