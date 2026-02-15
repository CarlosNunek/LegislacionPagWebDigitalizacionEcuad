// Timeline data organized by year
const timelineData = {
    "2002": [
        {
            date: "18 de junio",
            title: "La Primera Transacción Digital",
            description: "Se registra la primera transacción electrónica oficial en la historia del Ecuador por un monto de USD 50. Este evento marcó el inicio técnico de la era digital bancaria.",
            category: "tech"
        },
        {
            date: "Abril",
            title: "Ley de Comercio Electrónico",
            description: "Se aprueba la Ley de Comercio Electrónico, estableciendo el marco jurídico con el principio de 'equivalencia funcional', otorgando a la firma electrónica el mismo valor legal que la firma manuscrita.",
            category: "legal"
        }
    ],
    "2008-2009": [
        {
            date: "2008-2009",
            title: "Operatividad de la Firma Electrónica",
            description: "El Banco Central del Ecuador se acredita como la primera entidad de certificación oficial, permitiendo que la Ley de 2002 cobrara vida real.",
            details: [
                "Agosto 2009: Creación del MINTEL",
                "Mayo 2009: El SRI inicia la emisión de comprobantes electrónicos"
            ],
            category: "legal"
        }
    ],
    "2014": [
        {
            date: "2014",
            title: "Nace Payphone",
            description: "Una de las primeras fintechs ecuatorianas en operar, pionera en pagos digitales antes del boom de las apps bancarias.",
            category: "fintech"
        }
    ],
    "2016": [
        {
            date: "2016",
            title: "Código Ingenios",
            description: "Se expide el Código Orgánico de la Economía Social de los Conocimientos. Priorizó el uso de tecnologías libres (Open Source) en el Estado y declaró el acceso a internet como un servicio básico.",
            category: "legal"
        }
    ],
    "2017": [
        {
            date: "2017",
            title: "Fundación de Kushki",
            description: "Nace la empresa que se convertiría en la infraestructura de pagos más importante de la región.",
            category: "fintech"
        }
    ],
    "2019": [
        {
            date: "2019",
            title: "Desarrollo de App Nativa - Banco Pichincha",
            description: "El banco inicia el desarrollo de su aplicativo móvil propio. En ese momento, contaban con aproximadamente 700,000 clientes digitales.",
            category: "tech"
        }
    ],
    "2020": [
        {
            date: "2 de marzo",
            title: "Lanzamiento Banca Móvil Pichincha",
            description: "Apenas dos semanas antes del confinamiento, Banco Pichincha lanza su nueva aplicación móvil. El lanzamiento fue estratégico y oportuno.",
            category: "tech"
        },
        {
            date: "16 de marzo",
            title: "El 'Big Bang' Digital - Pandemia",
            description: "Con el cierre de agencias y corresponsales, la pandemia actuó como un acelerador forzoso. Entre mayo y septiembre, las transferencias electrónicas crecieron un 35%.",
            category: "tech"
        },
        {
            date: "2020",
            title: "Lanzamiento de 'DeUna'",
            description: "Banco Pichincha lanza la billetera digital 'DeUna' para facilitar pagos sin contacto y sin comisiones. En su primer año, alcanzó 100,000 descargas.",
            category: "fintech"
        },
        {
            date: "2020",
            title: "Expansión Banco del Pacífico",
            description: "El banco potenció 'Onboard BdP', permitiendo la apertura de cuentas 100% en línea. Se abrieron 181,000 cuentas de ahorro, logrando un crecimiento del 103% en transacciones.",
            category: "tech"
        }
    ],
    "2021": [
        {
            date: "Mayo",
            title: "Ley de Protección de Datos Personales",
            description: "Tras filtraciones masivas de datos (caso Novaestrat), se aprueba esta ley que introduce derechos como el 'derecho al olvido' y la 'portabilidad de datos'.",
            category: "legal"
        },
        {
            date: "Julio",
            title: "Hito Histórico: Digital supera a Físico",
            description: "Por primera vez, las transferencias digitales (285 millones) superaron a las transacciones físicas en ventanilla (258 millones). El monto transaccionado alcanzó USD 135,849 millones, superando en 1.2 veces el PIB del Ecuador.",
            category: "tech"
        },
        {
            date: "2021",
            title: "Consolidación de 'DeUna'",
            description: "La aplicación creció exponencialmente, alcanzando 680,000 descargas y afiliando a 56,000 negocios a nivel nacional. Se transaccionaron USD 35 millones.",
            category: "fintech"
        },
        {
            date: "2021",
            title: "Microcrédito Digital",
            description: "Banco Pichincha implementó el primer microcrédito 100% digital del Ecuador, colocando USD 2.1 millones en su primer año.",
            category: "fintech"
        }
    ],
    "2022": [
        {
            date: "Febrero",
            title: "Ley de Defensa al Cliente Financiero",
            description: "Se aprueba la ley que obliga a las entidades financieras a disponer de canales electrónicos y físicos eficientes para reclamos.",
            category: "legal"
        },
        {
            date: "Junio",
            title: "Primer Unicornio Ecuatoriano",
            description: "Kushki alcanza una valoración de USD 1,500 millones, marcando un hito en la historia financiera del país.",
            category: "fintech"
        },
        {
            date: "Junio",
            title: "Relaunch 'be Produbanco'",
            description: "Produbanco relanza su app enfocada en experiencias digitales.",
            category: "tech"
        },
        {
            date: "Noviembre",
            title: "Facturación Electrónica Obligatoria",
            description: "La obligatoriedad impuesta por el SRI impulsó la emisión masiva de firmas electrónicas, que pasaron de 1.4 millones a más de 2 millones al cierre de 2024.",
            category: "legal"
        },
        {
            date: "Diciembre",
            title: "Ley Fintech",
            description: "Se publica la Ley para el Desarrollo y Control de los Servicios Financieros Tecnológicos, regulando por primera vez a las empresas tecnológicas financieras.",
            category: "legal"
        },
        {
            date: "2022",
            title: "DeUna supera el millón de descargas",
            description: "La aplicación supera el 1 millón de descargas y logra incluir en el sistema financiero digital a 180,000 microempresarios.",
            category: "fintech"
        },
        {
            date: "2022",
            title: "Integración en Banco del Pacífico",
            description: "El banco migra las funcionalidades de 'Onboard BdP' hacia su Banca Móvil principal para unificar la experiencia del usuario, cerrando el año con 172 millones de transacciones móviles.",
            category: "tech"
        }
    ],
    "2023": [
        {
            date: "Febrero",
            title: "Ley de Transformación Digital y Audiovisual",
            description: "Normativa que ofrece incentivos tributarios (exoneración de Impuesto a la Renta) para inversiones en el sector audiovisual y tecnológico. Facilita la constitución de empresas 100% digitales.",
            category: "legal"
        },
        {
            date: "2023",
            title: "PeiGo - Tarjeta Visa Virtual",
            description: "Banco Guayaquil lanza su tarjeta Visa Virtual, atacando el mercado de no bancarizados.",
            category: "fintech"
        },
        {
            date: "2023",
            title: "DeUna: Líder en Micro-pagos",
            description: "DeUna supera el millón de usuarios activos y se consolida como líder en micro-pagos.",
            category: "fintech"
        }
    ],
    "2024": [
        {
            date: "Septiembre",
            title: "Norma de Medios y Sistemas de Pago",
            description: "Se emite la Norma que Regula los Medios y Sistemas de Pago (Junta Política y Regulación Monetaria), aterrizando la Ley Fintech.",
            category: "legal"
        }
    ],
    "2025": [
        {
            date: "Enero",
            title: "Alianza CNT y Google Cloud",
            description: "CNT y Google Cloud establecieron una alianza para impulsar la transformación digital en el Ecuador.",
            category: "tech"
        },
        {
            date: "8 de abril",
            title: "Agenda de Transformación Digital 2025-2030",
            description: "El MINTEL publica la Agenda orientada a reducir la brecha digital, fortalecer el sector público y promover una cultura digital.",
            category: "legal"
        }
    ],
    "2026": [
        {
            date: "2026",
            title: "Integración de IA y Ciberseguridad",
            description: "Se proyecta la integración total de ecosistemas de Inteligencia Artificial en la banca y ciberseguridad nacional. El 100% de los contribuyentes activos poseen firma electrónica.",
            category: "tech"
        }
    ]
};

