# Alan Philip Babu — Portfolio

Personal portfolio themed as a hotel (lobby, suites, gallery, concierge, guest register, rooftop): products (Room IQ, Rates IQ, Salon IQ, Chit IQ, Fin IQ, Build IQ), client websites, toolbox and experience.

Static site, no build step. All content lives in the data blocks at the top of `js/main.js`.

## Run locally

```bash
python3 -m http.server 8085
```

Then open http://localhost:8085. Product briefs can be linked directly, e.g. `/#/work/room-iq`.

## Editing

- **Contact links / CV:** `CONFIG` in `js/main.js` (set `linkedin` and `cv` to show those buttons).
- **Products, websites, tools, experience:** `PRODUCTS`, `SITES`, `TOOL_GROUPS`, `TIMELINE` in `js/main.js`.
- Keep product copy high level (what and why, not how).
