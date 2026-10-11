/**
 * CONCEPTIA '26 | ARMS BMSIT Ideathon - Official Problem Statements Reveal
 * Interactive Logic, Cyber Sound Synthesizer, Scramble Decoding & Dossier System
 */

// Problem Statements Official Data
const PROBLEM_STATEMENTS = [
  {
    id: 1,
    code: "PS-01 // WELD-SYS",
    title: "Automotive Welding & Body Assembly",
    track: "Automotive Robotics & Mechatronics",
    category: "automotive",
    clearance: "CLEARANCE LEVEL 4",
    image: "assets/ps1_welding.jpg",
    statement: `Variations in stamped automotive body panels can cause gaps and misalignment during assembly, while robotic welding systems typically follow predefined paths. These variations can lead to inconsistent weld quality, rework, material waste, and production delays. Develop a cost-effective solution that maintains reliable weld quality despite variations in parts and assembly conditions, while identifying cases that require further attention.`,
    tags: ["Adaptive Path Correction", "Seam Tracking", "Laser Profilometry", "Weld Quality Telemetry", "Sheet Metal Assembly"],
    challenges: [
      "Variations in stamped sheet metal geometries resulting in non-uniform weld gap tolerances",
      "Rigid predefined robotic welding trajectories incapable of real-time joint deviation compensation",
      "Spatter, burn-through, and weak joint integrity requiring expensive offline ultrasonic testing",
      "Production delays and cycle-time bottlenecks caused by manual re-teaching and rework"
    ],
    techStack: [
      "ROS 2 (Robot Operating System) / MoveIt 2 for adaptive trajectory adjustment",
      "Laser Triangulation / Optical Seam Tracking Sensors",
      "Computer Vision & Deep Learning (Weld bead geometry inspection)",
      "Digital Twin & Simulation (Gazebo / Webots / CoppeliaSim)",
      "PLC / Industrial Ethernet (Profinet / EtherCAT) for robotic cell sync"
    ],
    deliverables: [
      "System Architecture & Sensory Feedback Integration Blueprint",
      "Adaptive Seam Compensation Algorithm or Simulation Demonstration",
      "Real-time Anomaly Detection & Flagging Pipeline",
      "Cost-Benefit & Production Cycle-Time Impact Analysis"
    ],
    metrics: {
      "Adaptive Accuracy": "95%",
      "Rework Reduction": "40%",
      "Cost Viability": "High",
      "Throughput Impact": "< 2s latency"
    }
  },
  {
    id: 2,
    code: "PS-02 // VISION-SORT",
    title: "Vision-Guided Pick & Place and Sorting",
    track: "Industrial AI & Computer Vision",
    category: "vision",
    clearance: "CLEARANCE LEVEL 4",
    image: "assets/ps2_vision.jpg",
    statement: `Manufacturing lines frequently introduce new products that require rapid setup of robotic sorting and handling processes. Products may arrive in different orientations, overlap with one another, or vary in appearance, making reliable handling difficult. Develop a flexible solution that enables efficient handling of changing products while maintaining high accuracy, throughput, and reliability with minimal changeover effort.`,
    tags: ["6D Pose Estimation", "Instance Segmentation", "Dynamic Gripping", "Few-Shot Learning", "Conveyor Tracking"],
    challenges: [
      "Occlusion, severe overlapping, and variable orientation of semi-specular components",
      "High changeover time whenever manufacturing batches switch to novel SKUs",
      "High line speeds requiring low-latency inference (< 50ms) to prevent conveyor pileup",
      "Varying surface reflectivity and lighting conditions in industrial shop floors"
    ],
    techStack: [
      "YOLOv8 / Mask R-CNN / Segment Anything (SAM) for part segmentation",
      "RGB-D Depth Cameras (Intel RealSense / Zivid / Photoneo)",
      "Point Cloud Processing (Open3D / PCL) for 6DoF grasp pose synthesis",
      "Delta / SCARA / Articulated Robot Kinematics & Motion Planning",
      "Zero-Shot / Few-Shot Synthetic Training Data generation"
    ],
    deliverables: [
      "Vision Pipeline for Overlapping Object Detection & 6D Pose Estimation",
      "Grasp Planning & Collision-Free Trajectory Strategy",
      "Rapid Product Onboarding Workflow (Minimal re-training pipeline)",
      "Interactive or Simulated Demonstration of dynamic sorting"
    ],
    metrics: {
      "Pick Success Rate": "> 98%",
      "Changeover Time": "< 10 Mins",
      "Inference Latency": "< 45ms",
      "Overlap Tolerance": "High"
    }
  },
  {
    id: 3,
    code: "PS-03 // COAT-ROBOT",
    title: "Robotic Painting & Surface Coating",
    track: "Kinematics & Precision Coating",
    category: "robotics",
    clearance: "CLEARANCE LEVEL 5",
    image: "assets/ps3_painting.jpg",
    statement: `Industrial painting processes must provide uniform surface coverage while minimizing paint consumption, overspray, rework, and production time. Curved and complex surfaces make this balance difficult to achieve consistently. Develop a solution for coating a curved component that improves coating quality while reducing material usage and cycle time compared with a conventional process.`,
    tags: ["Curved Surface Modeling", "Spray Cone Atomization", "Trajectory Optimization", "Film Thickness Telemetry", "Paint Waste Minimization"],
    challenges: [
      "Non-uniform film thickness, orange peel defects, and paint sags on complex 3D curvatures",
      "Significant overspray causing airborne volatile organic compound (VOC) waste and high material cost",
      "Complex robotic wrist kinematic singularities along steep concave/convex geometries",
      "Lengthy manual robot path programming and testing in trial booths"
    ],
    techStack: [
      "CAD Surface Mesh Discretization & Normal Vector Computation (Trimesh / OpenCASCADE)",
      "Paint Deposition & Electrostatic Bell/Gun Atomization Simulation Models",
      "Path Planning Optimization (Traveling Salesperson / Coverage Path Planning on Manifolds)",
      "Inverse Kinematics & Velocity Smoothing Algorithms",
      "Thickness Heatmap Visualizer (Color-coded micron gauge simulation)"
    ],
    deliverables: [
      "Mathematical / Algorithmic Model for Conical Spray Deposition",
      "Automated Toolpath Generator for Arbitrary Curved Surfaces",
      "Film Thickness Uniformity Simulation & Overspray Reduction Metric",
      "Comparative Study against conventional raster spraying"
    ],
    metrics: {
      "Thickness Uniformity": "± 5 µm",
      "Material Savings": "25-35%",
      "Cycle Time Cut": "20%",
      "Surface Coverage": "99.8%"
    }
  },
  {
    id: 4,
    code: "PS-04 // CNC-TEND",
    title: "CNC Machine Tending",
    track: "Smart Factory & Cell Orchestration",
    category: "manufacturing",
    clearance: "CLEARANCE LEVEL 4",
    image: "assets/ps4_cnc.svg",
    statement: `A single robot may be responsible for serving multiple CNC machines with different processing times and production requirements. Poor coordination can leave machines idle, reduce production capacity, or result in incorrectly loaded parts and costly failures. Develop a solution that improves the utilization of both the robot and CNC machines while maintaining reliable and safe production.`,
    tags: ["Multi-Machine Dispatching", "Dual-Gripper Handshake", "Spindle Synchronization", "Deadlock Avoidance", "Predictive Scheduling"],
    challenges: [
      "Asynchronous cycle times across multiple milling/lathe stations leading to starvation or bottlenecking",
      "High probability of robotic deadlocks and collisions in shared workspace safety zones",
      "Risk of misclamping, chip entrapment, or incorrect raw billet seating causing tool breakage",
      "Shop floor disruptions (e.g., tool wear, unplanned downtime) requiring dynamic schedule recalculation"
    ],
    techStack: [
      "Discrete Event Simulation (SimPy / AnyLogic / Arena)",
      "Dynamic Dispatching Rules & Genetic / Reinforcement Learning Scheduling",
      "Industrial I/O Handshake (Euromap / OPC UA / MQTT) for door & chuck actuation",
      "Dual-Gripper Swap Mechanics (Simultaneous unload finished / load raw billet)",
      "Cell Safety Laser Scanners & Guard Interlocking Integration"
    ],
    deliverables: [
      "Dynamic Multi-Machine Dispatching & Collision-Free Path Coordination Engine",
      "Billet Verification & Seating Assurance Protocol (Pressure/Laser feedback)",
      "Gantt Chart & Spindle Utilization Simulator showing % improvement",
      "Failure Mitigation & Exception Handling Strategy"
    ],
    metrics: {
      "Spindle Utilization": "> 85%",
      "Robot Idle Time Cut": "30%",
      "Part Misload Rate": "0%",
      "Deadlock Prevention": "100%"
    }
  },
  {
    id: 5,
    code: "PS-05 // PALLET-INSPECT",
    title: "Robotic Palletizing & Self-Inspection",
    track: "Logistics & Autonomous QA",
    category: "manufacturing",
    clearance: "CLEARANCE LEVEL 4",
    image: "assets/ps5_pallet.svg",
    statement: `Automated palletizing can still result in missing, misplaced, damaged, incorrectly oriented, or incorrectly labelled boxes. Detecting these issues before shipment is essential, but manual inspection increases labour requirements and may not scale with production volume. Develop a solution that improves the reliability of pallet quality verification while reducing inspection effort and preventing defective pallets from reaching the next stage.`,
    tags: ["Pallet Geometry Verification", "Multi-Angle Barcode/OCR", "Defect & Crush Detection", "Automated Reject Dispatch", "Warehouse Edge AI"],
    challenges: [
      "Interlocked box patterns with obscured labels or misoriented barcodes on outer faces",
      "Crushed box corners, leaning stacks, and layer overhangs causing transport instability",
      "Manual end-of-line auditing creating massive fulfillment bottlenecks during peak logistics hours",
      "Diverse packaging dimensions, glossy wraps, and reflective stretch film distorting vision sensors"
    ],
    techStack: [
      "Multi-View 3D Camera Rig / LiDAR Scanning for Pallet Enveloping & Overhang Detection",
      "Optical Character Recognition (PaddleOCR / Tesseract) & 1D/2D Barcode Verification",
      "Deep Learning Anomaly Detection (Surface tear, puncture, and deformation check)",
      "Robotic De-palletize / Reject Reroute Automation Logic",
      "WMS (Warehouse Management System) Real-Time API Audit Log Sync"
    ],
    deliverables: [
      "End-to-End Autonomous Pallet Inspection Sensory Architecture",
      "Stack Integrity & Volumetric Bounding Box Verification Algorithm",
      "Label Legibility & Barcode Reconciliation Engine",
      "Automated Defect Flagging & Containment Workflow"
    ],
    metrics: {
      "Inspection Reliability": "99.5%",
      "Inspection Duration": "< 8 seconds",
      "Labor Reduction": "80%",
      "False Positive Rate": "< 0.5%"
    }
  }
];

