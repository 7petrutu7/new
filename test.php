
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $title = $_POST["title"];
  $description = $_POST["description"];
  $price = $_POST["price"];

  // conecteaza-te la baza de date si salveaza informatiile despre anunt
  $conn = mysqli_connect("localhost", "root", "", "olx");
  $query = "INSERT INTO ads (title, description, price) VALUES ('$title', '$description', '$price')";
  mysqli_query($conn, $query);

  // redirecteaza utilizatorul la pagina cu lista de anunturi
  header("Location: list_ads.php");
}
?>