# Modifications

This fork modifies **Leantime v3.8.0** to fix several template / localization
regressions that are present in the upstream 3.8.0 release. It is intended as a
temporary downstream fix until an official release (3.8.1+) addresses them.

- Base: upstream tag `v3.8.0`
- Modified by: 天鈴のあ
- Date: 2026-06-03

## Changes

| File | Fix |
|---|---|
| `app/Domain/Tickets/Templates/showList.blade.php` | Guard the self-assigned `$groupBy` / `$newField` (`$x = $x;`) so a code path that does not provide them no longer throws "Undefined variable" and crashes the tickets list. |
| `app/Domain/Clients/Templates/showClient.blade.php` | Discussion tab counter used `count($submodules.generalComment)` (Blade string concatenation → undefined constant `generalComment`, fatal on PHP 8.x) and `$submodules` is never provided. Count the controller-provided `$comments` instead. |
| `app/Domain/Tickets/Templates/milestoneDialog.blade.php` | Template read `$currentMilestone` but the controller assigns `$milestone`; the mismatch left the variable null (crash on new, empty form on edit). Fall back to the controller-provided `$milestone`. |
| `app/Domain/Comments/Templates/submodules/generalComment.blade.php` | Line 2 overwrote the controller-provided `$comments` array with a repository instance, so `@foreach ($comments ...)` rendered nothing. Use a separate `$commentRepo` for `getReplies()` and keep `$comments` as the array. |
| `app/Language/ja-JP.ini` | `links.list` / `links.list_view` icons lacked the Font Awesome style prefix (`<i class='fa-list'>`), rendering as broken glyphs in the Japanese locale. Added the `fa` prefix. |

See the commit diff for the exact changes.
