<?php
//Returns JavaScript
header("Content-Type: text/javascript");
//This file requires jQuery

//These files are always loaded
//-----------------------------------------------------------------
//Return the content of postMessage library
include('js/postMessage.js');
//-----------------------------------------------------------------
//Return croco js functions
include('js/utility.js');
//-----------------------------------------------------------------

//Depending on the type we attach different functionality
//-----------------------------------------------------------------
//On form submit sends all the data to CrowdComputer
if ($_GET['type']=='send_all_to_crowdcomputer')
	include('js/sendToCC.js');
//-----------------------------------------------------------------
//On form submit sends all the data to Mturk, CrowdComputer

if ($_GET['type']=='send_all_to_mturk'){
	//the address of the tunnel file
	?>
	var tunnel_file='tunnel.php';
	<?php
	if (isset($_GET['tunnel_file'])){
		echo "tunnel_file='".$_GET['tunnel_file']."';";
	}
	include('js/sendToMturk.js');
}
?>
