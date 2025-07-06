document.addEventListener("DOMContentLoaded", () => {
  const chartColors = {
    purple: "#2A4B8D",
    rose: "#D4A017",
    blue: "#1E40AF",
    orange: "#E5A82F",
    grey: "#E2E8F0",
  };

  const defaultTooltipCallback = (tooltipItems) => {
    const item = tooltipItems;
    let label = item.chart.data.labels[item.dataIndex];
    if (Array.isArray(label)) {
      return label.join(" ");
    }
    return label;
  };

  // Market Chart
  const marketChartCtx = document.getElementById("marketChart").getContext("2d");
  new Chart(marketChartCtx, {
    type: "bar",
    data: {
      labels: ["Karaoke Market", "Music App Ecosystem", "Creator Economy"],
      datasets: [
        {
          label: "Current Size ($B)",
          data: [2.5, 25, 100],
          backgroundColor: chartColors.purple,
          borderColor: chartColors.purple,
          borderWidth: 1,
        },
        {
          label: "Projected Size ($B)",
          data: [10, 66.5, 480],
          backgroundColor: chartColors.rose,
          borderColor: chartColors.rose,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" },
        tooltip: { callbacks: { title: defaultTooltipCallback } },
        title: {
          display: true,
          text: "Market Size & Projections (USD Billions)",
        },
      },
      scales: {
        y: {
          type: "logarithmic",
          title: {
            display: true,
            text: "Market Size (Logarithmic Scale)",
          },
        },
      },
    },
  });

  // Funds Chart
  const fundsChartCtx = document.getElementById("fundsChart").getContext("2d");
  new Chart(fundsChartCtx, {
    type: "doughnut",
    data: {
      labels: ["Product Development", "Music Licensing", "Marketing", "Operations"],
      datasets: [
        {
          data: [40, 25, 25, 10],
          backgroundColor: [
            chartColors.blue,
            chartColors.purple,
            chartColors.rose,
            chartColors.orange,
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: { position: "right" },
        tooltip: { callbacks: { title: defaultTooltipCallback } },
      },
    },
  });

  // Financials Chart
  const financialsChartCtx = document.getElementById("financialsChart").getContext("2d");
  new Chart(financialsChartCtx, {
    type: "bar",
    data: {
      labels: ["Year 1", "Year 2", "Year 3"],
      datasets: [
        {
          label: "Revenue ($M)",
          data: [0.5, 5.2, 25.8],
          backgroundColor: chartColors.rose,
          yAxisID: "y",
        },
        {
          type: "line",
          label: "EBITDA ($M)",
          data: [-2.375, -2.5, 12.6],
          borderColor: chartColors.blue,
          backgroundColor: chartColors.blue,
          tension: 0.1,
          fill: false,
          yAxisID: "y",
        },
        {
          type: "line",
          label: "MAUs (Millions)",
          data: [0.5, 2.5, 7],
          borderColor: chartColors.purple,
          backgroundColor: chartColors.purple,
          tension: 0.1,
          fill: false,
          yAxisID: "y1",
          borderDash: [5, 5],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: { title: defaultTooltipCallback },
        },
      },
      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
          title: { display: true, text: "Revenue / EBITDA ($M)" },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          title: { display: true, text: "Users (Millions)" },
          grid: { drawOnChartArea: false },
        },
      },
    },
  });

  // Navigation active state
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href").substring(1) === entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}); 