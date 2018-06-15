# Project File for WBS-Markdown

chart {#stories-chart}

## Stories

toggle {#stories-toggle}

- **null**: Unlinked {story="null"}

- **04**: "traditional" mode with "1.1.1.2" style numbering [Github](https://github.com/brainlid/wbs_markdown/issues/4) {story=04}

totals {#stories-total}

## wbs-markdown

filter {#display-filter}

style {#display-style}

### Code

- wbs-markdown
  - lib
    - `config/default.json`
    - report
      - components
        - bs-percentage
        - confidence-display
        - `css/main.scss`
        - display-style
          - [x] "traditional" mode selection {work=1h link=04}
          - [x] toggle style options visually {work=1h link=04}
        - display-filter
        - invalid-story-panel
        - security-local-storage
        - stories-chart
        - stories-table
        - stories-toggle
        - stories-total
        - story-label
        - tick-display
        - vue-main
          - `workEstimate()`
          - `workDisplayBest()`
          - `weightedConfidence()`
        - wbs-item
          - [x] awareness of number within parent context {work=1d link=04 confidence=50 note="Don't know how to do yet"}
          - [x] displays full context number {work=1d link=04 note="Needs parent's full number context and own number within parent?"}
        - [x] traditional numbering display component? {work=3d link=04}
      - htmlPlugins
        - `reportConfig/reportConfig.js`
        - `vue/vue.js`
        - `wbs/wbs.js`
      - `generate.js`
        - `generate()`
        - `watching()`
    - `file-utils.js`
    - `index.wbsm.js`
    - `settings.js`
    - `version.js`
    - `wbsm-init.js`
    - `wbsm-new.js`
    - `wbsm-report.js`
    - `wbsm-watch.js`
  - templates
    - `sample-config.json`
    - `wbs_deliverables_layout.html`
    - `wbs.sample.md`
  - `README.md`
    - [ ] documented "traditional" mode {work=0.25 link=04}

### Administrative

- Administration
  - MR (Merge Request)
  - QA Verified
    - [x] **04** verified {work=0.5h link=04}
  - Announcements
  - Release

## Raw Table Data

table {#stories-table}
