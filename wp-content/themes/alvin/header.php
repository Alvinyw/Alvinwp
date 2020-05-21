<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<?php include('includes/seo.php');
		if(of_get('favicon') != ''){ ?>
		<link rel="icon" type="image/png" href="<?php echo of_get('favicon'); ?>">
		<?php } if(of_get('app_icon') != ''){ ?>
		<meta name="mobile-web-app-capable" content="yes">
		<link rel="icon" sizes="192x192" href="<?php echo of_get('app_icon'); ?>">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-title" content="<?php bloginfo('name'); ?>" />
		<link rel="apple-touch-icon-precomposed" href="<?php echo of_get('app_icon'); ?>">
		<?php } ?>
        <link rel="shortcut icon" href="https://alvinwp.com/wp-content/themes/alvin/img/favicon.ico"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<?php wp_head(); echo of_get('headtext');?>
	</head>
	<body <?php if(of_get('bgimg')){ echo 'style="background-image: url('.of_get('bgimg').');"'; }?>  class="uk-height-1-1">
		
		<?php C_qzhai(); ?>
        <!-- style="max-width:<?php wp_max_width(); ?>" -->
		<div id="main" class="wp uk-grid uk-grid-collapse">
			<?php div_head();?>
        	<?php add_action('description_qzhai', 'description_qzhai'); //头部副导航 ?>
			<?php do_action('head_qzhai');?>
    		</div>
        </div>

