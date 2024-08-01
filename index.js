// document.addEventListener('DOMContentLoaded', () => {
//   let newName = document.querySelectorAll('#input').value;
//   console.log(newName);
//   document.addEventListener('click', function () {
//     document.querySelector('.answer').innerHTML = `ახლა მე ${newName} ვარ`;
//   });
// });

document.querySelector('#submit').addEventListener('click', function () {
  let newName = document.querySelector('#input').value;
  document.querySelector('.answer').innerHTML = `ახლა მე ${newName} ვარ`;
  if (newName === 'ეკა') {
    document.querySelector('.answer').innerHTML = `რა გვარი ხარ  ${newName}?`;
  } else if (newName === 'ჩხოლარია') {
    document.querySelector(
      '.answer'
    ).innerHTML = `აა, ვიცი, ბაჩოს ცოლი ხარ, აი შენი ფოტოც!`;
    document.querySelector('#image').style.display = 'block';
  } else if (newName === 'ლუკა') {
    document.querySelector(
      '.answer'
    ).innerHTML = `ააა, ლუკა რამიშვილი ხარ შენ! ბაჩოს შვილი ხარ. პატარა ფისო!`;
    document.querySelector('#photo').style.display = 'block';
  } else if (newName === 'ქეთი') {
    document.querySelector(
      '.answer'
    ).innerHTML = `გიცანი ქეთი! აი შენი ფოტოც, აჰაჰა!`;
    document.querySelector('#image').style.display = 'block';
  } else if (newName === 'ირმა') {
    document.querySelector(
      '.answer'
    ).innerHTML = `აჰა, ბედკრული საქართველოს შვილი, ირმა ვირიშვილი!`;
    document.querySelector('#image').style.display = 'block';
  }
});