// -----------------------------------------------------------------------------
// Cyber Audio Synthesizer (Web Audio API - Zero External Dependencies)
// -----------------------------------------------------------------------------
class CyberAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBeep(freq = 880, type = 'sine', duration = 0.08) {
    if (this.muted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playDecrypt() {
    if (this.muted || !this.ctx) return;
    try {
      const freqs = [350, 480, 620, 840, 1100, 1400];
      freqs.forEach((f, idx) => {
        setTimeout(() => {
          this.playBeep(f, 'sawtooth', 0.05);
        }, idx * 40);
      });
    } catch (e) {}
  }

  playSuccessChord() {
    if (this.muted || !this.ctx) return;
    try {
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C Major Chord
      freqs.forEach((f) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.6);
      });
    } catch (e) {}
  }

  playAlarm() {
    if (this.muted || !this.ctx) return;
    try {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          this.playBeep(1200, 'square', 0.12);
        }, i * 150);
      }
    } catch (e) {}
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }
}

const audio = new CyberAudioEngine();

// -----------------------------------------------------------------------------
// Scramble Text Hacker Decoding Effect
// -----------------------------------------------------------------------------
const SCRAMBLE_CHARS = "010101XYZ_#@!$%&/\\<>[]*+~";

function scrambleDecrypt(element, targetText, duration = 1200, onComplete = null) {
  let startTime = null;
  const original = targetText;
  element.classList.add("scrambling");

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    
    // Number of revealed characters
    const revealedLength = Math.floor(progress * original.length);
    let output = original.substring(0, revealedLength);

    for (let i = revealedLength; i < original.length; i++) {
      if (original[i] === " " || original[i] === "\n") {
        output += original[i];
      } else {
        const randChar = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        output += randChar;
      }
    }

    element.textContent = output;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = original;
      element.classList.remove("scrambling");
      if (onComplete) onComplete();
    }
  }

  requestAnimationFrame(step);
}

