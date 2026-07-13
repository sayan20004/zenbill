// ==========================================
// STATE MANAGEMENT & LOCAL STORAGE DATABASE
// ==========================================

const DEFAULT_STATE = {
  theme: "light",
  sidebarCollapsed: false,
  currentUser: {
    name: "Admin Admin",
    email: "admin@acme.com",
    avatar: "AA"
  },
  activeCompanyIndex: 0,
  companies: [
    {
      name: "Acme Inc.",
      industry: "SaaS & Software",
      currency: "USD",
      taxId: "GST-US-998822",
      address: "123 Innovation Way, Suite 400, San Francisco, CA 94107"
    }
  ],
  items: [
    { name: "Cover page Design", sku: "COV-001", category: "Sheet page", purchasePrice: 50, salesPrice: 150, stock: 5 },
    { name: "Table of contents Generation", sku: "TOC-002", category: "Table of contents", purchasePrice: 10, salesPrice: 40, stock: 20 },
    { name: "Executive summary Writing", sku: "EXE-003", category: "Narrative", purchasePrice: 100, salesPrice: 250, stock: 10 },
    { name: "Technical approach Draft", sku: "TEC-004", category: "Narrative", purchasePrice: 300, salesPrice: 650, stock: 2 },
    { name: "Design Layout System", sku: "DES-005", category: "Narrative", purchasePrice: 200, salesPrice: 450, stock: 12 },
    { name: "Capabilities Document", sku: "CAP-006", category: "Narrative", purchasePrice: 80, salesPrice: 180, stock: 15 },
    { name: "Integration Specifications", sku: "INT-007", category: "Narrative", purchasePrice: 120, salesPrice: 320, stock: 8 },
    { name: "Innovation and Advantages Outline", sku: "INN-008", category: "Narrative", purchasePrice: 110, salesPrice: 280, stock: 10 },
    { name: "Overview of EMR Innovative Solutions", sku: "EMR-009", category: "Technical content", purchasePrice: 90, salesPrice: 220, stock: 6 },
    { name: "Advanced Algorithms and Machine Learning", sku: "ML-010", category: "Narrative", purchasePrice: 500, salesPrice: 1200, stock: 4 }
  ],
  parties: [
    { name: "Eddie Lake", type: "Customer", email: "eddie@lake.com", phone: "555-0199", taxId: "TAX-EDD-8822", address: "89 Lakefront Dr, Chicago, IL", balance: 1500 },
    { name: "Jacob Tashypulates", type: "Customer", email: "jacob@tash.com", phone: "555-0177", taxId: "TAX-JAC-7733", address: "420 Pinecrest Ave, Austin, TX", balance: 2500 },
    { name: "design team", type: "Supplier", email: "design@team.com", phone: "555-0122", taxId: "TAX-DES-1144", address: "Studio 4B, Creators Block, New York, NY", balance: -1200 }
  ],
  invoices: [
    {
      id: "INV-1001",
      customerName: "Eddie Lake",
      date: "2026-07-10",
      subTotal: 1000.00,
      taxTotal: 180.00,
      grandTotal: 1180.00,
      status: "Paid",
      items: [
        { itemName: "Design Layout System", price: 450, qty: 2, taxRate: 18, total: 1062 }
      ]
    },
    {
      id: "INV-1002",
      customerName: "Jacob Tashypulates",
      date: "2026-07-12",
      subTotal: 650.00,
      taxTotal: 117.00,
      grandTotal: 767.00,
      status: "Unpaid",
      items: [
        { itemName: "Technical approach Draft", price: 650, qty: 1, taxRate: 18, total: 767 }
      ]
    }
  ],
  dashboardOutline: [
    { header: "Cover page", type: "Sheet page", status: "In Review", target: 18, limit: 5, reviewer: "Eddie Lake" },
    { header: "Table of contents", type: "Table of contents", status: "Done", target: 29, limit: 26, reviewer: "Eddie Lake" },
    { header: "Executive summary", type: "Narrative", status: "Done", target: 10, limit: 12, reviewer: "Eddie Lake" },
    { header: "Technical approach", type: "Narrative", status: "Done", target: 27, limit: 20, reviewer: "Jacob Tashypulates" },
    { header: "Design", type: "Narrative", status: "In Review", target: 2, limit: 16, reviewer: "Jacob Tashypulates" },
    { header: "Capabilities", type: "Narrative", status: "In Review", target: 30, limit: 8, reviewer: "Jacob Tashypulates" },
    { header: "Integration with existing systems", type: "Narrative", status: "In Review", target: 18, limit: 21, reviewer: "Jacob Tashypulates" },
    { header: "Innovation and Advantages", type: "Narrative", status: "Done", target: 26, limit: 26, reviewer: "design team" },
    { header: "Overview of EMR's Innovative Solutions", type: "Technical content", status: "Done", target: 7, limit: 20, reviewer: "design team" },
    { header: "Advanced Algorithms and Machine Learning", type: "Narrative", status: "Done", target: 30, limit: 28, reviewer: "design team" }
  ],
  tableTab: "Outline",
  invoiceCounter: 1003,
  invoicePrefix: "INV-",

  // Extended state models
  quotations: [],
  proformas: [],
  payments: [
    { id: "PAY-3001", partyName: "Eddie Lake", type: "Payment In", date: "2026-07-10", refNo: "REF-00122", mode: "Bank", amount: 1180.00 }
  ],
  purchaseOrders: [],
  purchaseInvoices: [
    { id: "PINV-2001", supplierName: "design team", date: "2026-07-09", subTotal: 1200.00, taxTotal: 0.00, grandTotal: 1200.00, status: "Unpaid", items: [{ itemName: "Design Layout System", price: 200, qty: 6, taxRate: 0, total: 1200 }] }
  ],
  creditNotes: [],
  debitNotes: [],
  salesReturns: [],
  purchaseReturns: [],
  deliveryChallans: [],
  stockAdjustments: [
    { date: "2026-07-11", itemName: "Cover page Design", sku: "COV-001", type: "Add", qty: 5, remarks: "Initial catalog load", updatedStock: 5 },
    { date: "2026-07-12", itemName: "Executive summary Writing", sku: "EXE-003", type: "Add", qty: 10, remarks: "Opening balance setup", updatedStock: 10 }
  ],
  bankAccounts: [
    { id: "ACC-01", name: "Chase Operating Bank", type: "Bank", details: "ACC-4422-99", balance: 18500.00 },
    { id: "ACC-02", name: "Cash Petty Vault", type: "Cash", details: "Physical vault", balance: 1200.00 }
  ],
  ledgerTxns: [
    { date: "2026-07-11", accountName: "Chase Operating Bank", partyName: "Opening Balance", type: "Credit", refNo: "INIT-01", amount: 18500.00, balance: 18500.00 },
    { date: "2026-07-11", accountName: "Cash Petty Vault", partyName: "Opening Balance", type: "Credit", refNo: "INIT-02", amount: 1200.00, balance: 1200.00 }
  ],
  expenses: [
    { id: "EXP-5001", date: "2026-07-11", category: "Rent Expense", accountName: "Chase Operating Bank", desc: "July office workspace leasing", amount: 1500.00 },
    { id: "EXP-5002", date: "2026-07-12", category: "Utilities Bill", accountName: "Chase Operating Bank", desc: "Electricity & Fiber Internet bills", amount: 240.00 }
  ],
  notifications: [
    { id: 1, title: "Database initialization complete", time: "2 hours ago", desc: "Local database tables configured." },
    { id: 2, title: "Low stock alert: Technical approach Draft", time: "3 hours ago", desc: "Stock level is below threshold (2 units left)." }
  ],
  activityLogs: [
    { timestamp: "2026-07-13 10:15:30", user: "Admin", action: "User admin session login verified", outcome: "Success" },
    { timestamp: "2026-07-13 11:22:15", user: "Admin", action: "Workspace company Acme Inc. setup finished", outcome: "Success" }
  ],
  docCounter: 6001
};

let appState = {};

function initDatabase() {
  const localData = localStorage.getItem("billflow_app_state");
  if (localData) {
    try {
      appState = JSON.parse(localData);
      // Backwards compatibility array checks
      const keys = Object.keys(DEFAULT_STATE);
      keys.forEach(k => {
        if (appState[k] === undefined) {
          appState[k] = DEFAULT_STATE[k];
        }
      });
    } catch (e) {
      appState = { ...DEFAULT_STATE };
    }
  } else {
    appState = { ...DEFAULT_STATE };
    saveState();
  }
}

function saveState() {
  localStorage.setItem("billflow_app_state", JSON.stringify(appState));
}

// ==========================================
// TOAST NOTIFICATIONS & LOGGER
// ==========================================

function triggerToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let iconName = "check-circle";
  if (type === "error") iconName = "alert-circle";
  if (type === "warning") iconName = "alert-triangle";
  if (type === "info") iconName = "info";

  toast.innerHTML = `
    <span class="toast-icon"><i data-lucide="${iconName}"></i></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.animation = "fadeIn 0.3s ease reverse";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function logActivity(action, outcome = "Success") {
  const log = {
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
    user: appState.currentUser ? appState.currentUser.name.split(" ")[0] : "System",
    action,
    outcome
  };
  appState.activityLogs.unshift(log);
  saveState();
}

function logAlert(title, desc) {
  const alert = {
    id: Date.now(),
    title,
    time: "Just now",
    desc
  };
  appState.notifications.unshift(alert);
  saveState();

  const badge = document.getElementById("notifications-badge");
  if (badge) badge.style.display = "block";
}

// ==========================================
// AUTHENTICATION FLOW
// ==========================================

function switchAuthView(viewId) {
  const authCards = document.querySelectorAll(".auth-card, .auth-split-card");
  authCards.forEach(card => card.style.display = "none");

  const targetCard = document.getElementById(viewId);
  if (targetCard) {
    targetCard.style.display = "block";
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;

  triggerToast("Authentication verified!", "success");

  appState.currentUser = {
    name: "Admin User",
    email: email,
    avatar: email.substring(0, 2).toUpperCase()
  };
  saveState();
  logActivity("User session signed in: " + email);

  setTimeout(() => {
    if (appState.companies.length === 0) {
      window.location.href = "onboarding.html";
    } else {
      window.location.href = "index.html";
    }
  }, 800);
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;

  appState.currentUser = {
    name: name,
    email: email,
    avatar: name.split(" ").map(w => w[0]).join("").toUpperCase()
  };

  triggerToast("Account pending email verification code...", "info");

  setTimeout(() => {
    switchAuthView("auth-otp");
  }, 1000);
}

function otpMove(current, nextFieldId) {
  if (current.value.length >= 1 && nextFieldId) {
    document.getElementById(nextFieldId).focus();
  }
}

function handleOtpVerify(e) {
  e.preventDefault();
  triggerToast("Email address verified successfully", "success");
  logActivity("New account email verified");

  setTimeout(() => {
    window.location.href = "onboarding.html";
  }, 800);
}

function resendOtp() {
  triggerToast("A new verification code has been dispatched", "info");
}

function handleForgot(e) {
  e.preventDefault();
  triggerToast("Password recovery email dispatched", "info");
  setTimeout(() => {
    switchAuthView("auth-login");
  }, 1500);
}

function handlePasswordReset(e) {
  e.preventDefault();
  triggerToast("Security password credentials updated", "success");
  setTimeout(() => {
    switchAuthView("auth-login");
  }, 1500);
}

function handleLogout() {
  logActivity("User logged out");
  appState.currentUser = null;
  saveState();

  window.location.href = "login.html";
}

// ==========================================
// COMPANY ONBOARDING FLOW
// ==========================================

function goToOnboardingStep(stepNum) {
  document.getElementById("onboarding-step-1").style.display = stepNum === 1 ? "block" : "none";
  document.getElementById("onboarding-step-2").style.display = stepNum === 2 ? "block" : "none";

  const dot1 = document.getElementById("step-dot-1");
  const dot2 = document.getElementById("step-dot-2");

  if (stepNum === 1) {
    dot1.className = "step-dot active";
    dot2.className = "step-dot";
  } else {
    dot1.className = "step-dot completed";
    dot2.className = "step-dot active";
  }
}

function handleOnboardingSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("company-name-input").value;
  const industry = document.getElementById("company-industry").value;
  const currency = document.getElementById("company-currency").value;
  const taxId = document.getElementById("company-tax-id").value;
  const address = document.getElementById("company-address").value;

  const newCompany = { name, industry, currency, taxId, address };
  appState.companies.push(newCompany);
  appState.activeCompanyIndex = appState.companies.length - 1;
  saveState();

  logActivity("Created new company workspace: " + name);
  triggerToast(`Workspace '${name}' configured!`, "success");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

// ==========================================
// THEME SWITCHER
// ==========================================

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  appState.theme = newTheme;
  saveState();

  updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");
  if (!sunIcon || !moonIcon) return;

  if (theme === "dark") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

// ==========================================
// DYNAMIC WORKSPACE ROUTING
// ==========================================

function toggleSubmenu(id, el) {
  const submenu = document.getElementById(id);
  if (!submenu) return;

  const isOpen = submenu.classList.contains("open");

  document.querySelectorAll(".nav-submenu").forEach(menu => {
    if (menu.id !== id) menu.classList.remove("open");
  });
  document.querySelectorAll(".submenu-toggle").forEach(toggle => {
    if (toggle !== el) toggle.classList.remove("expanded");
  });

  if (!isOpen) {
    submenu.classList.add("open");
    el.classList.add("expanded");
  } else {
    submenu.classList.remove("open");
    el.classList.remove("expanded");
  }
}

function switchMainPage(pageId, titleText = null) {
  document.querySelectorAll(".main-page-view").forEach(page => {
    page.classList.remove("active");
  });

  let target = document.getElementById(pageId);
  const breadcrumb = document.getElementById("active-page-title");

  if (!target) {
    target = document.getElementById("page-dashboard");
    breadcrumb.textContent = "Documents";
  } else {
    const labelText = titleText || pageId.replace("page-", "").replace("sales-", "").replace("purchase-", "").split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    breadcrumb.textContent = labelText === "Dashboard" ? "Documents" : labelText;
  }

  target.classList.add("active");

  // Highlight links
  document.querySelectorAll(".nav-link, .submenu-link").forEach(link => {
    link.classList.remove("active");
  });

  document.querySelectorAll(".nav-link, .submenu-link").forEach(link => {
    const clickAttr = link.getAttribute("onclick");
    if (clickAttr && clickAttr.includes(pageId)) {
      link.classList.add("active");

      const parentSubmenu = link.closest(".nav-submenu");
      if (parentSubmenu) {
        parentSubmenu.classList.add("open");
        const toggle = parentSubmenu.previousElementSibling;
        if (toggle) toggle.classList.add("expanded");
      }
    }
  });

  // Call relevant renderers
  if (pageId === "page-dashboard") { renderDashboardOutlineTable(); drawAreaChart(); updateDashboardKPIs(); }
  if (pageId === "page-items") renderItemsTable();
  if (pageId === "page-customers") renderPartiesTable("Customer");
  if (pageId === "page-suppliers") renderPartiesTable("Supplier");
  if (pageId === "page-sales-invoices") renderInvoicesTable();
  if (pageId === "page-sales-quotations") renderDocTable("Quotation", "quotations-table-body");
  if (pageId === "page-sales-proforma") renderDocTable("Proforma Invoice", "proforma-table-body");
  if (pageId === "page-sales-payment") renderPaymentTable("Payment In", "payment-in-table-body");
  if (pageId === "page-sales-return") renderDocTable("Sales Return", "sales-return-table-body");
  if (pageId === "page-sales-credit") renderDocTable("Credit Note", "credit-table-body");
  if (pageId === "page-sales-delivery") renderDocTable("Delivery Challan", "delivery-table-body");
  if (pageId === "page-purchase-orders") renderDocTable("Purchase Order", "po-table-body");
  if (pageId === "page-purchase-invoices") renderDocTable("Purchase Invoice", "purchase-inv-table-body");
  if (pageId === "page-purchase-payment") renderPaymentTable("Payment Out", "payment-out-table-body");
  if (pageId === "page-purchase-return") renderDocTable("Purchase Return", "purchase-return-table-body");
  if (pageId === "page-purchase-debit") renderDocTable("Debit Note", "debit-table-body");
  if (pageId === "page-inventory") renderInventoryLogsTable();
  if (pageId === "page-accounts") renderAccountsLedgerView();
  if (pageId === "page-other-txns") renderExpensesTable();
  if (pageId === "page-reports") runReport("sales", document.getElementById("btn-rep-sales"));
  if (pageId === "page-notifications") renderNotificationsView();
  if (pageId === "page-activity-log") renderActivityLogsTable();
  if (pageId === "page-settings") loadSettingsView();

  lucide.createIcons();
}

// ==========================================
// MODALS SYSTEM CONTROLLERS
// ==========================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
  }
}

function closeAndOpen(closeId, openFn) {
  closeModal(closeId);
  setTimeout(() => {
    openFn();
  }, 200);
}

// ==========================================
// SEARCH TABLE UTILITY
// ==========================================

function filterGenericTable(tbodyId, query) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const rows = tbody.querySelectorAll("tr");

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query.toLowerCase()) ? "" : "none";
  });
}

// ==========================================
// BOOT APPLICATION
// ==========================================

function bootMainApp() {
  const viewApp = document.getElementById("view-app");
  if (viewApp) viewApp.classList.add("active");

  document.body.setAttribute("data-theme", appState.theme);
  updateThemeIcons(appState.theme);

  const activeCompany = appState.companies[appState.activeCompanyIndex];
  if (document.getElementById("shell-company-name")) {
    document.getElementById("shell-company-name").textContent = activeCompany.name;
    document.getElementById("shell-company-industry").textContent = activeCompany.industry;
    document.getElementById("shell-company-logo").textContent = activeCompany.name.substring(0, 1).toUpperCase();
  }

  if (document.getElementById("shell-user-name")) {
    document.getElementById("shell-user-name").textContent = appState.currentUser.name;
    document.getElementById("shell-user-email").textContent = appState.currentUser.email;
    document.getElementById("shell-user-avatar").textContent = appState.currentUser.avatar;
  }

  const badge = document.getElementById("notifications-badge");
  if (badge) badge.style.display = appState.notifications.length > 0 ? "block" : "none";

  // Page specific dispatcher
  const filename = window.location.pathname.split('/').pop() || "index.html";

  if (filename === "index.html" || filename === "") {
    updateDashboardKPIs();
    renderDashboardOutlineTable();
    drawAreaChart();

    window.removeEventListener("resize", drawAreaChart);
    window.addEventListener("resize", drawAreaChart);
  } else if (filename === "items.html") {
    renderItemsTable();
  } else if (filename === "customers.html") {
    renderPartiesTable("Customer");
  } else if (filename === "suppliers.html") {
    renderPartiesTable("Supplier");
  } else if (filename === "sales-invoices.html") {
    renderInvoicesTable();
  } else if (filename === "quotations.html") {
    renderDocTable("Quotation", "quotations-table-body");
  } else if (filename === "proformas.html") {
    renderDocTable("Proforma Invoice", "proforma-table-body");
  } else if (filename === "payments-in.html") {
    renderPaymentTable("Payment In", "payment-in-table-body");
  } else if (filename === "sales-returns.html") {
    renderDocTable("Sales Return", "sales-return-table-body");
  } else if (filename === "credit-notes.html") {
    renderDocTable("Credit Note", "credit-table-body");
  } else if (filename === "delivery-challans.html") {
    renderDocTable("Delivery Challan", "delivery-table-body");
  } else if (filename === "purchase-orders.html") {
    renderDocTable("Purchase Order", "po-table-body");
  } else if (filename === "purchase-invoices.html") {
    renderDocTable("Purchase Invoice", "purchase-inv-table-body");
  } else if (filename === "payments-out.html") {
    renderPaymentTable("Payment Out", "payment-out-table-body");
  } else if (filename === "purchase-returns.html") {
    renderDocTable("Purchase Return", "purchase-return-table-body");
  } else if (filename === "debit-notes.html") {
    renderDocTable("Debit Note", "debit-table-body");
  } else if (filename === "inventory.html") {
    renderInventoryLogsTable();
  } else if (filename === "accounts.html") {
    renderAccountsLedgerView();
  } else if (filename === "expenses.html") {
    renderExpensesTable();
  } else if (filename === "reports.html") {
    runReport("sales", document.getElementById("btn-rep-sales"));
  } else if (filename === "notifications.html") {
    renderNotificationsView();
  } else if (filename === "profile.html") {
    document.getElementById("profile-name").value = appState.currentUser.name;
    document.getElementById("profile-email").value = appState.currentUser.email;
    document.getElementById("profile-avatar-preview").textContent = appState.currentUser.avatar;
  } else if (filename === "settings.html") {
    loadSettingsView();
  } else if (filename === "activity-log.html") {
    renderActivityLogsTable();
  } else if (filename === "create-quotation.html") {
    initCreateQuotationPage();
  } else if (filename === "adjust-stock.html") {
    initAdjustStockPage();
  } else if (filename === "add-account.html") {
    initAddAccountPage();
  } else if (filename === "transfer-funds.html") {
    initTransferFundsPage();
  }

  lucide.createIcons();
}

function updateDashboardKPIs() {
  let totalRevenue = 1250.00;
  appState.invoices.forEach(inv => {
    if (inv.status === "Paid") {
      totalRevenue += inv.grandTotal;
    }
  });

  const activeCompany = appState.companies[appState.activeCompanyIndex];
  const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

  document.getElementById("kpi-total-revenue").textContent = `${curSymbol}${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("kpi-new-customers").textContent = appState.parties.filter(p => p.type === "Customer").length + 1230;
}

// ==========================================
// DASHBOARD CHART DRAWER (CUSTOM DYNAMIC SVG)
// ==========================================

let activeChartPeriod = "3months";

const CHART_DATASETS = {
  "3months": {
    labels: ["Jun 24", "Jun 25", "Jun 26", "Jul 21", "Jul 28", "Jul 29", "Jun 30"],
    series1: [150, 80, 70, 160, 60, 50, 180],
    series2: [90, 120, 100, 110, 80, 95, 120]
  },
  "30days": {
    labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7"],
    series1: [120, 180, 90, 200, 110, 85, 160],
    series2: [80, 110, 130, 90, 140, 100, 110]
  },
  "7days": {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series1: [60, 90, 180, 140, 220, 190, 240],
    series2: [90, 100, 120, 110, 130, 160, 140]
  }
};

function updateChartPeriod(period, btn) {
  activeChartPeriod = period;
  const subtitle = document.getElementById("chart-subtitle-text");
  if (period === "3months") subtitle.textContent = "Total for the last 3 months";
  if (period === "30days") subtitle.textContent = "Total for the last 30 days";
  if (period === "7days") subtitle.textContent = "Total for the last 7 days";

  btn.closest(".chart-filters").querySelectorAll(".chart-filter-btn").forEach(b => {
    b.classList.remove("active");
  });
  btn.classList.add("active");

  drawAreaChart();
}

function drawAreaChart() {
  const container = document.getElementById("chart-container");
  const svg = document.getElementById("svg-area-chart");
  if (!container || !svg) return;

  const width = 1000;
  const height = 150; // Compact height

  const dataset = CHART_DATASETS[activeChartPeriod];
  const totalPoints = dataset.series1.length;

  const maxVal = Math.max(...dataset.series1, ...dataset.series2) * 1.15;
  const minVal = 0;
  const range = maxVal - minVal;

  const points1 = [];
  const points2 = [];

  for (let i = 0; i < totalPoints; i++) {
    const x = (i / (totalPoints - 1)) * (width - 120) + 60;
    const y1 = height - ((dataset.series1[i] - minVal) / range) * (height - 30) - 10;
    const y2 = height - ((dataset.series2[i] - minVal) / range) * (height - 30) - 10;

    points1.push({ x, y: y1, val: dataset.series1[i], label: dataset.labels[i] });
    points2.push({ x, y: y2, val: dataset.series2[i], label: dataset.labels[i] });
  }

  function getBezierPath(points) {
    if (points.length === 0) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX1 = p0.x + (p1.x - p0.x) / 3;
      const cpY1 = p0.y;
      const cpX2 = p0.x + 2 * (p1.x - p0.x) / 3;
      const cpY2 = p1.y;
      d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
    }
    return d;
  }

  const pathStroke1 = getBezierPath(points1);
  const pathStroke2 = getBezierPath(points2);

  const pathArea1 = `${pathStroke1} L ${points1[points1.length - 1].x} ${height} L ${points1[0].x} ${height} Z`;
  const pathArea2 = `${pathStroke2} L ${points2[points2.length - 1].x} ${height} L ${points2[0].x} ${height} Z`;

  document.getElementById("chart-stroke-1").setAttribute("d", pathStroke1);
  document.getElementById("chart-stroke-2").setAttribute("d", pathStroke2);
  document.getElementById("chart-area-1").setAttribute("d", pathArea1);
  document.getElementById("chart-area-2").setAttribute("d", pathArea2);

  const pointsGroup = document.getElementById("chart-interactive-points");
  const axisGroup = document.getElementById("chart-x-axis");
  pointsGroup.innerHTML = "";
  axisGroup.innerHTML = "";

  points1.forEach((pt, index) => {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", pt.x);
    text.setAttribute("y", height + 20);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "var(--text-tertiary)");
    text.setAttribute("font-size", "10");
    text.setAttribute("font-weight", "500");
    text.textContent = pt.label;
    axisGroup.appendChild(text);

    const dot1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot1.setAttribute("cx", pt.x);
    dot1.setAttribute("cy", pt.y);
    dot1.setAttribute("r", "4");
    dot1.setAttribute("fill", "var(--primary)");
    dot1.setAttribute("stroke", "var(--bg-card)");
    dot1.setAttribute("stroke-width", "1.5");
    dot1.setAttribute("style", "cursor: pointer; transition: r 0.2s;");

    dot1.addEventListener("mouseenter", (e) => {
      dot1.setAttribute("r", "6");
      showChartTooltip(e, pt.label, `Visitors: ${pt.val}`, `Benchmark: ${points2[index].val}`, pt.x, pt.y);
    });
    dot1.addEventListener("mouseleave", () => {
      dot1.setAttribute("r", "4");
      hideChartTooltip();
    });

    pointsGroup.appendChild(dot1);
  });
}

function showChartTooltip(e, date, val1, val2, x, y) {
  const tooltip = document.getElementById("chart-tooltip");
  const wrapper = document.getElementById("chart-container");
  if (!tooltip || !wrapper) return;

  document.getElementById("tooltip-date").textContent = date;
  document.getElementById("tooltip-val1").textContent = val1;
  document.getElementById("tooltip-val2").textContent = val2;

  const wrapperRect = wrapper.getBoundingClientRect();
  const posX = (x / 1000) * wrapperRect.width;
  const posY = (y / 180) * wrapperRect.height;

  tooltip.style.left = `${posX}px`;
  tooltip.style.top = `${posY}px`;
  tooltip.style.display = "flex";
}

function hideChartTooltip() {
  const tooltip = document.getElementById("chart-tooltip");
  if (tooltip) tooltip.style.display = "none";
}

// ==========================================
// DASHBOARD OUTLINE TABLE CONTROLLERS
// ==========================================

let activeTableTab = "Outline";
let columnVisibility = {
  type: true,
  status: true,
  target: true,
  limit: true,
  reviewer: true
};

let selectedRowIds = new Set();
let rowsPerPage = 10;
let currentPage = 1;

function switchTableTab(tab, btn) {
  activeTableTab = tab;
  btn.closest(".table-tabs").querySelectorAll(".table-tab-btn").forEach(b => {
    b.classList.remove("active");
  });
  btn.classList.add("active");

  renderDashboardOutlineTable();
}

function toggleTableColumn(colKey, isVisible) {
  columnVisibility[colKey] = isVisible;
  renderDashboardOutlineTable();
}

function openColumnCustomizeModal() {
  document.getElementById("col-cb-type").checked = columnVisibility.type;
  document.getElementById("col-cb-status").checked = columnVisibility.status;
  document.getElementById("col-cb-target").checked = columnVisibility.target;
  document.getElementById("col-cb-limit").checked = columnVisibility.limit;
  document.getElementById("col-cb-reviewer").checked = columnVisibility.reviewer;

  openModal("modal-customize-columns");
}

