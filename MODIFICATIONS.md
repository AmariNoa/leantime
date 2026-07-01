# Modifications (3.9.5-amari-patches)

This branch is [Leantime](https://github.com/Leantime/leantime) **v3.9.5** with a
small set of self-hosted modifications, published to satisfy the AGPL-3.0 §13
network-use source-disclosure obligation for the instance at `pj.na-ark.xyz`.

Base: upstream tag `v3.9.5` (`c733d5208`).

## Changes vs upstream v3.9.5

| File | Change |
|---|---|
| `app/Language/ja-JP.ini` | Add the missing FontAwesome style prefix on the list-view toggle icons (`links.list` / `links.list_view`: `fa-list` → `fa fa-list`). Still absent upstream in the Japanese locale (en-US is already correct). |
| `app/Views/Templates/sections/footer.blade.php` | Add a footer notice stating this is a patched build and linking back to this modified source (AGPL §13). |
| `public/theme/default/css/custom.css` | Theme customization (force-added; upstream `.gitignore` excludes `custom.css`): below 1200px fall the sidebar back to the mobile overlay drawer, keep the header on one row, fix header dropdown clipping; below 576px align the work-mode icon hit areas. |
| `public/theme/default/js/custom.js` | Theme customization: raise the auto-close-menu threshold from 576px to 1200px. |

## Not included (fixed upstream in 3.9.x)

The 3.8.0 template/localization regression patches carried on the
`3.8.0-amari-patches` branch (`showList`, `showClient`, `milestoneDialog`,
`generalComment`) are **dropped here** — upstream fixed them in 3.9.x, so this
branch uses the stock 3.9.5 versions.

## Plugins

The instance also runs three separately-published AGPL plugins (own repos):
`AdvancedOidc`, `DiscordAccountLink`, `PersonalAccessTokenAuth`. They are not
part of this tree.