// -----------------------------------------------------------------------------
// App State
// -----------------------------------------------------------------------------
const state = {
  activeCategory: 'all',
  searchQuery: '',
  decryptedMap: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  },
  bookmarked: {}
};

// -----------------------------------------------------------------------------
// DOM Elements
// -----------------------------------------------------------------------------
const psGridEl = document.getElementById("psGrid");
const toastEl = document.getElementById("toastNotice");

let scrollObserver = null;

// -----------------------------------------------------------------------------
// Render Problem Statement Cards
// -----------------------------------------------------------------------------
function renderCards() {
  if (!psGridEl) return;
  psGridEl.innerHTML = "";

  PROBLEM_STATEMENTS.forEach(item => {
    const isDecrypted = state.decryptedMap[item.id];
    const isBookmarked = state.bookmarked[item.id];

    const card = document.createElement("article");
    card.className = `ps-card ${isDecrypted ? 'in-view decrypted' : 'pending-decrypt'}`;
    card.id = `ps-card-${item.id}`;
    card.setAttribute("data-id", item.id);

    // Tag pills
    const tagsHtml = item.tags.slice(0, 4).map(t => `
      <span class="ps-tag"><span class="ps-tag-dot"></span>${t}</span>
    `).join("");

    card.innerHTML = `
      <div class="ps-card-inner">
        <!-- Visual Column -->
        <div class="ps-card-visual">
          <img src="${item.image}" alt="${item.title}" class="ps-visual-img" loading="lazy" />
          <div class="ps-visual-overlay"></div>
          <div class="ps-visual-hud">
            <span class="ps-code-pill">${item.code}</span>
          </div>
          <div class="ps-visual-footer">
            <span class="ps-domain-tag">${item.track}</span>
          </div>
        </div>

        <!-- Content Column -->
        <div class="ps-card-content">
          <div>
            <div class="ps-meta-row">
              <div class="ps-number">
                <span class="ps-num-badge">OBJECTIVE 0${item.id}</span>
                <span>/ 05</span>
              </div>
            </div>

            <h3 class="ps-title" id="ps-title-${item.id}">${item.title}</h3>
            
            <p class="ps-description" id="ps-desc-${item.id}">
              ${isDecrypted ? item.statement : "01001001 01001110 01000100 01010101 01010011 01010100 01010010 01001001 01000001 01001100 // ENCRYPTED AUTOMATION PROTOCOL // SCROLL TO COMMENCE LIVE DECRYPTION..."}
            </p>

            <div class="ps-tags-grid">
              ${tagsHtml}
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="ps-actions-row">
            <div class="ps-btn-group">
              <button class="specular-btn specular-btn-sm" title="Copy Statement" onclick="copyStatement(${item.id})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Copy Statement
              </button>
              <button class="btn-icon-action ${isBookmarked ? 'text-orange' : ''}" title="Pin Objective" onclick="toggleBookmark(${item.id})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    psGridEl.appendChild(card);
  });

  initScrollDecryption();
}

// -----------------------------------------------------------------------------
// Scroll-Triggered Decryption (IntersectionObserver)
// -----------------------------------------------------------------------------
function initScrollDecryption() {
  if (scrollObserver) scrollObserver.disconnect();

  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        card.classList.add("in-view");
        const id = parseInt(card.getAttribute("data-id"));
        if (id && !state.decryptedMap[id]) {
          triggerDecryption(id, true);
        }
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.18
  });

  document.querySelectorAll(".ps-card").forEach(card => {
    scrollObserver.observe(card);
  });
}

// -----------------------------------------------------------------------------
// Interactive & Scroll Decryption Trigger
// -----------------------------------------------------------------------------
window.triggerDecryption = function(id, isAuto = false) {
  state.decryptedMap[id] = true;

  const item = PROBLEM_STATEMENTS.find(p => p.id === id);
  if (!item) return;

  const card = document.getElementById(`ps-card-${id}`);
  if (card) {
    card.classList.add("in-view", "decrypted");
    card.classList.remove("pending-decrypt");
  }

  audio.init();
  audio.playDecrypt();

  const descEl = document.getElementById(`ps-desc-${id}`);
  const titleEl = document.getElementById(`ps-title-${id}`);

  if (descEl) {
    scrambleDecrypt(descEl, item.statement, 950, () => {
      audio.playSuccessChord();
      if (!isAuto) {
        showToast("DECRYPTION SUCCESSFUL", `${item.code} verified and unlocked.`);
      }
    });
  }

  if (titleEl) {
    scrambleDecrypt(titleEl, item.title, 500);
  }
};

// Decrypt All Sequence
window.decryptAllStatements = function() {
  audio.init();
  audio.playAlarm();

  showToast("SYSTEM CLEARANCE OVERRIDE", "Decrypting all 5 hackathon objectives...");

  PROBLEM_STATEMENTS.forEach((item, idx) => {
    setTimeout(() => {
      triggerDecryption(item.id, false);
    }, idx * 350);
  });
};

// -----------------------------------------------------------------------------
// Copy & Pin Utilities
// -----------------------------------------------------------------------------
window.copyStatement = function(id) {
  const item = PROBLEM_STATEMENTS.find(p => p.id === id);
  if (!item) return;

  const textToCopy = `CONCEPTIA '26 - ARMS BMSIT Ideathon\nProblem Statement ${item.id}: ${item.title}\nTrack: ${item.track}\n\nProblem Statement:\n${item.statement}\n\nOfficial Portal: https://ideathon-26-eight.vercel.app`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    audio.playSuccessChord();
    showToast("STATEMENT COPIED", `${item.title} copied to clipboard.`);
  }).catch(() => {
    showToast("COPY FAILED", "Please copy directly from the dossier.");
  });
};

