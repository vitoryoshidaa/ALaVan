const products = [
    // Vestidos
    {
        id: 1,
        name: "Vestido Midi Linho Orgânico",
        description: "Vestido elegante feito com linho 100% orgânico, tingido com corantes naturais. Perfeito para ocasiões especiais.",
        price: "R$ 189,90",
        category: "vestidos",
        image: "dress"
    },
    {
        id: 2,
        name: "Vestido Longo Algodão Sustentável",
        description: "Vestido longo em algodão orgânico certificado, com estampa artesanal e corte fluído.",
        price: "R$ 249,90",
        category: "vestidos",
        image: "dress"
    },
    {
        id: 3,
        name: "Vestido Curto Cânhamo",
        description: "Vestido casual em fibra de cânhamo, resistente e confortável para o dia a dia.",
        price: "R$ 159,90",
        category: "vestidos",
        image: "dress"
    },
    
    // Blusas
    {
        id: 4,
        name: "Blusa Básica Algodão Orgânico",
        description: "Blusa básica em algodão orgânico certificado, corte clássico e cores neutras.",
        price: "R$ 79,90",
        category: "blusas",
        image: "shirt"
    },
    {
        id: 5,
        name: "Blusa Estampada Bambu",
        description: "Blusa com estampa exclusiva em fibra de bambu, macia e antibacteriana.",
        price: "R$ 99,90",
        category: "blusas",
        image: "shirt"
    },
    {
        id: 6,
        name: "Blusa Decote V Linho",
        description: "Blusa feminina em linho natural com decote V, ideal para looks elegantes.",
        price: "R$ 119,90",
        category: "blusas",
        image: "shirt"
    },
    
    // Calças
    {
        id: 7,
        name: "Calça Wide Leg Algodão",
        description: "Calça wide leg em algodão orgânico, modelagem confortável e atemporal.",
        price: "R$ 179,90",
        category: "calcas",
        image: "pants"
    },
    {
        id: 8,
        name: "Calça Skinny Jeans Reciclado",
        description: "Calça jeans skinny feita com algodão reciclado e processo de tingimento eco-friendly.",
        price: "R$ 199,90",
        category: "calcas",
        image: "pants"
    },
    {
        id: 9,
        name: "Calça Palazzo Linho",
        description: "Calça palazzo em linho natural, fresca e elegante para todas as ocasiões.",
        price: "R$ 169,90",
        category: "calcas",
        image: "pants"
    },
    
    // Acessórios
    {
        id: 10,
        name: "Bolsa Tote Cork",
        description: "Bolsa tote em cortiça sustentável, impermeável e durável.",
        price: "R$ 89,90",
        category: "acessorios",
        image: "bag"
    },
    {
        id: 11,
        name: "Cinto Couro Vegano",
        description: "Cinto em couro vegano de alta qualidade, livre de crueldade animal.",
        price: "R$ 59,90",
        category: "acessorios",
        image: "accessory"
    },
    {
        id: 12,
        name: "Chapéu Palha Certificada",
        description: "Chapéu em palha certificada, proteção UV e estilo sustentável.",
        price: "R$ 79,90",
        category: "acessorios",
        image: "hat"
    },
    {
        id: 13,
        name: "Óculos Madeira Reciclada",
        description: "Óculos de sol com armação em madeira reciclada e lentes UV400.",
        price: "R$ 139,90",
        category: "acessorios",
        image: "glasses"
    },
    {
        id: 14,
        name: "Lenço Seda Orgânica",
        description: "Lenço em seda orgânica com estampa exclusiva, versátil e elegante.",
        price: "R$ 69,90",
        category: "acessorios",
        image: "scarf"
    },
    {
        id: 15,
        name: "Brincos Sementes Naturais",
        description: "Brincos artesanais feitos com sementes naturais e fio dourado sustentável.",
        price: "R$ 39,90",
        category: "acessorios",
        image: "earrings"
    }
];

// Icon mapping for different product types
const iconMap = {
    dress: 'fas fa-tshirt',
    shirt: 'fas fa-tshirt', 
    pants: 'fas fa-user-tie',
    bag: 'fas fa-shopping-bag',
    accessory: 'fas fa-gem',
    hat: 'fas fa-hat-cowboy',
    glasses: 'fas fa-glasses',
    scarf: 'fas fa-tshirt',
    earrings: 'fas fa-gem'
};

let currentProducts = [...products];
let currentPage = 0;
const productsPerPage = 1;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    setupCategoryFilter();
});

// Initialize product carousel
function initializeCarousel() {
    updateCarousel();
}

// Setup category filter
function setupCategoryFilter() {
    const categorySelect = document.getElementById('categorySelect');
    
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        filterProducts(selectedCategory);
    });
}

// Filter products by category
function filterProducts(category) {
    if (category === 'todos') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    currentPage = 0;
    updateProductCount();
    updateCarousel();
}

// Update product count display
function updateProductCount() {
    const productCount = document.getElementById('productCount');
    productCount.textContent = currentProducts.length;
}

// Update carousel with current products
function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';
    
    if (currentProducts.length === 0) {
        carouselInner.innerHTML = `
            <div class="carousel-item active">
                <div class="product-slide">
                    <div class="product-card">
                        <div class="col-12 text-center">
                            <h3>Nenhum produto encontrado</h3>
                            <p class="text-muted">Tente selecionar uma categoria diferente.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }
    
    currentProducts.forEach((product, index) => {
        const isActive = index === 0 ? 'active' : '';
        const icon = iconMap[product.image] || 'fas fa-tshirt';
        
        const indicators = Array.from({length: 7}, (_, i) => 
            `<div class="indicator ${i === 0 ? 'active' : ''}"></div>`
        ).join('');
        
        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <div class="product-slide">
                    <div class="product-card">
                        <div class="col-md-6">
                            <div class="product-image">
                                <i class="${icon}"></i>
                                <div class="product-indicators">
                                    ${indicators}
                                </div>
                                <div class="product-counter">
                                    ${index + 1} / ${currentProducts.length}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="product-info">
                                <h3>${product.name}</h3>
                                <p class="text-muted mb-4">${product.description}</p>
                                <div class="product-price">${product.price}</div>
                                <button class="btn btn-success btn-lg">
                                    Ver Mais <i class="fas fa-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        carouselInner.innerHTML += carouselItem;
    });
    
    // Reinitialize Bootstrap carousel
    const carousel = new bootstrap.Carousel(document.getElementById('productCarousel'), {
        interval: false,
        wrap: true
    });
}

// Add loading animation
function addLoadingAnimation() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.opacity = '0';
    setTimeout(() => {
        carouselInner.style.opacity = '1';
        carouselInner.style.transition = 'opacity 0.3s ease';
    }, 100);
}

// Category change with animation
const originalFilterProducts = filterProducts;
filterProducts = function(category) {
    addLoadingAnimation();
    setTimeout(() => {
        originalFilterProducts(category);
    }, 150);
};

console.log('EcoFashion produtos carregados com sucesso!');
console.log(`Total de produtos: ${products.length}`);
console.log('Categorias disponíveis: vestidos, blusas, calcas, acessorios');
