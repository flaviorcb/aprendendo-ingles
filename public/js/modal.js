
let modal = document.querySelector('#myModal');
let listButtons = document.querySelectorAll('.btn-edit');
let span = document.querySelectorAll('.close')[0];

let txtOriginal = document.querySelector('#txtOriginalForm');
let txtTraducao = document.querySelector('#txtTraducaoForm');
let hiddenId = document.querySelector('#hiddenIdForm');





console.log(modal, listButtons, span);

for (let i = 0; i < listButtons.length; i++) {
    listButtons[i].addEventListener('click', function () {
        txtOriginal.value = listButtons[i].dataset.original;
        txtTraducao.value = listButtons[i].dataset.traducao;
        hiddenId.value = listButtons[i].dataset.id;
        modal.style.display = 'block';
        console.log('clicou no botão');
    });
}


span.addEventListener('click', function () {
    modal.style.display = 'none';
});