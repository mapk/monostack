<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package mono
 */

?>

<footer id="colophon" class="site-footer">
	<div class="site-info">
		<div id="footer-sidebar">
			<?php
				if(is_active_sidebar('footer-sidebar')) {
					dynamic_sidebar('footer-sidebar');
				}
			?>
		</div>
		<?php
			printf('<p>'. esc_html__( 'Computationally powered by', 'mono' )); 
		?> 
		<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'mono' ) ); ?>"><?php
			/* translators: %s: CMS name, i.e. WordPress. */
			printf( esc_html__( 'WordPress', 'mono' ));
		?></a>
		<span class="sep"> | </span>
		<?php
			/* translators: 1: Theme name, 2: Theme author. */
			printf( esc_html__( 'Theme: %s', 'mono' ), '<a href="https://github.com/mapk/mono/">Mono</a>' );
		?>
	</div><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
