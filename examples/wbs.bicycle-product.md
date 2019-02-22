# Bicycle WBS

Represents the creation of a new Bicycle product that is only a minor variation
of an existing product. Going through product concept, design, construction, and
testing.

## Stories

chart {#stories-chart}

toggle {#stories-toggle}

- **null**: Unlinked {story="null"}
- **100**: Bicycle Product YB-M1125 {story=100}

totals {#stories-total}

filter {#display-filter}

style {#display-style}

level {#detail-level}

## New Bicycle Design

- Bicycle {new=true}
  - Frame Set
    - [x] Frame {work=7h link=100 actual=6.5h}
    - [x] Handlebar {work=2h link=100 actual=3h}
    - [x] Fork {work=3h link=100 actual=2.8h}
    - [ ] Seat {work=3h link=100}
  - [x] Crank Set {work=5h link=100 actual=5h}
  - Wheels
    - [ ] Front Wheel {work=4h link=100}
    - [ ] Rear Wheel {work=6h link=100}
  - [ ] Braking System {work=5h link=100}
  - [ ] Shifting System {work=5h link=100}
  - Integration
    - [x] Concept {work=3h link=100 actual=3h}
    - [x] Design {work=5h link=100 actual=4h}
    - [ ] Assembly {work=6h link=100}
    - [ ] Testing {work=14h link=100}
  - [ ] Project Management {work=5h link=100 actual=2.5h}

## Raw Table Data

table {#stories-table}
