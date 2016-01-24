<?php
include_once "config.php";

list($n, $handler) = explode("/", $_GET['_url']); //exit("[$handler]". );

$itemJs = "js/components/".ucfirst($handler)."Item.js";
if (!$handler OR !file_exists($itemJs)) "js/components/PromoItem.js";

include_once "collection.php";
