<?php

$defineComputador = [
    'defineMarca' => $_POST['marca'],
    'defineSituacao' => $_POST['situacao'],
    'descricao' => $_POST['desc'],
    'foto' => $_POST['foto'],
];

file_put_contents('filme.json', json_encode($defineComputador));

header('Location: /sucesso.php?filme=' . $defineComputador['nome']);