var modalImgDictionary = {
    "EquipmentSupplies": "postavki_stankov.jpg",
    "Modernization": "modernizachia_stankov.jpg",
    "Repair": "remont_stankov.jpg",
    "Recovery": "vosstanoviti_stanok.jpg",
    "Calibration": "nastroika_stankov.jpg",
    "SparePartsSupplies": "postavki_zapchastei.jpg",
    "Service": "obslugivanie_stankov.jpg",
    "ComplexWorks": "komplexnie_raboti_po_stankam.jpg",
    "Сonsultation": "konsultatii_po_stankam.jpg"
};

var modalAltDictionary = {
    "EquipmentSupplies": "Поставки станков",
    "Modernization": "Модернизация станков",
    "Repair": "Ремонт станков",
    "Recovery": "Восстановить станок",
    "Calibration": "Настроить станок",
    "SparePartsSupplies": "Поставки деталей и запчастей",
    "Service": "Обслуживание станков",
    "ComplexWorks": "Комплексные работы по станкам",
    "Сonsultation": "Консультации по станкам"
};

var modalLabelDictionary = {
    "EquipmentSupplies": "Поставки оборудования",
    "Modernization": "Модернизация",
    "Repair": "Ремонт",
    "Recovery": "Восстановление",
    "Calibration": "Калибровка",
    "SparePartsSupplies": "Поставки запчастей",
    "Service": "Обслуживание",
    "ComplexWorks": "Комплексные работы",
    "Сonsultation": "Техническая консультация"
};

var modalTextDictionary = {
    "EquipmentSupplies": "Мы предоставляем услуги по поставке современного промышленного станочного оборудования. Команда наших экспертов гарантирует отбор только высококачественных образцов, которые будут соответствовать вашим уникальным производственным потребностям.<br><br><strong>Включает:</strong><br>- Персональная консультация по выбору оборудования.<br>- Гарантированный сервис и техническая поддержка.<br>- Эффективная доставка, а так же профессиональный монтаж и пусконаладочные работы.<br><br><strong>По итогу:</strong><br>- Повышение эффективности производства.<br>- Снижение затрат на обслуживание и ремонт.<br>- Гарантированное качество и надежность оборудования.",
    "Modernization": "Привнесите новый взгляд в ваше производство с нашими услугами по модернизации станочного оборудования. Мы предлагаем инновационные решения для улучшения производительности и эффективности ваших станков. <br><br><strong>Включает: </strong><br>- Тщательный анализ текущего оборудования.<br>- Персонализированный план модернизации.<br>- Интеграция новых технологий и систем.<br><br><strong>По итогу: </strong><br>- Оптимизация работы существующего оборудования.<br>- Сокращение времени простоя и увеличение производительности.<br>- Современные технические и технологические возможности: установка новейших систем ЧПУ, модернизация электроавтоматики с установкой PLC, интеграция УЦИ и другие решения.",
    "Repair": "Наша команда специалистов готова обеспечить быстрый и качественный ремонт вашего станочного оборудования. Независимо от марки и модели, мы предоставляем профессиональные услуги по восстановлению и настройке станочных систем, а именно:<br>- Узловой ремонт.<br>- Капитальный ремонт.<br>- Аварийный ремонт и др.<br><br><strong>Включает:</strong><br>- Диагностика и выявление неисправностей.<br>- Замена деталей и компонентов.<br>- Тестирование и настройка оборудования.<br><br><strong>По итогу:</strong><br>- Сокращение времени простоя производства.<br>- Экономия на замене оборудования.<br>- Гарантия качественного и долгосрочного результата.",
    "Recovery": "Наши услуги по восстановлению станочного оборудования позволяют вам продлить срок службы ваших станков, восстанавливая изношенные детали, обеспечивая оптимальную работу и эффективность производства.<br><br><strong>Включает: </strong><br>- Полный анализ состояния оборудования.<br>- Замена изношенных деталей и компонентов.<br>- Доведение характеристик станка до паспортных показателей.<br>- Тщательная проверка и калибровка.<br><br><strong>По итогу: </strong><br>- Экономия средств по сравнению с покупкой нового оборудования.<br>- Увеличение срока службы станков.<br>- Восстановление оптимальной производительности.",
    "Calibration": "Наши услуги по калибровке оборудования гарантируют точность и стабильность ваших станков. Мы проводим глубокую настройку, что обеспечивает высокую производительность и высокое качество изготовленных образцов.<br><br><strong>Включает:</strong><br>- Точная калибровка всех регулируемых параметров.<br>- Проверка и коррекция измерительных приборов.<br>- Гарантированное соблюдение стандартов качества.<br><br><strong>По итогу:</strong><br>- Высокая точность обработки деталей.<br>- Снижение отклонений и брака.<br>- Стабильная и надежная работа станков.",
    "SparePartsSupplies": "Мы предоставляем услуги по поставкам высококачественных и надежных запчастей для вашего станочного оборудования. Наша команда гарантирует подбор идеально совместимых компонентов, высокоустойчивых к механическому износу.<br><br><strong>Включает:</strong><br>- Подбор и поставка оригинальных запасных частей. <br>- Советы по замене и обслуживанию. <br>- Гарантированная совместимость с вашим оборудованием.<br><br><strong>По итогу:</strong><br>- Быстрая замена и восстановление оборудования.<br>- Повышение надежности и долговечности станков.<br>- Экономия времени и средств на ремонте.",
    "Service": "Наши услуги по обслуживанию станочного оборудования включают в себя технические проверки, профилактическое обслуживание и оперативные ремонтные работы и иные действия, которые призваны обеспечить бесперебойную работу вашего оборудования.<br><br><strong>Включает:</strong><br>- Заключение соглашений на гарантийное и постгарантийное обслуживание.<br>- Технические осмотры и проверки.<br>- Планово-профилактические работы и замена изношенных деталей.<br>- Оперативное реагирование на аварии и сбои.<br>- Диагностика неисправностей и аварийный ремонт.<br><br><strong>По итогу:</strong><br>- Предотвращение простоев и снижение риска поломок.<br>- Увеличение срока службы оборудования.<br>- Экономия на дорогостоящих ремонтных работах.",
    "ComplexWorks": "Мы предлагаем комплексные работы по ремонту, восстановлению, обслуживанию и модернизации станочного оборудования, обеспечивая полный цикл необходимых технических работ на вашем производстве. <br><br><strong>Включает:</strong><br>- Индивидуальный подход к каждому клиенту.<br>- Комплексные решения для повышения эффективности.<br>- Полный спектр услуг от поставки до технической поддержки.<br><br><strong>По итогу:</strong><br>- Оптимизация работы производственного процесса.<br>- Экономия времени и ресурсов.<br>- Гарантированная надежность и производительность.",
    "Сonsultation": "Наши технические консультанты готовы предоставить вам профессиональные советы по выбору оборудования, его использованию, а также по внедрению новых технологий в вашем производстве.<br><br><strong>Включает:</strong><br>- Индивидуальные консультации по техническим вопросам.<br>- Подбор оптимального оборудования под ваши задачи.<br>- Обучение и поддержка внедрения новых технологий.<br><br><strong>По итогу:</strong><br>- Профессиональные советы и рекомендации экспертов.<br>- Эффективное использование оборудования.<br>- Повышение квалификации вашего персонала."
};

