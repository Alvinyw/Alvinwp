<?php
function getfoot(){
	if(of_get('footer')){
		echo ' - ';
	}
	echo '关于<a href="http://alvinwp.com/default/1" target="_black">博客</a>';
}