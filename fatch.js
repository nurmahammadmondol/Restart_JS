fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => loadUser(data));

const loadUser = (data) => {
  const userSection = document.getElementById('userData');

  data.forEach(user => {
    const div = document.createElement('div');
    console.log(user)

    div.innerHTML = `
      <div>
        <h3>Name : ${user.name}</h3>
        <p>Email : ${user.email}</p>
        <p>Website : ${user.website}</p>
      </div>
    `;

    userSection.appendChild(div);
  });
};