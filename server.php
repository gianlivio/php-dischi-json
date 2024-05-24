<?php

// prelievo dati

$dischi_json = file_get_contents("dischi.json"); // trasofrma il file json in string

// trasformo una string in un array utilizzando la funzione json_decode, passandogli sia la stringa che il valore booleano true. Quest'ultimo trasforma l'array in un array associativo
$dischi_array = json_decode($dischi_json, true);

// stampa
// var_dump($dischi_array);


// elaborazione logica


// Output: gestione della risposta
// creo una variabile response che contiene delle chiavi e dei valori
$response = [
    "results" => $dischi_array,
    "success" => true
];

// encode trasformai dati da text type a json type
$response_json = json_encode($response);


header("Content-Type: application/json");
echo $response_json;