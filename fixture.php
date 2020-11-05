<?php

$equipos = 6;

$inicio = 0;
$fin    = 1;

for($i = 0; $i < $equipos; $i++){

    if($i == 0){

        for($ii = 0; $ii < $equipos; $ii++){
            
            if($ii == 0){
                $fixture[$i][$ii] = $ii;
            }else{
                $fixture[$i][$ii] = $ii;
                $control[$ii] = $ii;  
            }

        }

    }



}

echo "<pre>";
var_dump($fixture);
echo "</pre>";

echo "<pre>";
var_dump($control);
echo "</pre>";