const openModal = async (index) => {
  var modal = document.getElementById(index);
  var span = document.getElementsByClassName("close")[index + 1];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const queryNews = () => {
  var term = document.getElementById("search").value;
  //   fetch("http://localhost:3000/news/search?query=" + term);
  window.location.replace("http://localhost:3000/news/search?query=" + term);
};

const onDeleteQuery = () => {
  window.location.replace("http://localhost:3000/news");
};
