/* =============================================================================
 *  Custom theme JS  (Theme::getCustomJsUrl -> theme/default/js/custom.js)
 *
 *  Stock Leantime (menuController.js) only auto-closes the left menu below
 *  576px. Below 1200px the stock "tablet" layout breaks when the menu is left
 *  open. This raises the auto-close threshold to 1200px so that, just like on
 *  mobile, the sidebar defaults to closed (content full width) and is opened
 *  on demand as an overlay drawer (see custom.css).
 *
 *  The stock .barmenu click handler still toggles open/closed, so the user can
 *  open the drawer manually; this only forces "closed" on load and on resize
 *  into the narrow range.
 * ========================================================================== */
(function () {
    var BREAKPOINT = 1200;

    function closeIfNarrow() {
        if (typeof jQuery === 'undefined') { return; }
        if (window.innerWidth < BREAKPOINT) {
            jQuery('.mainwrapper').removeClass('menuopen').addClass('menuclosed');
        }
    }

    if (typeof jQuery !== 'undefined') {
        jQuery(function () {
            closeIfNarrow();
            var t;
            jQuery(window).on('resize', function () {
                clearTimeout(t);
                t = setTimeout(closeIfNarrow, 150);
            });
        });
    }
})();