function renderDashboardOutlineTable() {
  const tbody = document.getElementById("dashboard-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  let filteredData = [...appState.dashboardOutline];
  if (activeTableTab === "Performance") {
    filteredData = filteredData.filter(d => d.status === "Done");
  } else if (activeTableTab === "Personnel") {
    filteredData = filteredData.filter(d => d.reviewer !== "design team");
  } else if (activeTableTab === "Documents") {
    filteredData = filteredData.filter(d => d.type === "Technical content" || d.type === "Sheet page");
  }

  const table = document.getElementById("dashboard-data-table");
  const headers = table.querySelectorAll("thead th");

  headers[3].style.display = columnVisibility.type ? "" : "none";
  headers[4].style.display = columnVisibility.status ? "" : "none";
  headers[5].style.display = columnVisibility.target ? "" : "none";
  headers[6].style.display = columnVisibility.limit ? "" : "none";
  headers[7].style.display = columnVisibility.reviewer ? "" : "none";

  const totalRows = filteredData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;

  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  if (paginatedData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 16px; color:var(--text-tertiary);">No outline records matched filters.</td></tr>`;
  } else {
    paginatedData.forEach((row, index) => {
      const globalIndex = startIndex + index;
      const isChecked = selectedRowIds.has(globalIndex);

      const tr = document.createElement("tr");

      const tdCheck = document.createElement("td");
      tdCheck.className = "checkbox-col";
      tdCheck.innerHTML = `<input type="checkbox" ${isChecked ? "checked" : ""} onchange="handleSelectRow(${globalIndex}, this.checked)">`;
      tr.appendChild(tdCheck);

      const tdJ = document.createElement("td");
      tdJ.className = "row-j-indicator";
      tdJ.textContent = "J";
      tr.appendChild(tdJ);

      const tdHeader = document.createElement("td");
      tdHeader.className = "cell-header-title";
      tdHeader.textContent = row.header;
      tr.appendChild(tdHeader);

      const tdType = document.createElement("td");
      tdType.style.display = columnVisibility.type ? "" : "none";
      tdType.innerHTML = `<span class="tag-pill">${row.type}</span>`;
      tr.appendChild(tdType);

      const tdStatus = document.createElement("td");
      tdStatus.style.display = columnVisibility.status ? "" : "none";
      const statusClass = row.status === "Done" ? "done" : "in-review";
      tdStatus.innerHTML = `<span class="status-pill ${statusClass}">${row.status}</span>`;
      tr.appendChild(tdStatus);

      const tdTarget = document.createElement("td");
      tdTarget.style.display = columnVisibility.target ? "" : "none";
      tdTarget.textContent = row.target;
      tr.appendChild(tdTarget);

      const tdLimit = document.createElement("td");
      tdLimit.style.display = columnVisibility.limit ? "" : "none";
      tdLimit.textContent = row.limit;
      tr.appendChild(tdLimit);

      const tdReviewer = document.createElement("td");
      tdReviewer.style.display = columnVisibility.reviewer ? "" : "none";
      const rInitials = row.reviewer.split(" ").map(w => w[0]).join("").toUpperCase().substring(0, 2);
      tdReviewer.innerHTML = `
        <div class="reviewer-cell">
          <div class="reviewer-avatar">${rInitials}</div>
          <span>${row.reviewer}</span>
        </div>
      `;
      tr.appendChild(tdReviewer);

      const tdAction = document.createElement("td");
      tdAction.innerHTML = `
        <button class="action-menu-btn" onclick="handleDashboardRowAction(${globalIndex})">
          <i data-lucide="more-horizontal"></i>
        </button>
      `;
      tr.appendChild(tdAction);

      tbody.appendChild(tr);
    });
  }

  document.getElementById("selected-rows-count").textContent = `${selectedRowIds.size} of ${totalRows} rows selected`;
  document.getElementById("pagination-page-indicator").textContent = `Page ${currentPage} of ${totalPages}`;

  document.getElementById("prev-page-btn").disabled = currentPage <= 1;
  document.getElementById("next-page-btn").disabled = currentPage >= totalPages;

  lucide.createIcons();
}

function handleSelectRow(index, isChecked) {
  if (isChecked) {
    selectedRowIds.add(index);
  } else {
    selectedRowIds.delete(index);
  }
  document.getElementById("selected-rows-count").textContent = `${selectedRowIds.size} of ${appState.dashboardOutline.length} rows selected`;
}

function toggleSelectAllRows(masterCheckbox) {
  const isChecked = masterCheckbox.checked;
  const table = document.getElementById("dashboard-data-table");
  const checkboxes = table.querySelectorAll("tbody input[type='checkbox']");

  checkboxes.forEach((cb, idx) => {
    cb.checked = isChecked;
    const globalIdx = (currentPage - 1) * rowsPerPage + idx;
    if (isChecked) {
      selectedRowIds.add(globalIdx);
    } else {
      selectedRowIds.delete(globalIdx);
    }
  });

  document.getElementById("selected-rows-count").textContent = `${selectedRowIds.size} of ${appState.dashboardOutline.length} rows selected`;
}

function changeRowsPerPage(val) {
  rowsPerPage = parseInt(val);
  currentPage = 1;
  renderDashboardOutlineTable();
}

function navigatePage(direction) {
  currentPage += direction;
  renderDashboardOutlineTable();
}

function handleDashboardRowAction(index) {
  const item = appState.dashboardOutline[index];
  triggerToast(`Opened options for outline item '${item.header}'`, "info");
}

function handleAddDashboardSection() {
  const title = prompt("Enter new document outline section title:");
  if (!title) return;

  const types = ["Narrative", "Sheet page", "Technical content", "Table of contents"];
  const reviewers = ["Eddie Lake", "Jacob Tashypulates", "design team"];

  const newSec = {
    header: title,
    type: types[Math.floor(Math.random() * types.length)],
    status: "In Review",
    target: Math.floor(Math.random() * 28) + 2,
    limit: Math.floor(Math.random() * 25) + 5,
    reviewer: reviewers[Math.floor(Math.random() * reviewers.length)]
  };

  appState.dashboardOutline.unshift(newSec);
  saveState();
  renderDashboardOutlineTable();
  logActivity("Added outline section: " + title);
  triggerToast("Added new document section to outline grid", "success");
}

// ==========================================
// ITEM / PRODUCT MANAGEMENT
// ==========================================

function renderItemsTable() {
  const tbody = document.getElementById("items-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  appState.items.forEach((item, index) => {
    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-weight:600;">${item.name}</td>
      <td><span class="tag-pill" style="font-family:monospace;">${item.sku}</span></td>
      <td>${item.category}</td>
      <td>${curSymbol}${item.purchasePrice.toFixed(2)}</td>
      <td>${curSymbol}${item.salesPrice.toFixed(2)}</td>
      <td>${item.stock} units</td>
      <td>
        <span class="status-pill ${item.stock > 5 ? 'done' : 'in-review'}">
          ${item.stock > 5 ? 'In Stock' : 'Low Stock'}
        </span>
      </td>
      <td style="display:flex; gap:6px; align-items:center;">
        <button class="action-menu-btn" onclick="openEditItemModal(${index})" title="Edit Item">
          <i data-lucide="edit-3" style="width:14px; height:14px; stroke:var(--primary)"></i>
        </button>
        <button class="action-menu-btn" onclick="deleteItem(${index})" title="Delete Item">
          <i data-lucide="trash-2" style="width:14px; height:14px; stroke:var(--danger-text)"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  lucide.createIcons();
}

function openAddItemModal() {
  document.getElementById("form-add-item").reset();
  openModal("modal-add-item");
}

function handleAddItemSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("item-name").value;
  const sku = document.getElementById("item-sku").value;
  const category = document.getElementById("item-category").value;
  const purchasePrice = parseFloat(document.getElementById("item-purchase-price").value);
  const salesPrice = parseFloat(document.getElementById("item-sales-price").value);
  const stock = parseInt(document.getElementById("item-stock").value);

  if (appState.items.some(i => i.sku === sku)) {
    triggerToast("An item with this SKU exists", "error");
    return;
  }

  const newItem = { name, sku, category, purchasePrice, salesPrice, stock };
  appState.items.push(newItem);

  // Also log initial stock adjustment log
  if (stock > 0) {
    appState.stockAdjustments.unshift({
      date: new Date().toISOString().split('T')[0],
      itemName: name,
      sku: sku,
      type: "Add",
      qty: stock,
      remarks: "Initial opening stock catalog setup",
      updatedStock: stock
    });
  }

  saveState();
  closeModal("modal-add-item");
  renderItemsTable();
  logActivity("Created new inventory item: " + name);
  triggerToast("Product logged in company database", "success");
}

function openEditItemModal(index) {
  const item = appState.items[index];
  if (!item) return;

  const editIndex = document.getElementById("edit-item-index");
  const editName = document.getElementById("edit-item-name");
  const editSku = document.getElementById("edit-item-sku");
  const editCategory = document.getElementById("edit-item-category");
  const editPurchasePrice = document.getElementById("edit-item-purchase-price");
  const editSalesPrice = document.getElementById("edit-item-sales-price");
  const editStock = document.getElementById("edit-item-stock");

  if (editIndex) editIndex.value = index;
  if (editName) editName.value = item.name;
  if (editSku) editSku.value = item.sku;
  if (editCategory) editCategory.value = item.category;
  if (editPurchasePrice) editPurchasePrice.value = item.purchasePrice;
  if (editSalesPrice) editSalesPrice.value = item.salesPrice;
  if (editStock) editStock.value = item.stock;

  openModal("modal-edit-item");
}

function handleEditItemSubmit(e) {
  e.preventDefault();

  const index = parseInt(document.getElementById("edit-item-index").value);
  const name = document.getElementById("edit-item-name").value;
  const sku = document.getElementById("edit-item-sku").value;
  const category = document.getElementById("edit-item-category").value;
  const purchasePrice = parseFloat(document.getElementById("edit-item-purchase-price").value);
  const salesPrice = parseFloat(document.getElementById("edit-item-sales-price").value);
  const stock = parseInt(document.getElementById("edit-item-stock").value);

  const item = appState.items[index];
  if (!item) return;

  if (sku !== item.sku && appState.items.some((i, idx) => i.sku === sku && idx !== index)) {
    triggerToast("An item with this SKU already exists", "error");
    return;
  }

  const difference = stock - item.stock;
  if (difference !== 0) {
    appState.stockAdjustments.unshift({
      date: new Date().toISOString().split('T')[0],
      itemName: name,
      sku: sku,
      type: difference > 0 ? "Add" : "Reduce",
      qty: Math.abs(difference),
      remarks: `Manual stock level adjustment (Catalog Edit: ${item.stock} -> ${stock})`,
      updatedStock: stock
    });
  }

  item.name = name;
  item.sku = sku;
  item.category = category;
  item.purchasePrice = purchasePrice;
  item.salesPrice = salesPrice;
  item.stock = stock;

  saveState();
  closeModal("modal-edit-item");
  renderItemsTable();
  logActivity("Updated inventory item: " + name);
  triggerToast("Product updated in company database", "success");
}

function deleteItem(index) {
  if (confirm("Remove this item from inventory records?")) {
    const item = appState.items[index];
    logActivity("Deleted inventory item: " + item.name, "Warning");
    appState.items.splice(index, 1);
    saveState();
    renderItemsTable();
    triggerToast("Item record deleted", "warning");
  }
}

function filterItemsTable(query) {
  filterGenericTable('items-table-body', query);
}

// ==========================================
// CUSTOMER & SUPPLIER MANAGEMENT
// ==========================================

function renderPartiesTable(type) {
  const tableId = type === "Customer" ? "customers-table-body" : "suppliers-table-body";
  const tbody = document.getElementById(tableId);
  if (!tbody) return;
  tbody.innerHTML = "";

  const list = appState.parties.filter(p => p.type === type);

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color:var(--text-tertiary);">No profiles registered.</td></tr>`;
    return;
  }

  list.forEach((party) => {
    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";
    const globalIndex = appState.parties.findIndex(p => p.email === party.email);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-weight:600;">${party.name}</td>
      <td>${party.email}</td>
      <td>${party.phone}</td>
      <td><span class="tag-pill" style="font-family:monospace;">${party.taxId}</span></td>
      <td style="font-weight:600; color:${party.balance >= 0 ? 'var(--text-primary)' : 'var(--danger-text)'}">
        ${curSymbol}${Math.abs(party.balance).toFixed(2)}
      </td>
      <td style="display:flex; gap:6px; align-items:center;">
        <button class="action-menu-btn" onclick="openEditPartyModal(${globalIndex}, '${type}')" title="Edit Profile">
          <i data-lucide="edit-3" style="width:14px; height:14px; stroke:var(--primary)"></i>
        </button>
        <button class="action-menu-btn" onclick="deleteParty(${globalIndex}, '${type}')" title="Delete Profile">
          <i data-lucide="trash-2" style="width:14px; height:14px; stroke:var(--danger-text)"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  lucide.createIcons();
}

function openAddPartyModal(type) {
  document.getElementById("form-add-party").reset();
  document.getElementById("party-type-input").value = type;

  document.getElementById("party-modal-title").textContent = `Register ${type}`;
  document.getElementById("party-label-name").textContent = `${type} Name`;

  openModal("modal-add-party");
}

function handlePartySubmit(e) {
  e.preventDefault();

  const type = document.getElementById("party-type-input").value;
  const name = document.getElementById("party-name").value;
  const email = document.getElementById("party-email").value;
  const phone = document.getElementById("party-phone").value;
  const taxId = document.getElementById("party-tax-id").value;
  const address = document.getElementById("party-address").value;
  const balance = parseFloat(document.getElementById("party-balance").value);

  if (appState.parties.some(p => p.email.toLowerCase() === email.toLowerCase())) {
    triggerToast("An entity profile with this email exists", "error");
    return;
  }

  const newParty = { name, type, email, phone, taxId, address, balance };
  appState.parties.push(newParty);
  saveState();

  closeModal("modal-add-party");
  renderPartiesTable(type);
  updateDashboardKPIs();
  logActivity(`Registered new ${type}: ${name}`);
  triggerToast(`Entity profile saved successfully`, "success");
}

function deleteParty(globalIndex, type) {
  const party = appState.parties[globalIndex];
  if (confirm(`Delete this ${type} profile?`)) {
    logActivity(`Deleted ${type}: ${party.name}`, "Warning");
    appState.parties.splice(globalIndex, 1);
    saveState();
    renderPartiesTable(type);
    updateDashboardKPIs();
    triggerToast("Profile removed", "warning");
  }
}

function openEditPartyModal(globalIndex, type) {
  const party = appState.parties[globalIndex];
  if (!party) return;

  const editIndex = document.getElementById("edit-party-index");
  const editType = document.getElementById("edit-party-type");
  const editName = document.getElementById("edit-party-name");
  const editEmail = document.getElementById("edit-party-email");
  const editPhone = document.getElementById("edit-party-phone");
  const editTaxId = document.getElementById("edit-party-tax-id");
  const editAddress = document.getElementById("edit-party-address");
  const editBalance = document.getElementById("edit-party-balance");

  const title = document.getElementById("edit-party-modal-title");
  const labelName = document.getElementById("edit-party-label-name");

  if (title) title.textContent = `Edit ${type} Profile`;
  if (labelName) labelName.textContent = `${type} Name`;

  if (editIndex) editIndex.value = globalIndex;
  if (editType) editType.value = type;
  if (editName) editName.value = party.name;
  if (editEmail) editEmail.value = party.email;
  if (editPhone) editPhone.value = party.phone;
  if (editTaxId) editTaxId.value = party.taxId;
  if (editAddress) editAddress.value = party.address;
  if (editBalance) editBalance.value = party.balance;

  openModal("modal-edit-party");
}

function handleEditPartySubmit(e) {
  e.preventDefault();

  const globalIndex = parseInt(document.getElementById("edit-party-index").value);
  const type = document.getElementById("edit-party-type").value;
  const name = document.getElementById("edit-party-name").value;
  const email = document.getElementById("edit-party-email").value;
  const phone = document.getElementById("edit-party-phone").value;
  const taxId = document.getElementById("edit-party-tax-id").value;
  const address = document.getElementById("edit-party-address").value;
  const balance = parseFloat(document.getElementById("edit-party-balance").value) || 0;

  const party = appState.parties[globalIndex];
  if (!party) return;

  if (email.toLowerCase() !== party.email.toLowerCase() && appState.parties.some((p, idx) => p.email.toLowerCase() === email.toLowerCase() && idx !== globalIndex)) {
    triggerToast("An entity profile with this email already exists", "error");
    return;
  }

  party.name = name;
  party.email = email;
  party.phone = phone;
  party.taxId = taxId;
  party.address = address;
  party.balance = balance;

  saveState();
  closeModal("modal-edit-party");
  renderPartiesTable(type);
  updateDashboardKPIs();
  logActivity(`Updated ${type} profile: ${name}`);
  triggerToast("Profile updated successfully", "success");
}

  // ==========================================
  // DYNAMIC DOCUMENTS BUILDER (SALES INVOICES)
  // ==========================================

  function renderInvoicesTable() {
    const tbody = document.getElementById("invoices-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (appState.invoices.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:24px; color:var(--text-tertiary);">No invoices created.</td></tr>`;
      return;
    }

    appState.invoices.forEach((inv, index) => {
      const activeCompany = appState.companies[appState.activeCompanyIndex];
      const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td style="font-weight:700; font-family:monospace; color:var(--info-text); cursor:pointer;" onclick="viewDocDetails('Sales Invoice', ${index})">
        ${inv.id}
      </td>
      <td style="font-weight:600;">${inv.customerName}</td>
      <td>${inv.date}</td>
      <td>${curSymbol}${inv.subTotal.toFixed(2)}</td>
      <td>${curSymbol}${inv.taxTotal.toFixed(2)}</td>
      <td style="font-weight:700;">${curSymbol}${inv.grandTotal.toFixed(2)}</td>
      <td>
        <span class="status-pill ${inv.status === 'Paid' ? 'done' : 'in-review'}">
          ${inv.status}
        </span>
      </td>
      <td>
        <div style="display:flex; gap:8px;">
          <button class="action-menu-btn" onclick="viewDocDetails('Sales Invoice', ${index})" title="View Details">
            <i data-lucide="eye" style="width:14px; height:14px;"></i>
          </button>
          <button class="action-menu-btn" onclick="deleteDoc('Sales Invoice', ${index})" title="Cancel Invoice">
            <i data-lucide="trash-2" style="width:14px; height:14px; stroke:var(--danger-text)"></i>
          </button>
        </div>
      </td>
    `;
      tbody.appendChild(tr);
    });

    lucide.createIcons();
  }

  function openCreateInvoiceModal() {
    const select = document.getElementById("invoice-customer-select");
    select.innerHTML = "";

    const customers = appState.parties.filter(p => p.type === "Customer");
    if (customers.length === 0) {
      triggerToast("Create a Customer profile first before generating invoices", "warning");
      switchMainPage("page-customers");
      return;
    }

    customers.forEach(cust => {
      const opt = document.createElement("option");
      opt.value = cust.name;
      opt.textContent = cust.name;
      select.appendChild(opt);
    });

    document.getElementById("invoice-date-input").value = new Date().toISOString().split('T')[0];
    document.getElementById("invoice-items-rows").innerHTML = "";
    addInvoiceLineRow();

    calculateInvoiceTotals();
    openModal("modal-create-invoice");
  }

  function addInvoiceLineRow() {
    const tbody = document.getElementById("invoice-items-rows");
    const tr = document.createElement("tr");

    let options = `<option value="" disabled selected>Choose Item</option>`;
    appState.items.forEach(item => {
      options += `<option value="${item.name}">${item.name}</option>`;
    });

    tr.innerHTML = `
    <td>
      <select class="form-control form-select item-select-control" onchange="handleLineItemSelect(this)" required>
        ${options}
      </select>
    </td>
    <td>
      <input type="number" step="0.01" class="form-control item-price-control" value="0.00" oninput="calculateInvoiceTotals()" required>
    </td>
    <td>
      <input type="number" class="form-control item-qty-control" value="1" min="1" oninput="calculateInvoiceTotals()" required>
    </td>
    <td>
      <select class="form-control form-select item-tax-control" onchange="calculateInvoiceTotals()">
        <option value="18">18% GST</option>
        <option value="12">12% GST</option>
        <option value="5">5% GST</option>
        <option value="0">0% Exempt</option>
      </select>
    </td>
    <td style="font-weight:600; text-align:right;" class="item-row-total-cell">$0.00</td>
    <td>
      <button type="button" class="action-menu-btn" onclick="this.closest('tr').remove(); calculateInvoiceTotals();" title="Remove row">
        <i data-lucide="minus-circle" style="width:14px; height:14px; stroke:var(--danger-text);"></i>
      </button>
    </td>
  `;

    tbody.appendChild(tr);
    lucide.createIcons();
  }

  function handleLineItemSelect(selectEl) {
    const itemName = selectEl.value;
    const itemObj = appState.items.find(i => i.name === itemName);
    if (!itemObj) return;

    const row = selectEl.closest("tr");
    row.querySelector(".item-price-control").value = itemObj.salesPrice.toFixed(2);
    calculateInvoiceTotals();
  }

  function calculateInvoiceTotals() {
    const rows = document.querySelectorAll("#invoice-items-rows tr");
    let subTotal = 0;
    let taxTotal = 0;

    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

    rows.forEach(row => {
      const price = parseFloat(row.querySelector(".item-price-control").value) || 0;
      const qty = parseInt(row.querySelector(".item-qty-control").value) || 0;
      const taxRate = parseFloat(row.querySelector(".item-tax-control").value) || 0;

      const rowSub = price * qty;
      const rowTax = rowSub * (taxRate / 100);
      const rowTotal = rowSub + rowTax;

      row.querySelector(".item-row-total-cell").textContent = `${curSymbol}${rowTotal.toFixed(2)}`;
      subTotal += rowSub;
      taxTotal += rowTax;
    });

    const grandTotal = subTotal + taxTotal;
    document.getElementById("invoice-sub-total").textContent = `${curSymbol}${subTotal.toFixed(2)}`;
    document.getElementById("invoice-tax-total").textContent = `${curSymbol}${taxTotal.toFixed(2)}`;
    document.getElementById("invoice-grand-total").textContent = `${curSymbol}${grandTotal.toFixed(2)}`;
  }

  function handleCreateInvoiceSubmit(e) {
    e.preventDefault();

    const customerName = document.getElementById("invoice-customer-select").value;
    const date = document.getElementById("invoice-date-input").value;

    const rows = document.querySelectorAll("#invoice-items-rows tr");
    if (rows.length === 0) {
      triggerToast("Invoice requires at least one line item", "error");
      return;
    }

    const lineItems = [];
    let subTotal = 0;
    let taxTotal = 0;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const itemName = row.querySelector(".item-select-control").value;
      const price = parseFloat(row.querySelector(".item-price-control").value) || 0;
      const qty = parseInt(row.querySelector(".item-qty-control").value) || 0;
      const taxRate = parseFloat(row.querySelector(".item-tax-control").value) || 0;

      if (!itemName) {
        triggerToast("All line items must select a product", "error");
        return;
      }

      const rowSub = price * qty;
      const rowTax = rowSub * (taxRate / 100);

      lineItems.push({ itemName, price, qty, taxRate, total: rowSub + rowTax });
      subTotal += rowSub;
      taxTotal += rowTax;

      // Adjust inventory
      const itemObj = appState.items.find(item => item.name === itemName);
      if (itemObj) {
        const oldStock = itemObj.stock;
        itemObj.stock = Math.max(0, itemObj.stock - qty);

        appState.stockAdjustments.unshift({
          date: date,
          itemName: itemName,
          sku: itemObj.sku,
          type: "Reduce",
          qty: qty,
          remarks: "Sales Invoice " + appState.invoicePrefix + appState.invoiceCounter,
          updatedStock: itemObj.stock
        });

        if (itemObj.stock <= 2) {
          logAlert(`Low Stock Warning: ${itemName}`, `Only ${itemObj.stock} units remaining in inventory catalog.`);
        }
      }
    }

    const invoiceId = `${appState.invoicePrefix}${appState.invoiceCounter}`;
    appState.invoiceCounter++;

    const newInvoice = {
      id: invoiceId,
      customerName,
      date,
      subTotal,
      taxTotal,
      grandTotal: subTotal + taxTotal,
      status: "Unpaid",
      items: lineItems
    };

    appState.invoices.unshift(newInvoice);

    const customerObj = appState.parties.find(p => p.name === customerName);
    if (customerObj) {
      customerObj.balance += newInvoice.grandTotal;
    }

    saveState();
    closeModal("modal-create-invoice");
    renderInvoicesTable();
    updateDashboardKPIs();

    logActivity("Generated Sales Invoice " + invoiceId);
    triggerToast(`Sales Invoice ${invoiceId} generated`, "success");
  }

  // ==========================================
  // UNIVERSAL DOCUMENT WRITER (QUOTATIONS, PO, VENDOR BILLS ETC)
  // ==========================================

  const DEST_STATE_MAPS = {
    "Quotation": "quotations",
    "Proforma Invoice": "proformas",
    "Sales Return": "salesReturns",
    "Credit Note": "creditNotes",
    "Delivery Challan": "deliveryChallans",
    "Purchase Order": "purchaseOrders",
    "Purchase Invoice": "purchaseInvoices",
    "Purchase Return": "purchaseReturns",
    "Debit Note": "debitNotes"
  };

  function getDocList(type) {
    const key = DEST_STATE_MAPS[type];
    if (!appState[key]) appState[key] = [];
    return appState[key];
  }

  function renderDocTable(type, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = "";

    const list = getDocList(type);

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:16px; color:var(--text-tertiary);">No records logged.</td></tr>`;
      return;
    }

    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";
    const partyHeader = type.includes("Purchase") ? "Supplier" : "Customer";

    list.forEach((doc, index) => {
      const tr = document.createElement("tr");

      // Check if delivery challan (which has no financial valuations)
      if (type === "Delivery Challan") {
        tr.innerHTML = `
        <td style="font-weight:700; font-family:monospace; color:var(--info-text); cursor:pointer;" onclick="viewDocDetails('${type}', ${index})">
          ${doc.id}
        </td>
        <td style="font-weight:600;">${doc.partyName}</td>
        <td>${doc.date}</td>
        <td>${doc.totalQty} items</td>
        <td><span class="status-pill done">Dispatched</span></td>
        <td>
          <button class="action-menu-btn" onclick="viewDocDetails('${type}', ${index})" title="View Details">
            <i data-lucide="eye" style="width:14px; height:14px;"></i>
          </button>
        </td>
      `;
      } else {
        tr.innerHTML = `
        <td style="font-weight:700; font-family:monospace; color:var(--info-text); cursor:pointer;" onclick="viewDocDetails('${type}', ${index})">
          ${doc.id}
        </td>
        <td style="font-weight:600;">${doc.partyName}</td>
        <td>${doc.date}</td>
        <td>${curSymbol}${doc.subTotal.toFixed(2)}</td>
        <td>${curSymbol}${doc.taxTotal.toFixed(2)}</td>
        <td style="font-weight:700;">${curSymbol}${doc.grandTotal.toFixed(2)}</td>
        <td><span class="status-pill ${doc.status === 'Paid' || doc.status === 'Approved' ? 'done' : 'in-review'}">${doc.status || 'Active'}</span></td>
        <td>
          <div style="display:flex; gap:8px;">
            <button class="action-menu-btn" onclick="viewDocDetails('${type}', ${index})" title="View Details">
              <i data-lucide="eye" style="width:14px; height:14px;"></i>
            </button>
            <button class="action-menu-btn" onclick="deleteDoc('${type}', ${index})" title="Delete Record">
              <i data-lucide="trash-2" style="width:14px; height:14px; stroke:var(--danger-text)"></i>
            </button>
          </div>
        </td>
      `;
      }

      tbody.appendChild(tr);
    });

    lucide.createIcons();
  }

  function openCreateDocModal(type) {
    document.getElementById("form-create-document").reset();
    document.getElementById("doc-type-input-main").value = type;

    document.getElementById("doc-modal-title-main").textContent = `Create ${type}`;
    document.getElementById("doc-save-btn-label").textContent = `Save ${type}`;

    const label = document.getElementById("doc-party-label-main");
    const select = document.getElementById("doc-party-select-main");
    select.innerHTML = "";

    // Decide party types
    const partyType = type.includes("Purchase") ? "Supplier" : "Customer";
    label.textContent = `Select ${partyType}`;

    const parties = appState.parties.filter(p => p.type === partyType);
    if (parties.length === 0) {
      triggerToast(`Please create a ${partyType} profile first`, "warning");
      switchMainPage(partyType === "Customer" ? "page-customers" : "page-suppliers");
      return;
    }

    parties.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.name;
      opt.textContent = p.name;
      select.appendChild(opt);
    });

    document.getElementById("doc-date-input-main").value = new Date().toISOString().split('T')[0];
    document.getElementById("doc-items-rows-main").innerHTML = "";
    addDocLineRow();
    calculateDocTotals();

    openModal("modal-create-document");
  }

  function addDocLineRow() {
    const tbody = document.getElementById("doc-items-rows-main");
    const tr = document.createElement("tr");

    let options = `<option value="" disabled selected>Choose Item</option>`;
    appState.items.forEach(item => {
      options += `<option value="${item.name}">${item.name}</option>`;
    });

    tr.innerHTML = `
    <td>
      <select class="form-control form-select doc-item-select-control" onchange="handleDocLineItemSelect(this)" required>
        ${options}
      </select>
    </td>
    <td>
      <input type="number" step="0.01" class="form-control doc-item-price-control" value="0.00" oninput="calculateDocTotals()" required>
    </td>
    <td>
      <input type="number" class="form-control doc-item-qty-control" value="1" min="1" oninput="calculateDocTotals()" required>
    </td>
    <td>
      <select class="form-control form-select doc-item-tax-control" onchange="calculateDocTotals()">
        <option value="18">18% GST</option>
        <option value="12">12% GST</option>
        <option value="5">5% GST</option>
        <option value="0">0% Exempt</option>
      </select>
    </td>
    <td style="font-weight:600; text-align:right;" class="doc-item-row-total-cell">$0.00</td>
    <td>
      <button type="button" class="action-menu-btn" onclick="this.closest('tr').remove(); calculateDocTotals();">
        <i data-lucide="minus-circle" style="width:14px; height:14px; stroke:var(--danger-text);"></i>
      </button>
    </td>
  `;

    tbody.appendChild(tr);
    lucide.createIcons();
  }

  function handleDocLineItemSelect(selectEl) {
    const itemName = selectEl.value;
    const itemObj = appState.items.find(i => i.name === itemName);
    if (!itemObj) return;

    const row = selectEl.closest("tr");
    const type = document.getElementById("doc-type-input-main").value;

    // Decide price based on buy/sell document types
    const price = type.includes("Purchase") ? itemObj.purchasePrice : itemObj.salesPrice;
    row.querySelector(".doc-item-price-control").value = price.toFixed(2);
    calculateDocTotals();
  }

  function calculateDocTotals() {
    const rows = document.querySelectorAll("#doc-items-rows-main tr");
    let subTotal = 0;
    let taxTotal = 0;
    let totalQty = 0;

    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

    rows.forEach(row => {
      const price = parseFloat(row.querySelector(".doc-item-price-control").value) || 0;
      const qty = parseInt(row.querySelector(".doc-item-qty-control").value) || 0;
      const taxRate = parseFloat(row.querySelector(".doc-item-tax-control").value) || 0;

      totalQty += qty;
      const rowSub = price * qty;
      const rowTax = rowSub * (taxRate / 100);
      const rowTotal = rowSub + rowTax;

      row.querySelector(".doc-item-row-total-cell").textContent = `${curSymbol}${rowTotal.toFixed(2)}`;
      subTotal += rowSub;
      taxTotal += rowTax;
    });

    const grandTotal = subTotal + taxTotal;
    document.getElementById("doc-sub-total-main").textContent = `${curSymbol}${subTotal.toFixed(2)}`;
    document.getElementById("doc-tax-total-main").textContent = `${curSymbol}${taxTotal.toFixed(2)}`;
    document.getElementById("doc-grand-total-main").textContent = `${curSymbol}${grandTotal.toFixed(2)}`;

    return { subTotal, taxTotal, grandTotal, totalQty };
  }

  function handleCreateDocSubmit(e) {
    e.preventDefault();

    const type = document.getElementById("doc-type-input-main").value;
    const partyName = document.getElementById("doc-party-select-main").value;
    const date = document.getElementById("doc-date-input-main").value;

    const rows = document.querySelectorAll("#doc-items-rows-main tr");
    if (rows.length === 0) {
      triggerToast("Document requires at least one item row", "error");
      return;
    }

    const { subTotal, taxTotal, grandTotal, totalQty } = calculateDocTotals();
    const lineItems = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const itemName = row.querySelector(".doc-item-select-control").value;
      const price = parseFloat(row.querySelector(".doc-item-price-control").value) || 0;
      const qty = parseInt(row.querySelector(".doc-item-qty-control").value) || 0;
      const taxRate = parseFloat(row.querySelector(".doc-item-tax-control").value) || 0;

      if (!itemName) {
        triggerToast("Complete item selections before saving", "error");
        return;
      }

      lineItems.push({ itemName, price, qty, taxRate, total: (price * qty * (1 + taxRate / 100)) });

      // Adjust inventory & balances depending on transaction side-effects
      const itemObj = appState.items.find(item => item.name === itemName);

      if (type === "Purchase Invoice" && itemObj) {
        itemObj.stock += qty; // Add stock on purchase
        appState.stockAdjustments.unshift({
          date: date, itemName: itemName, sku: itemObj.sku, type: "Add", qty: qty, remarks: "Purchase Bill " + appState.docCounter, updatedStock: itemObj.stock
        });
      } else if (type === "Sales Return" && itemObj) {
        itemObj.stock += qty; // Stock returned
        appState.stockAdjustments.unshift({
          date: date, itemName: itemName, sku: itemObj.sku, type: "Add", qty: qty, remarks: "Sales Return " + appState.docCounter, updatedStock: itemObj.stock
        });
      } else if (type === "Purchase Return" && itemObj) {
        itemObj.stock = Math.max(0, itemObj.stock - qty); // Stock returned to supplier
        appState.stockAdjustments.unshift({
          date: date, itemName: itemName, sku: itemObj.sku, type: "Reduce", qty: qty, remarks: "Purchase Return " + appState.docCounter, updatedStock: itemObj.stock
        });
      }
    }

    const docId = `DOC-${appState.docCounter}`;
    appState.docCounter++;

    const newDoc = {
      id: docId,
      partyName,
      date,
      subTotal,
      taxTotal,
      grandTotal,
      totalQty,
      status: type.includes("Invoice") ? "Unpaid" : "Active",
      items: lineItems
    };

    const list = getDocList(type);
    list.unshift(newDoc);

    // Adjust balances
    const partyObj = appState.parties.find(p => p.name === partyName);
    if (partyObj) {
      if (type === "Purchase Invoice") {
        partyObj.balance -= grandTotal; // Increase supplier payable (shown as negative)
      } else if (type === "Sales Return" || type === "Credit Note") {
        partyObj.balance = Math.max(0, partyObj.balance - grandTotal); // Decrease customer outstanding
      } else if (type === "Purchase Return" || type === "Debit Note") {
        partyObj.balance += grandTotal; // Decrease supplier payable
      }
    }

    saveState();
    closeModal("modal-create-document");

    // Reload correct page view
    const activePageId = document.querySelector(".main-page-view.active").id;
    switchMainPage(activePageId);

    logActivity(`Generated ${type}: ${docId}`);
    triggerToast(`${type} recorded successfully`, "success");
  }

  function deleteDoc(type, index) {
    if (confirm(`Remove this ${type} record?`)) {
      const list = getDocList(type);
      const doc = list[index];

      // Credit back balance
      const partyObj = appState.parties.find(p => p.name === doc.partyName);
      if (partyObj) {
        if (type === "Purchase Invoice") {
          partyObj.balance += doc.grandTotal;
        } else if (type === "Sales Return" || type === "Credit Note") {
          partyObj.balance += doc.grandTotal;
        } else if (type === "Purchase Return" || type === "Debit Note") {
          partyObj.balance -= doc.grandTotal;
        }
      }

      logActivity(`Deleted ${type}: ${doc.id}`, "Warning");
      list.splice(index, 1);
      saveState();

      const activePageId = document.querySelector(".main-page-view.active").id;
      switchMainPage(activePageId);
      triggerToast("Record deleted", "warning");
    }
  }

  // ==========================================
  // DYNAMIC PAYMENTS (IN / OUT)
  // ==========================================

  function renderPaymentTable(type, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = "";

    const list = appState.payments.filter(p => p.type === type);

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:16px; color:var(--text-tertiary);">No transactions recorded.</td></tr>`;
      return;
    }

    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

    list.forEach((pay, index) => {
      const globalIndex = appState.payments.findIndex(p => p.id === pay.id);
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td style="font-weight:700; font-family:monospace;">${pay.id}</td>
      <td style="font-weight:600;">${pay.partyName}</td>
      <td>${pay.date}</td>
      <td><span class="tag-pill">${pay.refNo || 'N/A'}</span></td>
      <td>${pay.mode}</td>
      <td style="font-weight:700; color:var(--success-text);">${curSymbol}${pay.amount.toFixed(2)}</td>
      <td>
        <button class="action-menu-btn" onclick="deletePayment(${globalIndex})" title="Remove Voucher">
          <i data-lucide="trash-2" style="width:14px; height:14px; stroke:var(--danger-text)"></i>
        </button>
      </td>
    `;
      tbody.appendChild(tr);
    });

    lucide.createIcons();
  }

  function openRecordPaymentModal(type) {
    document.getElementById("form-record-payment").reset();
    document.getElementById("payment-type-input-main").value = type;

    document.getElementById("payment-modal-title-main").textContent = `Record ${type}`;

    const label = document.getElementById("payment-label-party");
    const select = document.getElementById("payment-party-select");
    select.innerHTML = "";

    const partyType = type === "Payment In" ? "Customer" : "Supplier";
    label.textContent = `Select ${partyType}`;

    const parties = appState.parties.filter(p => p.type === partyType);
    if (parties.length === 0) {
      triggerToast(`Please register a ${partyType} profile first`, "warning");
      switchMainPage(partyType === "Customer" ? "page-customers" : "page-suppliers");
      return;
    }

    parties.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.name;
      opt.textContent = p.name;
      select.appendChild(opt);
    });

    document.getElementById("payment-date-input").value = new Date().toISOString().split('T')[0];
    openModal("modal-record-payment");
  }

  function handleRecordPaymentSubmit(e) {
    e.preventDefault();

    const type = document.getElementById("payment-type-input-main").value;
    const partyName = document.getElementById("payment-party-select").value;
    const amount = parseFloat(document.getElementById("payment-amount-input").value);
    const date = document.getElementById("payment-date-input").value;
    const mode = document.getElementById("payment-mode-select").value;
    const refNo = document.getElementById("payment-ref-input").value;

    const payId = `PAY-${Math.floor(Math.random() * 9000) + 1000}`;

    const newPay = { id: payId, partyName, type, date, refNo, mode, amount };
    appState.payments.unshift(newPay);

    // Adjust balances and bank registers
    const partyObj = appState.parties.find(p => p.name === partyName);
    if (partyObj) {
      if (type === "Payment In") {
        partyObj.balance = Math.max(0, partyObj.balance - amount); // Reduce customer outstanding
      } else {
        partyObj.balance += amount; // Reduce supplier payable (adds toward 0)
      }
    }

    // Update bank balances
    const accName = mode === "Cash" ? "Cash Petty Vault" : "Chase Operating Bank";
    const accObj = appState.bankAccounts.find(a => a.name === accName);
    if (accObj) {
      if (type === "Payment In") {
        accObj.balance += amount;
      } else {
        accObj.balance = Math.max(0, accObj.balance - amount);
      }

      // Add ledger entry
      appState.ledgerTxns.unshift({
        date,
        accountName: accName,
        partyName,
        type: type === "Payment In" ? "Credit" : "Debit",
        refNo: refNo || payId,
        amount,
        balance: accObj.balance
      });
    }

    saveState();
    closeModal("modal-record-payment");

    const activePageId = document.querySelector(".main-page-view.active").id;
    switchMainPage(activePageId);

    logActivity(`Recorded payment: ${payId} (${type})`);
    triggerToast(`Payment logged successfully`, "success");
  }

  function deletePayment(index) {
    if (confirm("Cancel this payment record?")) {
      const pay = appState.payments[index];
      const partyObj = appState.parties.find(p => p.name === pay.partyName);

      // Credit back balance
      if (partyObj) {
        if (pay.type === "Payment In") {
          partyObj.balance += pay.amount;
        } else {
          partyObj.balance -= pay.amount;
        }
      }

      // Revert bank balances
      const accName = pay.mode === "Cash" ? "Cash Petty Vault" : "Chase Operating Bank";
      const accObj = appState.bankAccounts.find(a => a.name === accName);
      if (accObj) {
        if (pay.type === "Payment In") {
          accObj.balance = Math.max(0, accObj.balance - pay.amount);
        } else {
          accObj.balance += pay.amount;
        }
      }

      logActivity(`Cancelled payment: ${pay.id}`, "Warning");
      appState.payments.splice(index, 1);
      saveState();

      const activePageId = document.querySelector(".main-page-view.active").id;
      switchMainPage(activePageId);
      triggerToast("Payment cancelled", "warning");
    }
  }

  // ==========================================
  // GENERAL INVENTORY CONTROLLERS
  // ==========================================

  function renderInventoryLogsTable() {
    const tbody = document.getElementById("inventory-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (appState.stockAdjustments.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:16px; color:var(--text-tertiary);">No adjustment logs.</td></tr>`;
      return;
    }

    appState.stockAdjustments.forEach(log => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${log.date}</td>
      <td style="font-weight:600;">${log.itemName}</td>
      <td><span class="tag-pill" style="font-family:monospace;">${log.sku}</span></td>
      <td>
        <span class="status-pill ${log.type === 'Add' ? 'done' : 'in-review'}">
          ${log.type === 'Add' ? 'Added (+)' : 'Reduced (-)'}
        </span>
      </td>
      <td style="font-weight:700;">${log.qty} units</td>
      <td style="color:var(--text-secondary);">${log.remarks}</td>
      <td style="font-weight:600;">${log.updatedStock}</td>
    `;
      tbody.appendChild(tr);
    });
  }

  function openStockAdjustmentModal() {
    const select = document.getElementById("adjust-item-select");
    select.innerHTML = "";

    appState.items.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.name;
      opt.textContent = `${item.name} (${item.sku})`;
      select.appendChild(opt);
    });

    document.getElementById("form-adjust-stock").reset();
    openModal("modal-adjust-stock");
  }

  function handleStockAdjustmentSubmit(e) {
    e.preventDefault();

    const itemName = document.getElementById("adjust-item-select").value;
    const type = document.getElementById("adjust-type-select").value;
    const qty = parseInt(document.getElementById("adjust-qty-input").value);
    const remarks = document.getElementById("adjust-remarks-input").value;

    const itemObj = appState.items.find(i => i.name === itemName);
    if (!itemObj) return;

    if (type === "Reduce" && itemObj.stock < qty) {
      triggerToast("Insufficient item inventory stock levels", "error");
      return;
    }

    if (type === "Add") {
      itemObj.stock += qty;
    } else {
      itemObj.stock -= qty;
    }

    // Append logs
    appState.stockAdjustments.unshift({
      date: new Date().toISOString().split('T')[0],
      itemName,
      sku: itemObj.sku,
      type,
      qty,
      remarks,
      updatedStock: itemObj.stock
    });

    saveState();
    closeModal("modal-adjust-stock");
    renderInventoryLogsTable();

    logActivity(`Adjusted stock of ${itemName} (${type === 'Add' ? '+' : '-'}${qty})`);
    triggerToast("Stock adjustment logged", "success");
  }

  // ==========================================
  // ACCOUNTS & FUNDS TRANSFER CONTROLLERS
  // ==========================================

  function renderAccountsLedgerView() {
    const cardsGrid = document.getElementById("accounts-cards-grid");
    const tbody = document.getElementById("accounts-table-body");
    if (!cardsGrid || !tbody) return;

    cardsGrid.innerHTML = "";
    tbody.innerHTML = "";

    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

    // Render cards
    appState.bankAccounts.forEach(acc => {
      const card = document.createElement("div");
      card.className = "kpi-card";
      card.innerHTML = `
      <div class="kpi-header">
        <span class="kpi-label">${acc.name}</span>
        <span class="tag-pill" style="font-size:10px;">${acc.type}</span>
      </div>
      <div class="kpi-value-container">
        <span class="kpi-value">${curSymbol}${acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
      </div>
      <div class="kpi-footer">
        <span>${acc.details || 'ID: ' + acc.id}</span>
      </div>
    `;
      cardsGrid.appendChild(card);
    });

    // Render transactions
    if (appState.ledgerTxns.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:16px; color:var(--text-tertiary);">No transactions history.</td></tr>`;
      return;
    }

    appState.ledgerTxns.forEach(tx => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${tx.date}</td>
      <td style="font-weight:600;">${tx.accountName}</td>
      <td>${tx.partyName}</td>
      <td><span class="tag-pill">${tx.type}</span></td>
      <td><span class="tag-pill" style="font-family:monospace;">${tx.refNo}</span></td>
      <td style="color:var(--success-text); font-weight:600;">${tx.type === 'Credit' ? curSymbol + tx.amount.toFixed(2) : '-'}</td>
      <td style="color:var(--danger-text); font-weight:600;">${tx.type === 'Debit' ? curSymbol + tx.amount.toFixed(2) : '-'}</td>
      <td style="font-weight:700;">${curSymbol}${tx.balance.toFixed(2)}</td>
    `;
      tbody.appendChild(tr);
    });
  }

  function openAddAccountModal() {
    document.getElementById("form-add-account").reset();
    openModal("modal-add-account");
  }

  function handleAddAccountSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("account-name-input").value;
    const type = document.getElementById("account-type-select").value;
    const details = document.getElementById("account-number-input").value;
    const balance = parseFloat(document.getElementById("account-balance-input").value);

    const accId = `ACC-${Math.floor(Math.random() * 90) + 10}`;

    const newAcc = { id: accId, name, type, details, balance };
    appState.bankAccounts.push(newAcc);

    // Opening Balance transaction
    if (balance > 0) {
      appState.ledgerTxns.unshift({
        date: new Date().toISOString().split('T')[0],
        accountName: name,
        partyName: "Opening Balance",
        type: "Credit",
        refNo: "INIT-" + accId,
        amount: balance,
        balance
      });
    }

    saveState();
    closeModal("modal-add-account");
    renderAccountsLedgerView();

    logActivity("Created bank account: " + name);
    triggerToast("New ledger account setup complete", "success");
  }

function openEditAccountModal(index) {
  const acc = appState.bankAccounts[index];
  if (!acc) return;
  
  const editIndex = document.getElementById("edit-account-index");
  const editName = document.getElementById("edit-account-name");
  const editType = document.getElementById("edit-account-type");
  const editNumber = document.getElementById("edit-account-number");
  const editBalance = document.getElementById("edit-account-balance");
  
  if (editIndex) editIndex.value = index;
  if (editName) editName.value = acc.name;
  if (editType) editType.value = acc.type;
  if (editNumber) editNumber.value = acc.details || '';
  if (editBalance) editBalance.value = acc.balance;
  
  openModal("modal-edit-account");
}

function handleEditAccountSubmit(e) {
  e.preventDefault();
  
  const index = parseInt(document.getElementById("edit-account-index").value);
  const name = document.getElementById("edit-account-name").value;
  const type = document.getElementById("edit-account-type").value;
  const details = document.getElementById("edit-account-number").value;
  const balance = parseFloat(document.getElementById("edit-account-balance").value) || 0;
  
  const acc = appState.bankAccounts[index];
  if (!acc) return;
  
  const difference = balance - acc.balance;
  if (difference !== 0) {
    appState.ledgerTxns.unshift({
      date: new Date().toISOString().split('T')[0],
      accountName: name,
      partyName: "Balance Correction (Catalog Edit)",
      type: difference > 0 ? "Credit" : "Debit",
      refNo: "ADJ-" + acc.id,
      amount: Math.abs(difference),
      balance: balance
    });
  }
  
  if (name !== acc.name) {
    appState.ledgerTxns.forEach(tx => {
      if (tx.accountName === acc.name) {
        tx.accountName = name;
      }
    });
  }
  
  acc.name = name;
  acc.type = type;
  acc.details = details;
  acc.balance = balance;
  
  saveState();
  closeModal("modal-edit-account");
  renderAccountsLedgerView();
  
  logActivity("Updated bank account: " + name);
  triggerToast("Ledger account updated", "success");
}

  function openTransferFundsModal() {
    const from = document.getElementById("transfer-from-select");
    const to = document.getElementById("transfer-to-select");
    from.innerHTML = "";
    to.innerHTML = "";

    appState.bankAccounts.forEach(acc => {
      const opt1 = document.createElement("option");
      opt1.value = acc.name;
      opt1.textContent = `${acc.name} (${acc.type})`;
      from.appendChild(opt1);

      const opt2 = document.createElement("option");
      opt2.value = acc.name;
      opt2.textContent = `${acc.name} (${acc.type})`;
      to.appendChild(opt2);
    });

    document.getElementById("form-transfer-funds").reset();
    document.getElementById("transfer-date-input").value = new Date().toISOString().split('T')[0];
    openModal("modal-transfer-funds");
  }

  function handleTransferFundsSubmit(e) {
    e.preventDefault();

    const fromName = document.getElementById("transfer-from-select").value;
    const toName = document.getElementById("transfer-to-select").value;
    const amount = parseFloat(document.getElementById("transfer-amount-input").value);
    const date = document.getElementById("transfer-date-input").value;
    const refNo = document.getElementById("transfer-ref-input").value;

    if (fromName === toName) {
      triggerToast("Debit source and Credit target cannot match", "error");
      return;
    }

    const fromAcc = appState.bankAccounts.find(a => a.name === fromName);
    const toAcc = appState.bankAccounts.find(a => a.name === toName);

    if (fromAcc.balance < amount) {
      triggerToast("Insufficient cash reserves in source account", "error");
      return;
    }

    fromAcc.balance -= amount;
    toAcc.balance += amount;

    // Post dual-entry transactions
    appState.ledgerTxns.unshift({
      date, accountName: fromName, partyName: toName, type: "Debit", refNo, amount, balance: fromAcc.balance
    });

    appState.ledgerTxns.unshift({
      date, accountName: toName, partyName: fromName, type: "Credit", refNo, amount, balance: toAcc.balance
    });

    saveState();
    closeModal("modal-transfer-funds");
    renderAccountsLedgerView();

    logActivity(`Transferred funds: ${amount} from ${fromName} to ${toName}`);
    triggerToast("Fund transfer executed successfully", "success");
  }

  // ==========================================
  // EXPENSE VOUCHER CONTROLLERS
  // ==========================================

  function renderExpensesTable() {
    const tbody = document.getElementById("expenses-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (appState.expenses.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:16px; color:var(--text-tertiary);">No expenses recorded.</td></tr>`;
      return;
    }

    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

    appState.expenses.forEach((exp, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td style="font-weight:700; font-family:monospace;">${exp.id}</td>
      <td>${exp.date}</td>
      <td><span class="tag-pill">${exp.category}</span></td>
      <td>${exp.accountName}</td>
      <td>${exp.desc}</td>
      <td style="font-weight:700; color:var(--danger-text);">${curSymbol}${exp.amount.toFixed(2)}</td>
      <td>
        <button class="action-menu-btn" onclick="deleteExpense(${index})" title="Delete Expense">
          <i data-lucide="trash-2" style="width:14px; height:14px; stroke:var(--danger-text)"></i>
        </button>
      </td>
    `;
      tbody.appendChild(tr);
    });

    lucide.createIcons();
  }

  function openRecordExpenseModal() {
    const select = document.getElementById("expense-account-select");
    select.innerHTML = "";

    appState.bankAccounts.forEach(acc => {
      const opt = document.createElement("option");
      opt.value = acc.name;
      opt.textContent = acc.name;
      select.appendChild(opt);
    });

    document.getElementById("form-record-expense").reset();
    document.getElementById("expense-date-input").value = new Date().toISOString().split('T')[0];
    openModal("modal-record-expense");
  }

  function handleRecordExpenseSubmit(e) {
    e.preventDefault();

    const category = document.getElementById("expense-category-select").value;
    const accName = document.getElementById("expense-account-select").value;
    const amount = parseFloat(document.getElementById("expense-amount-input").value);
    const date = document.getElementById("expense-date-input").value;
    const desc = document.getElementById("expense-desc-input").value;

    const accObj = appState.bankAccounts.find(a => a.name === accName);
    if (accObj.balance < amount) {
      triggerToast("Insufficient funds inside payment ledger", "error");
      return;
    }

    accObj.balance -= amount;
    const expId = `EXP-${Math.floor(Math.random() * 9000) + 1000}`;

    const newExp = { id: expId, date, category, accountName: accName, desc, amount };
    appState.expenses.unshift(newExp);

    // Log ledger transaction
    appState.ledgerTxns.unshift({
      date,
      accountName: accName,
      partyName: category,
      type: "Debit",
      refNo: expId,
      amount,
      balance: accObj.balance
    });

    saveState();
    closeModal("modal-record-expense");
    renderExpensesTable();

    logActivity(`Recorded expense: ${expId} (${category})`);
    triggerToast("Expense voucher recorded", "success");
  }

  function deleteExpense(index) {
    if (confirm("Remove this logged expense voucher?")) {
      const exp = appState.expenses[index];

      // Credit back bank Account
      const accObj = appState.bankAccounts.find(a => a.name === exp.accountName);
      if (accObj) {
        accObj.balance += exp.amount;
      }

      logActivity(`Deleted expense: ${exp.id}`, "Warning");
      appState.expenses.splice(index, 1);
      saveState();
      renderExpensesTable();
      triggerToast("Expense record cleared", "warning");
    }
  }

  // ==========================================
  // REPORTS RUNNER
  // ==========================================

  function runReport(type, btn) {
    const container = document.getElementById("report-output-container");
    if (!container) return;

    // Update button active states
    btn.closest(".action-bar").querySelectorAll(".table-btn").forEach(b => {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

    if (type === "sales") {
      // Generate sales aggregates per Customer
      const salesMap = {};
      appState.invoices.forEach(inv => {
        if (!salesMap[inv.customerName]) salesMap[inv.customerName] = 0;
        salesMap[inv.customerName] += inv.grandTotal;
      });

      let rowsHtml = "";
      Object.keys(salesMap).forEach(cust => {
        rowsHtml += `
        <tr>
          <td style="font-weight:600;">${cust}</td>
          <td>Customer</td>
          <td style="font-weight:700; text-align:right;">${curSymbol}${salesMap[cust].toFixed(2)}</td>
        </tr>
      `;
      });

      if (rowsHtml === "") rowsHtml = `<tr><td colspan="3" style="text-align:center; padding:16px; color:var(--text-tertiary);">No sales transactions logged.</td></tr>`;

      container.innerHTML = `
      <table class="data-grid-table">
        <thead>
          <tr>
            <th>Customer Entity Name</th>
            <th>Type</th>
            <th style="text-align:right;">Accumulated Sales Value</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
    } else if (type === "stock") {
      // Inventory Valuation
      let totalVal = 0;
      let rowsHtml = "";

      appState.items.forEach(item => {
        const itemVal = item.stock * item.purchasePrice;
        totalVal += itemVal;

        rowsHtml += `
        <tr>
          <td style="font-weight:600;">${item.name}</td>
          <td><span class="tag-pill" style="font-family:monospace;">${item.sku}</span></td>
          <td>${item.stock} units</td>
          <td>${curSymbol}${item.purchasePrice.toFixed(2)}</td>
          <td style="font-weight:700; text-align:right;">${curSymbol}${itemVal.toFixed(2)}</td>
        </tr>
      `;
      });

      container.innerHTML = `
      <div style="background:var(--bg-input); padding:12px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <span style="font-weight:600;">Cumulative Asset Value:</span>
        <span style="font-size:16px; font-weight:800; color:var(--success-text);">${curSymbol}${totalVal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
      </div>
      <table class="data-grid-table">
        <thead>
          <tr>
            <th>Product Description</th>
            <th>SKU</th>
            <th>Stock Count</th>
            <th>Purchase Price</th>
            <th style="text-align:right;">Assets Worth</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
    } else if (type === "pl") {
      // Calculate simple P&L
      let salesRev = 0;
      let costOfGoods = 0;

      appState.invoices.forEach(inv => {
        salesRev += inv.subTotal;
        // Deduce COGS based on invoice items purchase cost
        inv.items.forEach(i => {
          const itemObj = appState.items.find(item => item.name === i.itemName);
          if (itemObj) {
            costOfGoods += itemObj.purchasePrice * i.qty;
          }
        });
      });

      let operatingExp = 0;
      appState.expenses.forEach(exp => {
        operatingExp += exp.amount;
      });

      const grossProfit = salesRev - costOfGoods;
      const netProfit = grossProfit - operatingExp;

      container.innerHTML = `
      <div style="background:var(--bg-input); border:1px solid var(--border-light); border-radius:10px; padding:20px; max-width:450px; margin: 0 auto;">
        <h3 style="text-align:center; margin-bottom:20px; font-weight:700; border-bottom:1.5px solid var(--border-light); padding-bottom:8px;">P&L Statement</h3>
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <span>Gross Sales Revenue:</span>
          <span style="font-weight:600;">+ ${curSymbol}${salesRev.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; color:var(--danger-text);">
          <span>Cost of Goods Sold (COGS):</span>
          <span>- ${curSymbol}${costOfGoods.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-weight:700; border-top:1px dashed var(--border-light); padding-top:8px;">
          <span>Gross Margin:</span>
          <span>${curSymbol}${grossProfit.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:16px; color:var(--danger-text);">
          <span>Operating Expenses:</span>
          <span>- ${curSymbol}${operatingExp.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:800; font-size:16px; border-top:1.5px solid var(--text-primary); padding-top:10px; color:${netProfit >= 0 ? 'var(--success-text)' : 'var(--danger-text)'}">
          <span>Net Profit / Loss:</span>
          <span>${curSymbol}${netProfit.toFixed(2)}</span>
        </div>
      </div>
    `;
    }
  }

  // ==========================================
  // SYSTEM ALERTS & NOTIFICATIONS
  // ==========================================

  function renderNotificationsView() {
    const container = document.getElementById("notifications-list-container");
    if (!container) return;

    container.innerHTML = "";

    if (appState.notifications.length === 0) {
      container.innerHTML = `
      <div style="text-align:center; padding:40px 16px; color:var(--text-tertiary);">
        <i data-lucide="bell-off" style="width:32px; height:32px; stroke:var(--text-tertiary); margin-bottom:8px;"></i>
        <div>No unread system alerts in queue.</div>
      </div>
    `;
      return;
    }

    appState.notifications.forEach(al => {
      const div = document.createElement("div");
      div.style.cssText = `
      padding: 12px 16px;
      border: 1px solid var(--border-light);
      border-radius: 8px;
      background: var(--bg-card);
      position: relative;
    `;
      div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
        <h4 style="font-size:13px; font-weight:700;">${al.title}</h4>
        <span style="font-size:10px; color:var(--text-tertiary);">${al.time}</span>
      </div>
      <p style="font-size:11px; color:var(--text-secondary); max-width:650px;">${al.desc}</p>
    `;
      container.appendChild(div);
    });
  }

  function clearWorkspaceNotifications() {
    appState.notifications = [];
    saveState();

    const badge = document.getElementById("notifications-badge");
    if (badge) badge.style.display = "none";

    renderNotificationsView();
    triggerToast("Unread alerts cleared", "info");
  }

  // ==========================================
  // SUPPORT SYSTEM
  // ==========================================

  function submitSupportTicket(e) {
    e.preventDefault();
    e.target.reset();
    triggerToast("Support ticket registered successfully", "success");
  }

  // ==========================================
  // ACTIVITY LOG SYSTEM
  // ==========================================

  function renderActivityLogsTable() {
    const tbody = document.getElementById("activity-logs-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (appState.activityLogs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:16px; color:var(--text-tertiary);">No audits logged.</td></tr>`;
      return;
    }

    appState.activityLogs.forEach(log => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td style="font-family:monospace;">${log.timestamp}</td>
      <td style="font-weight:600;">${log.user}</td>
      <td>${log.action}</td>
      <td><span class="status-pill done" style="background:#f3f4f6; color:#111; border-color:#e5e7eb;">${log.outcome}</span></td>
    `;
      tbody.appendChild(tr);
    });
  }

  function clearActivityLogs() {
    appState.activityLogs = [];
    saveState();
    renderActivityLogsTable();
    triggerToast("Audit event logs purged", "warning");
  }

  // ==========================================
  // PRINT LAYOUT & PREVIEW SELECTOR
  // ==========================================

  function viewDocDetails(type, index) {
    const list = getDocList(type);
    const doc = list[index];
    const company = appState.companies[appState.activeCompanyIndex];

    const partyType = type.includes("Purchase") ? "Supplier" : "Customer";
    const partyObj = appState.parties.find(p => p.name === doc.partyName) || {
      name: doc.partyName, email: "billing@client.com", phone: "N/A", taxId: "N/A", address: "N/A"
    };

    const curSymbol = company.currency === "INR" ? "₹" : "$";
    const printArea = document.getElementById("print-area");

    let lineRowsHtml = "";
    doc.items.forEach((item, idx) => {
      lineRowsHtml += `
      <tr>
        <td>${idx + 1}</td>
        <td style="font-weight:600;">${item.itemName}</td>
        <td>${item.qty}</td>
        <td>${curSymbol}${item.price.toFixed(2)}</td>
        <td>${item.taxRate}%</td>
        <td style="text-align:right; font-weight:600;">${curSymbol}${item.total.toFixed(2)}</td>
      </tr>
    `;
    });

    printArea.innerHTML = `
    <div class="invoice-print-header">
      <div>
        <h1 style="font-size: 26px; font-weight: 800; letter-spacing: -1px; margin-bottom: 4px;">${company.name}</h1>
        <p style="color:#555;">${company.industry}</p>
        <p style="font-size:12px; margin-top:8px; max-width:280px; color:#666;">${company.address}</p>
        <p style="font-size:12px; font-weight:600; margin-top:4px;">GSTIN/Tax ID: ${company.taxId}</p>
      </div>
      <div class="invoice-print-metadata">
        <h2 style="font-size: 24px; font-weight: 800; color:var(--info-text); margin-bottom:12px; text-transform:uppercase;">${type}</h2>
        <p><strong>Document ID:</strong> ${doc.id}</p>
        <p><strong>Created Date:</strong> ${doc.date}</p>
        <p><strong>Status:</strong> <span style="font-weight:700; color:#047857;">${(doc.status || 'Active').toUpperCase()}</span></p>
      </div>
    </div>

    <div class="invoice-print-parties">
      <div>
        <h4 style="text-transform:uppercase; color:#777; font-size:11px; margin-bottom:8px; font-weight:700;">${partyType}</h4>
        <h3 style="font-size:15px; font-weight:700; margin-bottom:4px;">${partyObj.name}</h3>
        <p style="color:#666;">${partyObj.address}</p>
        <p style="margin-top:6px;">Email: ${partyObj.email} | Phone: ${partyObj.phone}</p>
        <p style="font-weight:600; margin-top:2px;">GSTIN/Tax ID: ${partyObj.taxId}</p>
      </div>
    </div>

    <table class="invoice-print-table">
      <thead>
        <tr>
          <th style="width: 50px;">#</th>
          <th>Description</th>
          <th style="width: 80px;">Qty</th>
          <th style="width: 120px;">Rate</th>
          <th style="width: 80px;">Tax</th>
          <th style="width: 120px; text-align:right;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${lineRowsHtml}
      </tbody>
    </table>

    <div class="invoice-print-summary">
      <div class="invoice-print-summary-box">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:13px;">
          <span>Sub Total:</span>
          <span>${curSymbol}${doc.subTotal.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:13px;">
          <span>Tax Total:</span>
          <span>${curSymbol}${doc.taxTotal.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:800; border-top:1.5px solid #333; padding-top:8px; font-size:15px; margin-top:8px;">
          <span>Grand Total:</span>
          <span>${curSymbol}${doc.grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `;

    openModal("modal-view-invoice");
  }

  function printInvoice() {
    const content = document.getElementById("print-area").innerHTML;
    const printWindow = window.open('', '_blank', 'width=800,height=600');

    printWindow.document.write(`
    <html>
      <head>
        <title>Print Document</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding:40px; }
          .invoice-print-header { display: flex; justify-content: space-between; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 20px; }
          .invoice-print-metadata { text-align: right; }
          .invoice-print-parties { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px; }
          .invoice-print-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          .invoice-print-table th { background: #f3f4f6; border: 1px solid #d1d5db; padding: 10px; text-align: left; }
          .invoice-print-table td { border: 1px solid #d1d5db; padding: 10px; }
          .invoice-print-summary { display: flex; justify-content: flex-end; }
          .invoice-print-summary-box { width: 250px; }
        </style>
      </head>
      <body>
        ${content}
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 500);
          };
        </script>
      </body>
    </html>
  `);
    printWindow.document.close();
  }

  // ==========================================
  // WORKSPACE SWITCHER CONTROLLERS
  // ==========================================

  function openWorkspaceSwitcherModal() {
    const container = document.getElementById("workspace-companies-list");
    if (!container) return;
    container.innerHTML = "";

    appState.companies.forEach((comp, idx) => {
      const isCurrent = idx === appState.activeCompanyIndex;
      const div = document.createElement("div");
      div.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border: 1px solid ${isCurrent ? 'var(--border-focus)' : 'var(--border-light)'};
      border-radius: 8px;
      background: ${isCurrent ? 'var(--bg-input)' : 'var(--bg-card)'};
      cursor: pointer;
    `;
      div.onclick = () => selectWorkspace(idx);
      div.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px;">
        <div class="company-logo-badge" style="width:28px; height:28px; font-size:12px;">${comp.name[0].toUpperCase()}</div>
        <div>
          <div style="font-size:13px; font-weight:600; color:var(--text-primary);">${comp.name}</div>
          <div style="font-size:10px; color:var(--text-tertiary);">${comp.industry}</div>
        </div>
      </div>
      ${isCurrent ? '<i data-lucide="check" style="width:16px; height:16px; stroke:var(--success-text);"></i>' : ''}
    `;
      container.appendChild(div);
    });

    openModal("modal-workspace-switcher");
    lucide.createIcons();
  }

  function selectWorkspace(idx) {
    appState.activeCompanyIndex = idx;
    saveState();
    closeModal("modal-workspace-switcher");

    logActivity("Switched workspace context to index " + idx);
    triggerToast(`Switched workspace context`, "success");
    bootMainApp();
  }

  function switchOnboardingView() {
    document.getElementById("view-app").classList.remove("active");
    document.getElementById("view-onboarding").classList.add("active");
    document.getElementById("form-onboarding").reset();
    goToOnboardingStep(1);
  }

  // ==========================================
  // SYSTEM SETTINGS PANE MANAGER
  // ==========================================

  function switchSettingsTab(paneId, tabLink) {
    const panes = document.querySelectorAll(".settings-pane");
    panes.forEach(pane => pane.classList.remove("active"));

    const links = document.querySelectorAll(".settings-tab-link");
    links.forEach(l => l.classList.remove("active"));

    const targetPane = document.getElementById(paneId);
    if (targetPane) {
      targetPane.classList.add("active");
      tabLink.classList.add("active");
    }
  }

  function loadSettingsView() {
    const company = appState.companies[appState.activeCompanyIndex];

    document.getElementById("set-business-name").value = company.name;
    document.getElementById("set-business-address").value = company.address;
    document.getElementById("set-tax-id").value = company.taxId;

    document.getElementById("set-invoice-prefix").value = appState.invoicePrefix;
    document.getElementById("set-invoice-counter").value = appState.invoiceCounter;
  }

  function saveBusinessSettings(e) {
    e.preventDefault();

    const company = appState.companies[appState.activeCompanyIndex];
    company.name = document.getElementById("set-business-name").value;
    company.address = document.getElementById("set-business-address").value;

    saveState();
    bootMainApp();
    logActivity("Updated business settings configuration");
    triggerToast("Business profiles configured", "success");
  }

  function saveTaxSettings(e) {
    e.preventDefault();

    const company = appState.companies[appState.activeCompanyIndex];
    company.taxId = document.getElementById("set-tax-id").value;

    saveState();
    logActivity("Updated default Tax ID configuration");
    triggerToast("Tax ID configuration saved", "success");
  }

  function saveInvoicePrefixes(e) {
    e.preventDefault();

    appState.invoicePrefix = document.getElementById("set-invoice-prefix").value;
    appState.invoiceCounter = parseInt(document.getElementById("set-invoice-counter").value);

    saveState();
    logActivity("Updated invoice prefixes format structure");
    triggerToast("Invoice prefix schema configured", "success");
  }

  function saveUserProfile(e) {
    e.preventDefault();

    const name = document.getElementById("profile-name").value;
    const email = document.getElementById("profile-email").value;

    appState.currentUser.name = name;
    appState.currentUser.email = email;
    appState.currentUser.avatar = name.split(" ").map(w => w[0]).join("").toUpperCase();

    saveState();
    bootMainApp();
    logActivity("Updated current user credentials");
    triggerToast("User account settings updated", "success");
  }

  function openQuickCreateModal() {
    openModal("modal-quick-create");
  }

  function toggleMobileSidebar() {
    if (window.innerWidth <= 768) {
      const sidebar = document.querySelector(".app-sidebar");
      if (sidebar) sidebar.classList.toggle("open");
    } else {
      document.body.classList.toggle("sidebar-collapsed");
      appState.sidebarCollapsed = document.body.classList.contains("sidebar-collapsed");
      saveState();
    }
  }

  // Click outside mobile sidebar to dismiss it
  document.addEventListener("click", (e) => {
    const sidebar = document.querySelector(".app-sidebar");
    const menuBtn = document.querySelector(".mobile-menu-btn");
    if (sidebar && sidebar.classList.contains("open")) {
      if (!sidebar.contains(e.target) && (!menuBtn || !menuBtn.contains(e.target))) {
        sidebar.classList.remove("open");
      }
    }
  });

  // ==========================================
  // DEDICATED CREATE QUOTATION PAGE CONTROLLERS
  // ==========================================

  function initCreateQuotationPage() {
    const select = document.getElementById("create-quote-customer-select");
    if (!select) return;
    select.innerHTML = "";

    const customers = appState.parties.filter(p => p.type === "Customer");
    if (customers.length === 0) {
      triggerToast("Create a Customer profile first before generating quotations", "warning");
      setTimeout(() => {
        window.location.href = "customers.html";
      }, 1500);
      return;
    }

    customers.forEach(cust => {
      const opt = document.createElement("option");
      opt.value = cust.name;
      opt.textContent = cust.name;
      select.appendChild(opt);
    });

    document.getElementById("create-quote-date-input").value = new Date().toISOString().split('T')[0];
    document.getElementById("create-quote-items-rows").innerHTML = "";
    addCreateQuoteLineRow();
    calculateCreateQuoteTotals();
  }

  function addCreateQuoteLineRow() {
    const tbody = document.getElementById("create-quote-items-rows");
    if (!tbody) return;
    const tr = document.createElement("tr");

    let options = `<option value="" disabled selected>Choose Item</option>`;
    appState.items.forEach(item => {
      options += `<option value="${item.name}">${item.name}</option>`;
    });

    tr.innerHTML = `
    <td>
      <select class="form-control form-select create-quote-item-select" onchange="handleCreateQuoteLineItemSelect(this)" required>
        ${options}
      </select>
    </td>
    <td>
      <input type="number" step="0.01" class="form-control create-quote-price-control" value="0.00" oninput="calculateCreateQuoteTotals()" required>
    </td>
    <td>
      <input type="number" class="form-control create-quote-qty-control" value="1" min="1" oninput="calculateCreateQuoteTotals()" required>
    </td>
    <td>
      <select class="form-control form-select create-quote-tax-control" onchange="calculateCreateQuoteTotals()">
        <option value="18">18% GST</option>
        <option value="12">12% GST</option>
        <option value="5">5% GST</option>
        <option value="0">0% Exempt</option>
      </select>
    </td>
    <td style="font-weight:600; text-align:right;" class="create-quote-row-total-cell">$0.00</td>
    <td>
      <button type="button" class="action-menu-btn" onclick="this.closest('tr').remove(); calculateCreateQuoteTotals();">
        <i data-lucide="minus-circle" style="width:14px; height:14px; stroke:var(--danger-text);"></i>
      </button>
    </td>
  `;

    tbody.appendChild(tr);
    lucide.createIcons();
  }

  function handleCreateQuoteLineItemSelect(selectEl) {
    const itemName = selectEl.value;
    const itemObj = appState.items.find(i => i.name === itemName);
    if (!itemObj) return;

    const row = selectEl.closest("tr");
    row.querySelector(".create-quote-price-control").value = itemObj.salesPrice.toFixed(2);
    calculateCreateQuoteTotals();
  }

  function calculateCreateQuoteTotals() {
    const rows = document.querySelectorAll("#create-quote-items-rows tr");
    let subTotal = 0;
    let taxTotal = 0;

    const activeCompany = appState.companies[appState.activeCompanyIndex];
    const curSymbol = activeCompany.currency === "INR" ? "₹" : "$";

    rows.forEach(row => {
      const price = parseFloat(row.querySelector(".create-quote-price-control").value) || 0;
      const qty = parseInt(row.querySelector(".create-quote-qty-control").value) || 0;
      const taxRate = parseFloat(row.querySelector(".create-quote-tax-control").value) || 0;

      const rowSub = price * qty;
      const rowTax = rowSub * (taxRate / 100);
      const rowTotal = rowSub + rowTax;

      row.querySelector(".create-quote-row-total-cell").textContent = `${curSymbol}${rowTotal.toFixed(2)}`;
      subTotal += rowSub;
      taxTotal += rowTax;
    });

    const grandTotal = subTotal + taxTotal;
    document.getElementById("create-quote-sub-total").textContent = `${curSymbol}${subTotal.toFixed(2)}`;
    document.getElementById("create-quote-tax-total").textContent = `${curSymbol}${taxTotal.toFixed(2)}`;
    document.getElementById("create-quote-grand-total").textContent = `${curSymbol}${grandTotal.toFixed(2)}`;

    return { subTotal, taxTotal, grandTotal };
  }

  function handleCreateQuoteSubmit(e) {
    e.preventDefault();

    const customerName = document.getElementById("create-quote-customer-select").value;
    const date = document.getElementById("create-quote-date-input").value;

    const rows = document.querySelectorAll("#create-quote-items-rows tr");
    if (rows.length === 0) {
      triggerToast("Quotation requires at least one item row", "error");
      return;
    }

    const { subTotal, taxTotal, grandTotal } = calculateCreateQuoteTotals();
    const lineItems = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const itemName = row.querySelector(".create-quote-item-select").value;
      const price = parseFloat(row.querySelector(".create-quote-price-control").value) || 0;
      const qty = parseInt(row.querySelector(".create-quote-qty-control").value) || 0;
      const taxRate = parseFloat(row.querySelector(".create-quote-tax-control").value) || 0;

      if (!itemName) {
        triggerToast("Complete item selections before saving", "error");
        return;
      }

      lineItems.push({ itemName, price, qty, taxRate, total: (price * qty * (1 + taxRate / 100)) });
    }

    const quoteId = `QTN-${appState.docCounter}`;
    appState.docCounter++;

    const newQuote = {
      id: quoteId,
      partyName: customerName,
      date,
      subTotal,
      taxTotal,
      grandTotal,
      status: "Pending",
      items: lineItems
    };

    if (!appState.quotations) appState.quotations = [];
    appState.quotations.unshift(newQuote);
    saveState();

    logActivity(`Generated Quotation: ${quoteId}`);
    triggerToast(`Quotation ${quoteId} saved successfully`, "success");

    setTimeout(() => {
      window.location.href = "quotations.html";
    }, 1000);
  }

  // ==========================================
  // DEDICATED STOCK ADJUSTMENT PAGE CONTROLLERS
  // ==========================================

  function initAdjustStockPage() {
    const select = document.getElementById("adjust-stock-item-select");
    if (!select) return;
    select.innerHTML = "";

    if (appState.items.length === 0) {
      triggerToast("Configure product items inside Catalog before making adjustments", "warning");
      setTimeout(() => {
        window.location.href = "items.html";
      }, 1500);
      return;
    }

    appState.items.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.name;
      opt.textContent = `${item.name} (SKU: ${item.sku}) [In Stock: ${item.stock}]`;
      select.appendChild(opt);
    });

    document.getElementById("adjust-stock-qty-input").value = 1;
    document.getElementById("adjust-stock-remarks-input").value = "";
  }

  function handleAdjustStockSubmit(e) {
    e.preventDefault();

    const itemName = document.getElementById("adjust-stock-item-select").value;
    const type = document.getElementById("adjust-stock-type-select").value;
    const qty = parseInt(document.getElementById("adjust-stock-qty-input").value) || 0;
    const remarks = document.getElementById("adjust-stock-remarks-input").value;

    const itemObj = appState.items.find(i => i.name === itemName);
    if (!itemObj) {
      triggerToast("Item details not found in database catalog", "error");
      return;
    }

    // Calculate new stock level
    let updatedStock = itemObj.stock;
    if (type === "Add") {
      updatedStock += qty;
    } else {
      if (itemObj.stock < qty) {
        triggerToast(`Insufficient catalog stock levels! Current level: ${itemObj.stock}`, "error");
        return;
      }
      updatedStock = Math.max(0, itemObj.stock - qty);
    }

    itemObj.stock = updatedStock;

    // Log adjustment transaction
    const adjustment = {
      date: new Date().toISOString().split('T')[0],
      itemName: itemName,
      sku: itemObj.sku,
      type: type,
      qty: qty,
      remarks: remarks,
      updatedStock: updatedStock
    };

    appState.stockAdjustments.unshift(adjustment);

    // Low stock alarm trigger
    if (updatedStock <= 2) {
      appState.notifications.unshift({
        title: "Low Stock Alert",
        desc: `Item '${itemName}' stock count has dropped to ${updatedStock} units.`,
        time: "Just Now"
      });
      triggerToast(`Low stock notification triggered!`, "warning");
    }

    saveState();

    logActivity(`Adjusted stock for ${itemName} [Type: ${type}, Qty: ${qty}]`);
    triggerToast("Stock transaction adjustment saved", "success");

    setTimeout(() => {
      window.location.href = "inventory.html";
    }, 1000);
  }

  // ==========================================
  // DEDICATED BANK ACCOUNTS PAGES CONTROLLERS
  // ==========================================

  function initAddAccountPage() {
    document.getElementById("form-add-account-page").reset();
  }

  function handleAddAccountPageSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("page-account-name-input").value;
    const type = document.getElementById("page-account-type-select").value;
    const details = document.getElementById("page-account-number-input").value;
    const balance = parseFloat(document.getElementById("page-account-balance-input").value) || 0;

    const accId = `ACC-${Math.floor(Math.random() * 90) + 10}`;

    const newAcc = { id: accId, name, type, details, balance };
    appState.bankAccounts.push(newAcc);

    // Opening Balance transaction log
    if (balance > 0) {
      appState.ledgerTxns.unshift({
        date: new Date().toISOString().split('T')[0],
        accountName: name,
        partyName: "Opening Balance",
        type: "Credit",
        refNo: "INIT-" + accId,
        amount: balance,
        balance
      });
    }

    saveState();
    logActivity("Created bank account: " + name);
    triggerToast("New ledger account setup complete", "success");

    setTimeout(() => {
      window.location.href = "accounts.html";
    }, 1000);
  }

  function initTransferFundsPage() {
    const fromSelect = document.getElementById("page-transfer-from-select");
    const toSelect = document.getElementById("page-transfer-to-select");
    if (!fromSelect || !toSelect) return;

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    if (appState.bankAccounts.length < 2) {
      triggerToast("Create at least 2 bank/cash accounts before doing transfers", "warning");
      setTimeout(() => {
        window.location.href = "add-account.html";
      }, 1500);
      return;
    }

    appState.bankAccounts.forEach(acc => {
      const opt1 = document.createElement("option");
      opt1.value = acc.name;
      opt1.textContent = `${acc.name} (${acc.type}) [Balance: ${acc.balance.toFixed(2)}]`;
      fromSelect.appendChild(opt1);

      const opt2 = document.createElement("option");
      opt2.value = acc.name;
      opt2.textContent = `${acc.name} (${acc.type}) [Balance: ${acc.balance.toFixed(2)}]`;
      toSelect.appendChild(opt2);
    });

    document.getElementById("form-transfer-funds-page").reset();
    document.getElementById("page-transfer-date-input").value = new Date().toISOString().split('T')[0];
  }

  function handleTransferFundsPageSubmit(e) {
    e.preventDefault();

    const fromName = document.getElementById("page-transfer-from-select").value;
    const toName = document.getElementById("page-transfer-to-select").value;
    const amount = parseFloat(document.getElementById("page-transfer-amount-input").value) || 0;
    const date = document.getElementById("page-transfer-date-input").value;
    const remarks = document.getElementById("page-transfer-remarks-input").value;

    if (fromName === toName) {
      triggerToast("Source and destination accounts must be different", "error");
      return;
    }

    const fromAcc = appState.bankAccounts.find(a => a.name === fromName);
    const toAcc = appState.bankAccounts.find(a => a.name === toName);

    if (!fromAcc || !toAcc) {
      triggerToast("Target accounts not found in database", "error");
      return;
    }

    if (fromAcc.balance < amount) {
      triggerToast(`Insufficient balance in ${fromAcc.name}! Available: ${fromAcc.balance.toFixed(2)}`, "error");
      return;
    }

    // Deduct & Credit balances
    fromAcc.balance -= amount;
    toAcc.balance += amount;

    const refNo = `TXF-${Math.floor(Math.random() * 900) + 100}`;

    // Debit log entry
    appState.ledgerTxns.unshift({
      date,
      accountName: fromAcc.name,
      partyName: `To Account: ${toAcc.name}`,
      type: "Debit",
      refNo,
      amount,
      balance: fromAcc.balance,
      remarks
    });

    // Credit log entry
    appState.ledgerTxns.unshift({
      date,
      accountName: toAcc.name,
      partyName: `From Account: ${fromAcc.name}`,
      type: "Credit",
      refNo,
      amount,
      balance: toAcc.balance,
      remarks
    });

    saveState();
    logActivity(`Transferred funds: ${amount} from ${fromAcc.name} to ${toAcc.name}`);
    triggerToast("Funds transfer completed successfully", "success");

    setTimeout(() => {
      window.location.href = "accounts.html";
    }, 1000);
  }

