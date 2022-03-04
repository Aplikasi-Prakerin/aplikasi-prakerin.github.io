var app = new Vue({
  el: "#app",
  delimiters: ["${", "}"],
  data: {
    message: "Hello Vue!",
    pricings: [
      {
        title: "BASIC",
        price: "50rb",
        frequency: "/bulan",
        features: [
          {
            check: true,
            text: "5 Kelas",
          },
          {
            check: true,
            text: "2 Jadwal Prakerin",
          },
          {
            check: true,
            text: "2 Guru",
          },
          {
            check: true,
            text: "Unlimited Siswa",
          },
          {
            check: true,
            text: "Unlimited Industri",
          },
          {
            check: true,
            text: "Jurnal dan absensi",
          },
          {
            check: false,
            text: "Supervisi",
          },
          {
            check: true,
            text: "Penilaian",
          },
          {
            check: false,
            text: "Support / Kursus / Maintenance",
          },
          {
            check: false,
            text: "Migrasi Data",
          },
        ],
      },
      {
        title: "BASIC",
        price: "400",
        frequency: "/6 bulan",
        features: [
          {
            check: true,
            text: "10 Kelas",
          },
          {
            check: true,
            text: "5 Jadwal Prakerin",
          },
          {
            check: true,
            text: "5 Guru",
          },
          {
            check: true,
            text: "Unlimited Siswa",
          },
          {
            check: true,
            text: "Unlimited Industri",
          },
          {
            check: true,
            text: "Jurnal dan absensi",
          },
          {
            check: false,
            text: "Supervisi",
          },
          {
            check: true,
            text: "Penilaian",
          },
          {
            check: false,
            text: "Support / Kursus / Maintenance",
          },
          {
            check: false,
            text: "Migrasi Data",
          },
        ],
      },

      {
        title: "Pro",
        price: "2.4 juta",
        frequency: "/tahun",
        features: [
          {
            check: true,
            text: "Unlimited Kelas",
          },
          {
            check: true,
            text: "Unlimited Jadwal Prakerin",
          },
          {
            check: true,
            text: "Unlimited Guru",
          },
          {
            check: true,
            text: "Unlimited Siswa",
          },
          {
            check: true,
            text: "Unlimited Industri",
          },
          {
            check: true,
            text: "Jurnal dan absensi",
          },
          {
            check: true,
            text: "Supervisi",
          },
          {
            check: true,
            text: "Penilaian",
          },
          {
            check: false,
            text: "Support / Kursus / Maintenance",
          },
          {
            check: false,
            text: "Migrasi Data",
          },
        ],
      },

      {
        title: "Pro",
        price: "3 juta",
        frequency: "/tahun",
        features: [
          {
            check: true,
            text: "Unlimited Kelas",
          },
          {
            check: true,
            text: "Unlimited Jadwal Prakerin",
          },
          {
            check: true,
            text: "Unlimited Guru",
          },
          {
            check: true,
            text: "Unlimited Siswa",
          },
          {
            check: true,
            text: "Unlimited Industri",
          },
          {
            check: true,
            text: "Jurnal dan absensi",
          },
          {
            check: true,
            text: "Supervisi",
          },
          {
            check: true,
            text: "Penilaian",
          },
          {
            check: true,
            text: "Support / Kursus / Maintenance",
          },
          {
            check: true,
            text: "Migrasi Data",
          },
        ],
      },

      {
        title: "Custom",
        frequency:
          "Silahkan hubungi kontak dibawah untuk negosiasi harga dan fitur",
      },
    ],
  },
});