window.toggleBookmark = function(id) {
  state.bookmarked[id] = !state.bookmarked[id];
  audio.playBeep(650, 'sine', 0.05);
  renderCards();
  showToast(
    state.bookmarked[id] ? "OBJECTIVE PINNED" : "PIN REMOVED",
    `Updated bookmark state for PS-0${id}`
  );
};

// -----------------------------------------------------------------------------
// Toast Notification
// -----------------------------------------------------------------------------
let toastTimer = null;
function showToast(title, desc) {
  if (!toastEl) return;
  const titleEl = document.getElementById("toastTitle");
  const descEl = document.getElementById("toastDesc");

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;

  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 3500);
}

// -----------------------------------------------------------------------------
// Live Countdown to Conceptia Launch (14th October 2026 09:00 AM IST)
// -----------------------------------------------------------------------------
function startCountdown() {
  const dEl = document.getElementById("cdDays");
  const hEl = document.getElementById("cdHours");
  const mEl = document.getElementById("cdMinutes");
  const sEl = document.getElementById("cdSeconds");
  if (!dEl || !hEl || !mEl || !sEl) return;

  const targetDate = new Date("2026-10-14T09:00:00+05:30").getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      dEl.textContent = "00";
      hEl.textContent = "00";
      mEl.textContent = "00";
      sEl.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    dEl.textContent = String(days).padStart(2, "0");
    hEl.textContent = String(hours).padStart(2, "0");
    mEl.textContent = String(minutes).padStart(2, "0");
    sEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// -----------------------------------------------------------------------------
// Audio & Navigation Listeners
// -----------------------------------------------------------------------------

// Header Scroll Effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (header) {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// -----------------------------------------------------------------------------
// Initialization
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  startCountdown();

  // Unlock audio context on first user interaction
  const unlockAudio = () => {
    audio.init();
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
  };
  window.addEventListener('click', unlockAudio);
  window.addEventListener('keydown', unlockAudio);
});