// Open modal win
document.addEventListener("DOMContentLoaded", function() {
    var modalWinElements = document.querySelectorAll('.card_modalwin');

    if(modalWinElements.length > 0) {
        modalWinElements.forEach(function(element) {
            element.addEventListener('click', function() {
                var serviceName = element.getAttribute('serviceName');
                fillModalContent(serviceName);
                document.getElementById("my-modalwin").classList.add("open");
            });
        });
    
        function fillModalContent(serviceCode) {
            var imageContainer = document.getElementById("Modal_ServicesImg");
            var modalLabel = document.getElementById("modal_label");
            var modalText = document.getElementById("modal_text");
    
            imageContainer.src = "";
            var imgload = document.querySelector(".loading-overlay");
            imgload.style.visibility = 'visible';

            var tempImage = new Image();
            tempImage.src = "img/services_img/"+modalImgDictionary[serviceCode];
            tempImage.onload = function() { imgload.style.visibility = 'hidden'; };

            imageContainer.src = "img/services_img/" + modalImgDictionary[serviceCode];
            imageContainer.alt = modalAltDictionary[serviceCode];
            modalLabel.innerHTML = modalLabelDictionary[serviceCode];
            modalText.innerHTML = modalTextDictionary[serviceCode];
        }
    }
    else {
        document.getElementById("contact-button").addEventListener('click', function() {
            document.getElementById("my-modalwin").classList.add("open");
        });
    }
    
});

// Close modal win
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modalwin").classList.remove("open")
})

// Close modal win for tab Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modalwin").classList.remove("open")
    }
});

// Close modal win when clicking outside of it
document.querySelector("#my-modalwin .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modalwin").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("contact-img");
    if(img != null) {
        function updateImage() {
            if (window.innerWidth <= 400) {
                img.src = "img/basic_img/remzavod_logo_min.jpg";
            } else {
                img.src = "img/basic_img/remzavod_logo.jpg";
            }
        }
        updateImage();
        window.addEventListener("resize", updateImage);
    }
    else {
        function updateAccordion() {
            if (window.innerWidth <= 520) {
                document.getElementById("buttonAccTwo").innerHTML = "Как вы подходите к модернизации<br>станочного оборудования?";
                document.getElementById("buttonAccThree").innerHTML = "Каковы ваши действия в случае<br>необходимости аварийного ремонта?";
            } else {
                document.getElementById("buttonAccTwo").innerHTML = "Как вы подходите к модернизации<br>станочного оборудования?";
                document.getElementById("buttonAccThree").innerHTML = "Каковы ваши действия в случае<br>необходимости аварийного ремонта?";
            }
        }
        updateAccordion();
        window.addEventListener("resize", updateAccordion);
    }
});