# shopify_dual_price
Dvojni iskaz cijena za euro migraciju.
Prikaz cijene artikla u kunama i eurima


# postavljanje

- Online Store -> Themes -> Actions -> Edit code
- Unutar Datoteke Assets klik na "Add a new asset"
- Create a blank file:
        - Extension: js.liquid
        - File name: dual_price.js
- U theme.liquid, nakon body taga dodati: {{ 'dual_price_jq.js' | asset_url | script_tag }}
