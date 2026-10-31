<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project decisions

- `vite.config.ts` passes `nitro: { preset: "vercel", output: { dir: ".vercel/output", serverDir: ".vercel/output/functions/__server.func", publicDir: ".vercel/output/static" } }` — the user deploys to Vercel. Inside the Lovable sandbox the config wrapper still forces the `cloudflare-module` preset and `dist/` output for its own publish pipeline; the Vercel options only take effect in non-sandbox builds (local/CI). Do not remove them to "fix" a sandbox build output.

