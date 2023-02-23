<?php

require_once 'Connections/conexion.php';

$json= file_get_contents('datos.json');

print_r($json);


$data = json_decode($json, true);

print_r($data);

  $stmt = $mysqli ->prepare ("
  
  INSERT INTO PRODUCTO (COD_PRODUCTO, NOMBRE,PRECIO,CATEGORIA, CANT_STOCK,DESCRIPCION, FOTO)
  VALUES (?,?,?,?,?)
  ");

  $stmt ->blind_param("i,s,s,d,s,i,s,s",$cod_p,$nombre,$precio,$categoria,$stock,$description,$foto);

   $inserted_rows=0; 

  foreach($products as $product){

    $cod_p=$products["id"];
    $nombre= $products["name"];
    $precio=$products["precio"];
    $categoria=$products["categoria"];
    $stock=$products["cantidad"];
    $description=$products["description"];
    $foto= $products["src"];

    $stmt-> execute();
    $inserted_rows ++;


  }

  if (count($products)==$inserted_rows){
    echo "succes";
  }else{
    echo "error";
  }

