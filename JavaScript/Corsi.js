function toggleDropdown(id) {
    var contents = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < contents.length; i++) {
      if (contents[i].id !== id) {
        contents[i].classList.remove('show');
      }
    }
    var content = document.getElementById(id);
    content.classList.toggle('show');
  }