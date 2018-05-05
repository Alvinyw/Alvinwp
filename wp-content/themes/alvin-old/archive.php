<?php get_header(); ?>
            <div class="uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-4-5">
            		<div id="index" class="bs">
						    <h1 class="h4">
						    	<?php if ( is_category() ){ single_cat_title(); }?>
						    	<?php if ( is_year() ) { ?><?php the_time('Y年'); ?> 日志归档<?php } ?>
								<?php if ( is_month() ) { ?><?php the_time('Y年n月'); ?> 日志归档<?php } ?>
								<?php if ( is_day() ) { ?><?php the_time('Y年n月j日'); ?> 日志归档 - <?php bloginfo('name'); ?><?php } ?>
								<?php if (function_exists('is_tag')) { if ( is_tag() ) { ?><?php  single_tag_title("", true); ?><?php }  } ?>
						    </h1>
            			<div id="list">
        					<?php
								if (have_posts()) {
									while (have_posts()) {
						            	the_post();
										echo '<article class="article">';
										echo '<h1><a href="';
												the_permalink();
							            echo '" >';
								            	the_title();
							            echo '</a></h1>';

											echo '<p>';
												if (has_post_thumbnail()) {
													echo '<a href="';
						                				the_permalink();
													echo '">';
						                			the_post_thumbnail(array(180, 110, ' uk-overlay-scale'));
													echo '</a>';
												} else {
													if ($images = get_children(array('post_parent' => get_the_ID(), 'post_type' => 'attachment', 'post_mime_type' => 'image'))) {
									                    echo '<a href="';
									                    	the_permalink();
									                    echo '">';
									                    $image = current($images);
									                    $image = wp_get_attachment_image_src($image->ID, array(180, 100));
									                    echo '<img src="' . $image[0] . '"  />';
									                    echo '</a>';
									                }
												}
											$content = get_the_content();
							            	$trimmed_content = wp_trim_words($content, 120, '...');
							            	echo $trimmed_content;
								            echo '<time><br>';
				            						the_time('Y年n月j日');	
								            echo '</time>';
											echo '</p>';
											echo '</article>';
		
									}
								} else {
						    		echo '<p class="_404">没发现什么...</p>';
							    }
								?>
						</div>
            		</div>
				<div class="ft uk-visible-small">
		        		<p><?php echo of_get('footer');getfoot();?></p>
                        <div id="totalVisitor">访客人数：<span class="num"><?php get_totalviews(true, true, true); ?></span> 人</div>
		        </div>
            </div>
        </div>
<?php get_footer(); ?>
