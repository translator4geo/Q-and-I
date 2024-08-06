document.querySelector('#submit').addEventListener('click', function () {
  let newName = document.querySelector('#input').value;
  document.querySelector('.answer').innerHTML = `ახლა მე ${newName} ვარ`;

  switch (newName) {
    case 'ეკა':
      document.querySelector('.answer').innerHTML = `რა გვარი ხარ  ${newName}?`;
      break;
    case 'ლუკა':
      document.querySelector(
        '.answer'
      ).innerHTML = `ააა, ლუკა რამიშვილი ხარ შენ! ბაჩოს შვილი ხარ. პატარა ფისო!`;
      document.querySelector('#photo').style.display = 'block';
      break;
    case 'ქეთი':
      document.querySelector(
        '.answer'
      ).innerHTML = `გიცანი ქეთი! აი შენი ფოტოც, აჰაჰა!`;
      document.querySelector('#image').style.display = 'block';
      break;
    case 'ირმა':
      document.querySelector(
        '.answer'
      ).innerHTML = `აჰა, ბედკრული საქართველოს შვილი, ირმა ვირიშვილი!`;
      document.querySelector('#image').style.display = 'block';
      break;
    case 'ჩხოლარია':
      document.querySelector(
        '.answer'
      ).innerHTML = `აა, ვიცი, ბაჩოს ცოლი ხარ, აი შენი ფოტოც!`;
      document.querySelector('#image').style.display = 'block';
      break;
    case 'მარიამი':
      document.querySelector(
        '.answer'
      ).innerHTML = `გამარჯობა შენი, ბოშ. რა გვარი ხარ მაგალითად?`;
      break;
    case 'ჭკადუა':
      document.querySelector(
        '.answer'
      ).innerHTML = `ააა, ვიცი, მაკას გოგო ხარ. აი შენი საოცნებო მანქანა!`;
      document.querySelector('#mariam').style.display = 'block';
      break;
  }
});
