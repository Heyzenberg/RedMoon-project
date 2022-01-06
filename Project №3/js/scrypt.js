let settingDown = document.querySelector('#dropSetting');

settingDown.addEventListener('click', function(e){

    e.path.includes(this.querySelector('.item_list'));

    this.classList.toggle('active');
} )