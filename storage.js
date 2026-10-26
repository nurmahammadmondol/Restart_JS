
const addData = () => {
    const product = document.getElementById('product');
    const pro = product.value;

    const quantity = document.getElementById('quantity');
    const qua = parseInt(quantity.value);

    setData(pro, qua);
};


const setData = (pro, qua) => {
    const data = JSON.parse(localStorage.getItem('name')) || {};
    data[pro] = qua;

    localStorage.setItem('name', JSON.stringify(data));

    getData();
};


const getData = () => {
    const data = JSON.parse(localStorage.getItem('name'));

    const list = document.getElementById('list');
    list.innerHTML = '';

    if (data) {
        for (const product in data) {
            const li = document.createElement('li');

            li.innerHTML = `${product} - ${data[product]}`;

            list.appendChild(li);
        }
    }
};

getData();
