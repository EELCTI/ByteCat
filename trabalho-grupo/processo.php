<?php
$dbFile = __DIR__ . '/assets/data/bancoDadosPC.sqbpro';

try {
    $pdo = new PDO('sqlite:' . $dbFile);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('DB connection failed: ' . $e->getMessage());
}

$defineComputador = [
    'defineMarca' => $_POST['marca'] ?? null,
    'defineSituacao' => $_POST['situacao'] ?? null,
    'descricao' => $_POST['desc'] ?? null,
    'foto' => $_POST['foto'] ?? null,
];


$pdo->exec("CREATE TABLE IF NOT EXISTS computadores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    marca TEXT,
    situacao TEXT,
    descricao TEXT,
    foto TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

$stmt = $pdo->prepare('INSERT INTO computadores (marca, situacao, descricao, foto) VALUES (:marca, :situacao, :descricao, :foto)');
$stmt->execute([
    ':marca' => $defineComputador['defineMarca'],
    ':situacao' => $defineComputador['defineSituacao'],
    ':descricao' => $defineComputador['descricao'],
    ':foto' => $defineComputador['foto'],
]);

$insertId = $pdo->lastInsertId();

header('Location: /sucesso.php?id=' . $insertId);
exit;