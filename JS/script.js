function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    var arrow = document.querySelector('.arrow');

    dropdown.classList.toggle('active');
    arrow.classList.toggle('up', dropdown.classList.contains('active'));
}


