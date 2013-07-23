CrowdComputer-JS-Generator
==========================
<h5>It is a tool, which generates an appropriate JS file for interacting of external web-page with
CrowdComputer and Amazon Mechanical TURK.</h5>

Here is an example of the page, which sends data to both <strong>CrowdComputer</strong> and <strong>MTURK</strong>

		<h1>Hello John!</h1>
		
		<form action="" method="POST">
			<input type="text" id='firstname' name="firstname" value="my name">
			<input type="text" id='lastname' name="lastname" value="my lastname">
			<input type="submit" value="save">
		</form>
		
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script src="http://static.crowdcomputer.org/CC-JS-Generator/?type=send_all_to_mturk"></script>


<hr/>
<h4>Deployed version:</h4>
<p>
<a target='_blank' href='http://static.crowdcomputer.org/CC-JS-Generator/'>http://static.crowdcomputer.org/CC-JS-Generator/</a>
</p>
<h4>Settings:</h4>
<p>
	<strong>no parameters</strong> - provides a function <i>sendDataToCC</i>,
</p>
<p>
	<strong>?type=send_all_to_crowdcomputer</strong> - sends all the data from the submitted form to CrowdComputer via <i>sendDataToCC</i>
</p>
<p>
	<strong>?type=send_all_to_mturk</strong> - sends all the data from the submitted form to CrowdComputer and MTURK. It also requires a <i>tunnel.php</i> file. If you have this file not in a root directoty, add an additional parameter <strong>?tunnel_file=path/to/the/file.php</strong>.
</p>

<hr/>
feel free to contribute