// Ordered array of years to control display order
const orderedYears = [
    "2002",
    "2008-2009",
    "2014",
    "2016",
    "2017",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026"
];

// Generate timeline points
function generateTimeline() {
    const timelinePoints = document.getElementById('timelinePoints');

    orderedYears.forEach((year, index) => {
        const events = timelineData[year];
        if (!events) return; // Skip if no events for this year

        const point = document.createElement('div');
        point.className = 'timeline-point';
        point.style.animationDelay = `${index * 0.1}s`;

        const eventCount = events.length;
        const dotClass = eventCount > 1 ? 'has-multiple' : '';
        const dataCount = eventCount > 1 ? `data-count="${eventCount}"` : '';

        point.innerHTML = `
            <div class="point-dot ${dotClass}" ${dataCount}></div>
            <div class="point-label">${year}</div>
        `;

        point.addEventListener('click', () => openModal(year, events));
        timelinePoints.appendChild(point);
    });
}

// Open modal with event details
function openModal(year, events) {
    const modal = document.getElementById('eventModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = year;
    modalDate.textContent = `${events.length} evento${events.length > 1 ? 's' : ''} registrado${events.length > 1 ? 's' : ''}`;

    // Generate event items
    let eventsHTML = '';
    events.forEach(event => {
        const detailsHTML = event.details
            ? `<ul>${event.details.map(detail => `<li>${detail}</li>`).join('')}</ul>`
            : '';

        eventsHTML += `
            <div class="event-item">
                <h3>${event.title}</h3>
                <span class="event-date">${event.date}</span>
                <p>${event.description}</p>
                ${detailsHTML}
                <span class="category-tag ${event.category}">${getCategoryName(event.category)}</span>
            </div>
        `;
    });

    modalBody.innerHTML = eventsHTML;
    modal.classList.add('active');

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function getCategoryName(category) {
    const names = {
        'legal': 'Legal',
        'tech': 'Tecnología',
        'fintech': 'Fintech'
    };
    return names[category] || category;
}

// Setup modal close handlers
function setupModalHandlers() {
    const modal = document.getElementById('eventModal');
    const modalClose = document.getElementById('modalClose');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    modalClose.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Tab switching functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Initialize Digital Growth Chart
function initializeChart() {
    const ctx = document.getElementById('digitalGrowthChart');
    if (!ctx) return;

    // Data based on the timeline events
    const chartData = {
        labels: ['2002', '2008', '2014', '2016', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [
            {
                label: 'Transacciones Digitales (Millones)',
                data: [0.05, 2, 15, 35, 120, 210, 285, 380, 450, 520, 600, 680],
                borderColor: 'rgba(168, 85, 247, 1)',
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: 'rgba(168, 85, 247, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
            },
            {
                label: 'Transacciones Físicas (Millones)',
                data: [500, 480, 450, 420, 380, 320, 258, 200, 150, 100, 60, 30],
                borderColor: 'rgba(6, 182, 212, 1)',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: 'rgba(6, 182, 212, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
            }
        ]
    };

    const config = {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 14,
                            weight: '600',
                            family: 'Inter'
                        },
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y + 'M';
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        callback: function (value) {
                            return value + 'M';
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize Digitalization Gauge
function initializeDigitalizationGauge() {
    const ctx = document.getElementById('digitalizationGauge');
    if (!ctx) return;

    const digitalizationLevel = 70; // 70% según datos.json

    const data = {
        labels: ['Digitalizado', 'Por Digitalizar'],
        datasets: [{
            data: [digitalizationLevel, 100 - digitalizationLevel],
            backgroundColor: [
                'rgba(168, 85, 247, 0.8)',
                'rgba(51, 65, 85, 0.3)'
            ],
            borderColor: [
                'rgba(168, 85, 247, 1)',
                'rgba(51, 65, 85, 0.5)'
            ],
            borderWidth: 2
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        },
        plugins: [{
            id: 'centerText',
            beforeDraw: function (chart) {
                const width = chart.width;
                const height = chart.height;
                const ctx = chart.ctx;
                ctx.restore();

                const fontSize = (height / 114).toFixed(2);
                ctx.font = `bold ${fontSize}em Inter`;
                ctx.textBaseline = 'middle';

                const text = digitalizationLevel + '%';
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;

                // Gradient for text
                const gradient = ctx.createLinearGradient(0, 0, width, 0);
                gradient.addColorStop(0, 'rgba(168, 85, 247, 1)');
                gradient.addColorStop(1, 'rgba(6, 182, 212, 1)');
                ctx.fillStyle = gradient;
                ctx.fillText(text, textX, textY);

                // Subtitle
                ctx.font = `${fontSize * 0.3}em Inter`;
                ctx.fillStyle = '#cbd5e1';
                const subtitle = 'Nivel de Digitalización';
                const subtitleX = Math.round((width - ctx.measureText(subtitle).width) / 2);
                ctx.fillText(subtitle, subtitleX, textY + 30);

                ctx.save();
            }
        }]
    };

    new Chart(ctx, config);
}

// Initialize Benchmark Chart
function initializeBenchmarkChart() {
    const ctx = document.getElementById('benchmarkChart');
    if (!ctx) return;

    const data = {
        labels: ['China', 'Chile', 'Ecuador'],
        datasets: [{
            label: 'Nivel de Digitalización (%)',
            data: [95, 80, 70],
            backgroundColor: [
                'rgba(239, 68, 68, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(168, 85, 247, 0.8)'
            ],
            borderColor: [
                'rgba(239, 68, 68, 1)',
                'rgba(59, 130, 246, 1)',
                'rgba(168, 85, 247, 1)'
            ],
            borderWidth: 2
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function (context) {
                            return 'Digitalización: ' + context.parsed.x + '%';
                        },
                        afterLabel: function (context) {
                            const descriptions = {
                                'China': 'Estado desarrollista digital',
                                'Chile': 'Estándar OCDE',
                                'Ecuador': 'Modelo híbrido'
                            };
                            return descriptions[context.label];
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 14,
                            weight: '600',
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize E-commerce Evolution Chart
function initializeEcommerceEvolutionChart() {
    const ctx = document.getElementById('ecommerceEvolutionChart');
    if (!ctx) return;

    const data = {
        labels: ['2024', '2025 (Proyección)'],
        datasets: [
            {
                label: 'Ventas Nacionales',
                data: [2857, 3300],
                backgroundColor: 'rgba(168, 85, 247, 0.8)',
                borderColor: 'rgba(168, 85, 247, 1)',
                borderWidth: 2
            },
            {
                label: 'Ventas Internacionales',
                data: [1761, 2100],
                backgroundColor: 'rgba(6, 182, 212, 0.8)',
                borderColor: 'rgba(6, 182, 212, 1)',
                borderWidth: 2
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 14,
                            weight: '600',
                            family: 'Inter'
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': $' + context.parsed.y + 'M USD';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        callback: function (value) {
                            return '$' + value + 'M';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 14,
                            weight: '600',
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize Demographics Chart
function initializeDemographicsChart() {
    const ctx = document.getElementById('demographicsChart');
    if (!ctx) return;

    const data = {
        labels: ['0-4 años', '5-12 años', '13-17 años', '18-24 (Gen Z)', '25-34 (Millennials)', '35-44 años', '45-54 años', '55-64 años', '65+ años'],
        datasets: [{
            label: 'Porcentaje de Población',
            data: [8.1, 13.5, 8.7, 12.0, 16.7, 14.1, 10.8, 7.9, 8.2],
            backgroundColor: [
                'rgba(168, 85, 247, 0.6)',
                'rgba(168, 85, 247, 0.65)',
                'rgba(168, 85, 247, 0.7)',
                'rgba(168, 85, 247, 0.85)',  // Gen Z - destacado
                'rgba(6, 182, 212, 0.85)',    // Millennials - destacado
                'rgba(168, 85, 247, 0.7)',
                'rgba(168, 85, 247, 0.65)',
                'rgba(168, 85, 247, 0.6)',
                'rgba(168, 85, 247, 0.55)'
            ],
            borderColor: [
                'rgba(168, 85, 247, 1)',
                'rgba(168, 85, 247, 1)',
                'rgba(168, 85, 247, 1)',
                'rgba(168, 85, 247, 1)',
                'rgba(6, 182, 212, 1)',
                'rgba(168, 85, 247, 1)',
                'rgba(168, 85, 247, 1)',
                'rgba(168, 85, 247, 1)',
                'rgba(168, 85, 247, 1)'
            ],
            borderWidth: 2
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function (context) {
                            return context.parsed.x + '% de la población';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 20,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize Payment Methods Chart
function initializePaymentMethodsChart() {
    const ctx = document.getElementById('paymentMethodsChart');
    if (!ctx) return;

    const data = {
        labels: ['Tarjeta de Crédito', 'Tarjeta de Débito', 'Billeteras Digitales', 'Transferencia Bancaria', 'Efectivo'],
        datasets: [{
            data: [74, 16, 6, 3, 1],
            backgroundColor: [
                'rgba(168, 85, 247, 0.8)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(251, 191, 36, 0.8)'
            ],
            borderColor: [
                'rgba(168, 85, 247, 1)',
                'rgba(6, 182, 212, 1)',
                'rgba(59, 130, 246, 1)',
                'rgba(34, 197, 94, 1)',
                'rgba(251, 191, 36, 1)'
            ],
            borderWidth: 2
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize Consumption Categories Chart
function initializeConsumptionCategoriesChart() {
    const ctx = document.getElementById('consumptionCategoriesChart');
    if (!ctx) return;

    const data = {
        labels: ['Servicios Digitales', 'Bienes Personales', 'Alimentos y Bebidas', 'Entretenimiento', 'Tecnología'],
        datasets: [{
            label: 'Porcentaje de Usuarios',
            data: [87, 78, 73, 59, 56],
            backgroundColor: [
                'rgba(168, 85, 247, 0.8)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(251, 191, 36, 0.8)'
            ],
            borderColor: [
                'rgba(168, 85, 247, 1)',
                'rgba(6, 182, 212, 1)',
                'rgba(59, 130, 246, 1)',
                'rgba(34, 197, 94, 1)',
                'rgba(251, 191, 36, 1)'
            ],
            borderWidth: 2
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function (context) {
                            return context.parsed.x + '% de usuarios compran';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 13,
                            weight: '500',
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize Country Comparison Chart
function initializeCountryComparisonChart() {
    const ctx = document.getElementById('countryComparisonChart');
    if (!ctx) return;

    const data = {
        labels: ['China', 'Chile', 'Ecuador'],
        datasets: [{
            label: 'Nivel de Digitalización (%)',
            data: [95, 80, 70],
            backgroundColor: [
                'rgba(220, 38, 38, 0.8)',   // Red for China
                'rgba(37, 99, 235, 0.8)',   // Blue for Chile
                'rgba(234, 179, 8, 0.8)'    // Yellow for Ecuador
            ],
            borderColor: [
                'rgba(220, 38, 38, 1)',
                'rgba(37, 99, 235, 1)',
                'rgba(234, 179, 8, 1)'
            ],
            borderWidth: 2,
            borderRadius: 8
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function (context) {
                            return 'Digitalización: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 14,
                            weight: '600',
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize Digitalization Radar Chart
function initializeDigitalizationRadarChart() {
    const ctx = document.getElementById('digitalizationRadarChart');
    if (!ctx) return;

    const data = {
        labels: [
            'Usuarios Internet',
            'Cobertura 4G',
            'Facturación E.',
            'Firmas E.',
            'E-commerce'
        ],
        datasets: [{
            label: 'Ecuador',
            data: [78, 80.6, 99, 85, 75],
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            borderColor: 'rgba(168, 85, 247, 1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(168, 85, 247, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(168, 85, 247, 1)',
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 14,
                            weight: '600',
                            family: 'Inter'
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function (context) {
                            return context.parsed.r.toFixed(1) + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        color: '#94a3b8',
                        backdropColor: 'transparent',
                        font: {
                            size: 11,
                            family: 'Inter'
                        },
                        callback: function (value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)'
                    },
                    angleLines: {
                        color: 'rgba(51, 65, 85, 0.5)'
                    },
                    pointLabels: {
                        color: '#cbd5e1',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateTimeline();
    setupModalHandlers();
    setupTabs();

    // Initialize all charts
    initializeChart();
    initializeDigitalizationGauge();
    initializeBenchmarkChart();
    initializeEcommerceEvolutionChart();
    initializeDemographicsChart();
    initializePaymentMethodsChart();
    initializeConsumptionCategoriesChart();
    initializeCountryComparisonChart();
    initializeDigitalizationRadarChart();

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});