function highlightActiveSidebarLink() {
  // Dynamically shorten long sidebar text labels to prevent text wrapping
  const sidebarSpans = document.querySelectorAll(".app-sidebar span");
  sidebarSpans.forEach(span => {
    const text = span.textContent.trim();
    if (text === "Item Management") {
      span.textContent = "Items";
    } else if (text === "Customer Management") {
      span.textContent = "Customers";
    } else if (text === "Supplier Management") {
      span.textContent = "Suppliers";
    } else if (text === "Inventory Management") {
      span.textContent = "Inventory";
    } else if (text === "Other Transactions") {
      span.textContent = "Other Txns";
    }
  });

  let currentPath = window.location.pathname.split('/').pop() || "index.html";

  const parentMap = {
    "add-account.html": "accounts.html",
    "transfer-funds.html": "accounts.html"
  };

  if (parentMap[currentPath]) {
    currentPath = parentMap[currentPath];
  }

  // Sidebar links (standard or submenus)
  const sidebarLinks = document.querySelectorAll(".app-sidebar .nav-link, .app-sidebar .submenu-link");
  sidebarLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href) {
      const linkPath = href.split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add("active");
        
        // Auto-expand parent submenus
        if (link.classList.contains("submenu-link")) {
          const parentSubmenu = link.closest(".nav-submenu");
          if (parentSubmenu) {
            parentSubmenu.classList.add("open");
            const toggle = parentSubmenu.previousElementSibling;
            if (toggle && toggle.classList.contains("submenu-toggle")) {
              toggle.classList.add("expanded");
            }
          }
        }
      } else {
        link.classList.remove("active");
      }
    }
  });

  // Mobile Bottom Navigation tabs
  const mobileLinks = document.querySelectorAll(".mobile-bottom-nav .mobile-bottom-nav-item");
  mobileLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href) {
      const linkPath = href.split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

  // Initial Launch checks
  window.addEventListener("DOMContentLoaded", () => {
    initDatabase();

    if (appState.sidebarCollapsed) {
      document.body.classList.add("sidebar-collapsed");
    }

    const path = window.location.pathname.split('/').pop() || "index.html";

    // Guard Clauses for MPA routing redirects
    if (!appState.currentUser) {
      if (path !== "login.html") {
        window.location.href = "login.html";
        return;
      }
    } else {
      if (path === "login.html") {
        window.location.href = "index.html";
        return;
      }
      if (appState.companies.length === 0) {
        if (path !== "onboarding.html") {
          window.location.href = "onboarding.html";
          return;
        }
      } else {
        if (path === "onboarding.html") {
          window.location.href = "index.html";
          return;
        }
      }
    }

    // Initialize current view
    if (path === "login.html") {
      switchAuthView("auth-login");
    } else if (path === "onboarding.html") {
      goToOnboardingStep(1);
    } else {
      bootMainApp();
      highlightActiveSidebarLink();
    }

    lucide.createIcons();
  })
