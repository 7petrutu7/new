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

// Verificarea duplicatelor pentru adresa de e-mail
$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "Adresa de e-mail este deja utilizată. Te rog să alegi o altă adresă de e-mail.";
    exit();
}

// Hash-urile parolelor înainte de stocare
$parola_hashed = password_hash($parola, PASSWORD_DEFAULT);

// Inserarea datelor în baza de date
$sql = "INSERT INTO users (nume, email, parola) VALUES (?, ?, ?)";
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
