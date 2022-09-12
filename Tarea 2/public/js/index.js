const openModal = async (index) => {
  var modal = document.getElementById(index);
  var span = document.getElementsByClassName("close")[index];
  modal.style.display = "block";
  span.onclick = function () {
    console.log(index);
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      console.log(index);
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
