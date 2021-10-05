fetch('http://localhost:1000/movies')
  .then(response => response.json())
  .then(json => {
    json.forEach(
      elt =>
        (document.querySelector('p').innerHTML +=
          'titel:' +
          elt.title +
          '<br>' +
          'year:' +
          elt.year +
          '<br>' +
          'director:' +
          elt.director +
          '<br>')
    )
  })
