# Maling Kapok - Sistem Keamanan Motor Berbasis IoT Real-Time

## Deskripsi Proyek

Maling Kapok adalah sistem keamanan proaktif hemat energi untuk motor. Dilengkapi dengan GPS tracking real-time, deteksi ancaman, dan remote cut off. Aman dari curanmor dengan teknologi sensor pintar.

## Teknologi yang Digunakan

Proyek ini dibangun dengan:

- **Vite** - Build tool modern untuk development
- **TypeScript** - JavaScript dengan typing
- **React** - Library UI
- **shadcn-ui** - Komponen UI modern
- **Tailwind CSS** - Utility-first CSS framework

## Cara Menjalankan Proyek

### Requirement

- Node.js & npm - [install dengan nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Langkah-langkah:

```sh
# Step 1: Clone repository
git clone <YOUR_GIT_URL>

# Step 2: Masuk ke direktori proyek
cd maling-kapok-app

# Step 3: Install dependencies
npm install

# Step 4: Jalankan development server
npm run dev
```

Server akan berjalan di `http://localhost:5173`

## Build untuk Production

```sh
# Build project
npm run build

# Preview build
npm run preview
```

## Struktur Proyek

```
maling-kapok-app/
├── src/
│   ├── components/     # Komponen React
│   ├── pages/          # Halaman aplikasi
│   ├── hooks/          # Custom hooks
│   └── lib/            # Utilities
├── public/             # Static assets
├── asset/              # Icon dan asset lainnya
└── index.html          # Entry point HTML
```

## Fitur Utama

- 🔒 Sistem keamanan proaktif
- 📍 GPS tracking real-time
- 🚨 Deteksi ancaman otomatis
- ⚡ Remote cut off engine
- 📱 Interface web yang responsif

## Development

Untuk development, jalankan:

```sh
npm run dev
```

Server akan reload otomatis ketika Anda melakukan perubahan pada code.
