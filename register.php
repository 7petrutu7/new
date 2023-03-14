<?php
// Conectare la baza de date
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Preluarea datelor din formular
$nume = $_POST['nume'];
$email = $_POST['email'];
$parola = $_POST['parola'];
$confirmaparola = $_POST['confirmaparola'];

// Verificarea parolelor
if ($parola !== $confirmaparola) {
    echo "Parolele nu se potrivesc. Vă rugăm să reveniți și să încercați din nou.";
    exit();
}

// Hash-urile parolelor înainte de stocare
$parola_hashed = password_hash($parola, PASSWORD_DEFAULT);

// Inserarea datelor în baza de date
$sql = "INSERT INTO mydb (nume, email, parola) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nume, $email, $parola_hashed);

if ($stmt->execute()) {
    echo "Contul a fost creat cu succes!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>
