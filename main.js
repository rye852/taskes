window.localStorage.removeItem('remember-me');
let inpText = document.querySelector('.form .text');
let inpAdd = document.querySelector('.form .add');
let deleteBtn;
let btn;

if (window.localStorage.length > 0) {
  for (let i = 0; window.localStorage.length > i; i++) {
    let newTask = document.createElement('div');
    let myP = document.createElement('p');
    let content = document.createTextNode(
      localStorage.getItem(localStorage.key(i))
    );
    deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    // calses
    newTask.classList.add('new-task');
    deleteBtn.classList.add('delete');
    myP.append(content);
    newTask.append(myP, deleteBtn);
    document.querySelector('.taskes').append(newTask);
    btn = document.querySelectorAll('.delete');
    btn = document.querySelectorAll('.delete');
    btn.forEach((but) => {
      but.addEventListener('click', () => {
        console.log(but.previousElementSibling.textContent);
        window.localStorage.removeItem(but.previousElementSibling.textContent);
        but.parentElement.remove();
      });
    });
  }
}

inpAdd.addEventListener('click', () => {
  if (inpText.value != '') {
    window.localStorage.setItem(inpText.value, inpText.value);
    let newTask = document.createElement('div');
    let myP = document.createElement('p');
    let content = document.createTextNode(localStorage.getItem(inpText.value));
    deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    // calses
    newTask.classList.add('new-task');
    deleteBtn.classList.add('delete');
    myP.append(content);
    newTask.append(myP, deleteBtn);
    document.querySelector('.taskes').append(newTask);
  }
  //delete btn
  btn = document.querySelectorAll('.delete');
  btn.forEach((but) => {
    but.addEventListener('click', (e) => {
      window.localStorage.removeItem(but.previousElementSibling.textContent);
      but.parentElement.remove();
    });
  });
});
