# Fixes Applied

- Replaced teammate/author references with **Abdullah Musani** in visible project comments and labels.
- Removed hard-coded personal database credentials and changed the storefront DB defaults to local development values.
- Fixed broken Cloudflare-obfuscated email links in the menu footer/contact area.
- Changed the products category API call from an absolute `/baked-by-justine/...` path to a relative `api/categories.php` path so it works after deployment in the project folder.
- Added frontend fallback behaviour so the products page still renders static product data if the PHP/MySQL API is not running.
- Included `products_cart.js` on the products page so fallback product data is available.
- Fixed cart boot logic so it loads stored cart data, waits for backend cart loading, then renders the cart and badge.
- Replaced McMaster/server-specific POS API paths with project-relative/local paths where found.
- Updated POS title/profile placeholder references.

## Notes

For full backend functionality, import the provided SQL files into MySQL and update database names/users/passwords in the PHP config files to match your local or hosted environment.
