<?php
//Returns JavaScript
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
//-----------------------------------------------------------------
//On form submit sends all the data to CrowdComputer
if ($_GET['type']=='send_all_to_crowdcomputer')
	include('js/sendAll.js');
//-----------------------------------------------------------------
//On form submit sends all the data to Mturk, CrowdComputer
if ($_GET['type']=='send_all_to_mturk')
	include('js/mturk_with_php.js');
?>
