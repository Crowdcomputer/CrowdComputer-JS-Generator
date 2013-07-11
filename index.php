<?php
//Return JavaScript
header("Content-Type: text/javascript");

//These files are always loaded
//-----------------------------------------------------------------
//Return the content of postMessage library
include('js/postMessage.js');
//-----------------------------------------------------------------
//Return croco js functions
include('js/cc.js');
//-----------------------------------------------------------------

//Depending on the type we attach different functionality
if ($_GET['type']='send_everything')
	include('js/sendAll.js');
?>
