var LS = LS || {};

LS.store = {
    id: 6539953,
    url: "nmmultimarcas2.lojavirtualnuvem.com.br",
    custom_url: "nmmultimarcasoficial.com.br",
    gads_measurement_id: "",
    name: "NM\u0020MULTIMARCAS",
};
LS.cart = {
    id: null,
    subtotal: 0,
    has_non_shippable_products: false,
    has_shippable_products: false,
    items: [
    ]
};
LS.abStorefrontCartExperiments = null;
LS.lang = "pt_BR";
LS.langCode = "pt";
LS.currency = {
    code: "BRL",
    display_short: "R\u0024",
    display_long: "R\u0024",
    cents_separator: ",",
    thousands_separator: "."
};
LS.country = "BR";
LS.customer = null;
LS.template = "home";
LS.theme = {
    code: "toluca",
    name: "Toluca",
    custom: false,
};
LS.metricsWorkerScriptUrl = "https://acdn-us.mitiendanube.com/assets/stores/js/metrics-worker-c984926f96a2e4787f155a9755d6944a30.js?v=28875860"

LS.socialScripts = [];
LS.DOMReady = function (fn) {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'interactive')
                fn();
        });
    }
};

// Making it a thenable so it can be made into a full fledged Promise later
LS._readyCallbacks = [];
LS.ready = {
    then: function (callback) {
        LS._readyCallbacks.push(callback);
    }
};

window.addEventListener('load', () => {
    if (!window.cartService) {
        return;
    }

    window.cartService.setCurrentLoadTime(1759006686);
});

window.pageData = {
    id: "home",
    name: "In\u00EDcio"
}

window.initialCart = { "id": null, "subtotal": 0, "total": 0, "discounts": 0, "promotions": [], "shipping_zipcode": null };
window.metricServiceDispatchQueue = [];
window.metricService = { dispatch: (event) => window.metricServiceDispatchQueue.push(event) };

window.translations = {
    cart: {
        error_messages: {
            out_of_stock: 'Este produto está fora de estoque.',
            unavailable_product: 'Este produto não está disponível.',
            update_error: 'Ocorreu um erro ao atualizar o carrinho.'
        },
        name: 'Carrinho de compras'
    }
};

window.recaptchaEnabled = true;
window.recaptchaV2 = { siteKey: '6Ldp6lUqAAAAAEmZBhIVl_tzMi70KlSohR77QfLc' };
window.recaptchaV3 = { siteKey: '6LezGnQcAAAAAD5T1ReYv_OMo1EJbDUfPu7srRhU' };

window.enableNativeLibraries = true;
window.hasMetricsTag = false;
window.hasFixFilterPaginationTag = false;


window.skipJQuery = true;

LS.ready.then(() => {
    if (!window.jQueryNuvem) {
        window.jQueryNuvem = $
    }
});

function ga_send_event(category, action, label, value) {
    return;
}

function amplitude_log_event(event, properties) {
    // dummy function
    return true;
}



// _______________________________________________________________


const track = document.getElementById('track');
const btnLeft = document.querySelector('.nav-btn.left');
const btnRight = document.querySelector('.nav-btn.right');

let pos = 0;

function updateCarousel() {
  const cardWidth = document.querySelector('.produto-card').offsetWidth + 20;
  const visibleCards = Math.floor(track.parentElement.offsetWidth / cardWidth);
  const totalCards = track.children.length;

  // Ajusta o deslocamento
  track.style.transform = `translateX(${-pos * cardWidth}px)`;

  // Corrige quando o carrossel passa do fim
  if (pos > totalCards - visibleCards) {
    pos = 0;
    track.style.transform = `translateX(0px)`;
  }

  // Corrige quando vai antes do início
  if (pos < 0) {
    pos = totalCards - visibleCards;
    track.style.transform = `translateX(${-pos * cardWidth}px)`;
  }
}

btnRight.addEventListener('click', () => {
  pos++;
  updateCarousel();
});

btnLeft.addEventListener('click', () => {
  pos--;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();


// ___________________________________________________________________________


  document.addEventListener('click', function (e) {
    const down = e.target.closest('.js-quantity-down');
    const up = e.target.closest('.js-quantity-up');

    if (!down && !up) return;

    const wrap = e.target.closest('.form-quantity');
    const input = wrap.querySelector('.js-quantity-input');
    const min = parseInt(input.getAttribute('min') || '1', 10);
    const step = parseInt(input.getAttribute('step') || '1', 10);
    let val = parseInt(input.value || '1', 10);

    if (down) val = Math.max(min, val - step);
    if (up) val = val + step;

    input.value = val;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });
