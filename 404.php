<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package mono
 */

get_header(); ?>
	
	<main id="primary" class="site-main">

		<section class="error-404 not-found">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( 'Oops! Page not found.', 'mono' ); ?></h1>
			</header><!-- .page-header -->

			<div class="page-content">
				<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try searching or selecting an item in the menu?', 'mono' ); ?></p>

				<?php
					get_search_form();
				?>

			</div><!-- .page-content -->
		</section><!-- .error-404 -->

	</main><!-- #primary -->

<?php
get_footer();
