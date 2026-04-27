# Baked By Justine

Full-stack bakery ordering/POS project maintained by **Abdullah Musani**.

## What is included
- Customer storefront with product catalogue, cart, checkout, and order confirmation pages
- PHP API endpoints for products, users, cart, checkout, and order submission
- POS/admin area for orders, inventory, users, and financial reports
- SQL schema and sample product data

## Local setup
1. Create a MySQL database named `baked_by_justine`.
2. Import `team.sql`, then `baked-by-justine/cart.sql`, then `baked-by-justine/sample_data.sql`.
3. Set environment variables if needed: `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`.
4. Serve the project with a PHP server from the repository root.

Example:
```bash
php -S localhost:8000
```

Then open:
- Storefront: `http://localhost:8000/baked-by-justine/index.html`
- POS backend: `http://localhost:8000/POS_BACK/index.php`
