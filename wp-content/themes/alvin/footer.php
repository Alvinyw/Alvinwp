		
		<?php 
			if(of_get("diy_loading")){
				$loading = of_get("diy_loading");
			}else{
				$loading = '<img src="'.get_template_directory_uri().'/img/box.gif">';
			}
			if(wp_is_mobile()){
				$left='44%';
			}else if(of_get('is_widget')){
				$left='45%';
			}else{
				$left='55%';
			}
		?>
		<script> 
			<?php if(of_get("is_ajax")) {?>
				var ajaxignore_string = new String('<?php echo of_get("no_ajax");?>'); 
			<?php }else{ ?>	
				var ajaxignore_string = '';
			<?php } ?>
			var ajaxhome='<?php bloginfo('url'); ?>/';
			var ajaxloading_code = '<div class="loading" style="left:<?php echo $left;?>"><?php echo $loading;?></div>';
			var ajaxignore = ajaxignore_string.split(', ');
			
			function app(){
				<?php echo of_get('js_app');?>
				//禁用了主题自带的代码美化工具
				//$('pre').each(function(i, e) {hljs.highlightBlock(e)});
			}
		</script>
		<?php wp_footer();?>

		<?php if(of_get('is_act')){notice_qzhai(of_get('act'),of_get('nstata'),of_get('ntime'));}?>
		<a href="#" class="top" data-uk-smooth-scroll style="display:none"><i class="uk-icon-angle-up"></i></a>
		<?php do_action('footer_qzhai'); echo of_get('footertext');?>
				
        <!-- 左下角摇动的小树 -->
        <div class="flower">
          <span class="sml-flower"></span>
          <span class="big-flower"></span>
        </div>
		<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/alvin.js"></script>

	    <!-- 全局点赞 -->

		<script>
			// 百度统计代码
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?00b21244698abb0b4554e5527e289c85";
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();
		</script>

	</body>
</html>