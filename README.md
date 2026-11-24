# Seat Management WTC

A lightweight, front-end seat management prototype for WTC venues. Admins set up rooms as seat grids, mark the status of each seat on an interactive map, and monitor seat availability from a summary dashboard. Everything runs in the browser with no backend or build step.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Storage](https://img.shields.io/badge/storage-localStorage-6c757d?style=flat-square)
![Status](https://img.shields.io/badge/status-prototype-ffc107?style=flat-square)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [User Flow](#user-flow)
- [Seat Status Legend](#seat-status-legend)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How Data Is Stored](#how-data-is-stored)
- [Known Limitations](#known-limitations)
- [Roadmap](#roadmap)
- [Author](#author)

---

## Overview

Managing seating for events or services across several rooms often means juggling spreadsheets or paper layouts. This project offers a simple visual alternative:

1. **Initiate** a room and block with a custom number of rows and columns.
2. **Map** seats by clicking them to change their status.
3. **Monitor** totals for booked and available seats per room and block on a dashboard.

The app is built with plain HTML, CSS, and JavaScript, and it persists data in the browser's `localStorage`. That keeps it easy to run and demo anywhere.

---

## Features

| Module | Page | Description |
|---|---|---|
| **Login** | `loginPage.html` | Enter a username and choose a role. **Admin** goes to Seat Management, **User** goes to the Dashboard. |
| **Seat Management** | `seat management.html` | Create a seat layout by choosing a room (Floor 2, Floor 3, Yerusalem) and a block (A, B, C), then setting the rows and columns. Every seat starts as *available*. |
| **Seat Mapping** | `seatMap.html` | Load any saved room and block as an interactive grid. Click a seat to cycle its status. Includes **Save Seats** and **Reset Seats** buttons. Reset keeps seats marked *no use*. |
| **Dashboard** | `dashboard.html` | A table listing each room and block with its total, booked, and available seats. |

Other details:
- Shared navigation bar across the Management, Mapping, and Dashboard pages.
- Each page has its own stylesheet and a layered wave background.
- Seat counts update every time a seat's status changes.

---

## User Flow

```
Login ──► Admin ──► Seat Management ──► Seat Map ──► Dashboard
  │                 (create grid)       (set status)  (summary)
  └────► User  ──► Dashboard
```

---

## Seat Status Legend

Clicking a seat cycles it through four states:

| Status | Color | Counted as |
|---|---|---|
| 🟩 Available | Green `#28a745` | Available |
| 🟨 Reserved | Yellow `#ffc107` | Booked |
| 🟥 Occupied | Red `#dc3545` | Booked |
| ⬛ No Use | Dark grey `#343a40` | Excluded from available seats |

`Available → Reserved → Occupied → No Use → Available`

Available seats are calculated as **total seats − booked seats − no-use seats**.

---

## Project Structure

```
Seat-Management/
├── loginPage.html          # Login and role selection
├── seat management.html    # Room/block initiation form
├── seatMap.html            # Interactive seat map
├── dashboard.html          # Seat availability summary
├── script.js               # Standalone copy of the initiation form logic
├── style.css               # Seat Management styles
├── style2.css              # Dashboard styles
├── style3.css              # Seat Map styles
├── style4.css              # Login styles
└── Images/                 # Logos and page icons (not yet committed, see Known Limitations)
```

---

## Getting Started

No installation or dependencies are needed.

```bash
git clone https://github.com/descellia/Seat-Management.git
cd Seat-Management
```

Then open `loginPage.html` in a modern browser. You can also serve the folder locally so page navigation works the same way it would on a web host:

```bash
# Python 3
python -m http.server 8000
# open http://localhost:8000/loginPage.html
```

**Quick demo**

1. Log in with any username and choose **Admin**.
2. Create a layout, for example `Floor 2 · Block A · 5 rows · 10 columns`, then click **Initiate Room**.
3. On the Seat Map, select the room and block, click **Load Seat Map**, and click seats to change their status.
4. Click **Save Seats** to open the Dashboard and see the updated totals.

---

## How Data Is Stored

All data is stored in the browser's `localStorage`, keyed by room and block:

| Key | Example | Purpose |
|---|---|---|
| `savedRooms`, `savedBlocks` | `["floor2"]`, `["A"]` | Rooms and blocks that have been created |
| `{room}-{block}-rows` / `-cols` | `floor2-A-rows = 5` | Grid size |
| `{room}-{block}-seat-{r}-{c}` | `floor2-A-seat-0-3 = reserved` | Status of a single seat |
| `{room}-{block}-totalSeats` / `-bookedSeats` / `-availableSeats` / `-noUseSeats` | `floor2-A-bookedSeats = 4` | Totals shown on the dashboard |

Data stays in one browser on one device. Clearing site data resets the app.

---

## Known Limitations

This is a front-end prototype, so a few constraints are worth knowing:

- **No real authentication.** The login screen only routes users by the role they choose. It does not check passwords or restrict access to pages.
- **No shared data.** Because data lives in `localStorage`, other users and devices cannot see the same seat map.
- **Dashboard appears after the first seat edit.** Seat totals are calculated when a seat's status first changes, so a newly created room is not listed until one of its seats has been clicked.
- **Case-sensitive redirect.** After a room is initiated, the form redirects to `seatmap.html`, but the file is named `seatMap.html`. This works on Windows and macOS, but on case-sensitive hosts such as GitHub Pages the redirect returns a 404.
- **Image assets missing from the repository.** The pages reference `Images/wtc.png`, `seat.png`, `mapping.png`, `dashboard.png`, and `welcomeHome.png`, but the `Images/` folder has not been committed yet.
- **Fixed room and block options.** Rooms and blocks are hard-coded in the form.

---

## Roadmap

- [ ] Fix the `seatmap.html` / `seatMap.html` redirect and rename `seat management.html` to a URL-safe name
- [ ] Show newly created rooms on the dashboard right away
- [ ] Add a backend and database (for example Laravel + MySQL or Firebase) for shared, persistent data
- [ ] Add real authentication with role-based access control
- [ ] Let admins add and manage rooms and blocks from the UI
- [ ] Add a responsive layout and a mobile navigation menu
- [ ] Deploy a live demo on GitHub Pages

---

## Author

**Descellia Ng**, Informatics, Universitas Multimedia Nusantara

[![GitHub](https://img.shields.io/badge/GitHub-descellia-181717?style=flat-square&logo=github)](https://github.com/descellia)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-descellia12-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/descellia12)
