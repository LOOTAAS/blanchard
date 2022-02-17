document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  const swiper = new Swiper('.slider-container-1', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: false
    },
    allowTouchMove: false,
    // autoHeight: true,
    speed: 10000,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });

  let gallerySlider = new Swiper(".slides-container-2", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".galerey .galerey__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".galerey__next",
      prevEl: ".galerey__prev"
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        grid: {
          rows: 1,
        },
        spaceBetween: 36,
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 1,
        },
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }
  });
  let eventSlider = new Swiper(".event__slider", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    touchRatio: 3,
    pagination: {
      el: '.event__swiper-pagination',
      type: "bullets",
    },

    breakpoints: {
      500: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 35,
      },
      928: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 29,
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 40
      },
    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,
    // slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }
  });

  let aboutSlider = new Swiper(".about__slider", {
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    // spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-about-next",
      prevEl: ".swiper-button-about-prev"
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 35
      },
      664: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }
  });



  const params = {
    btnClassName: "header__nav-item-btn",
    dropClassName: "header__nav-dropdown",
    activeClassName: "nav__is-active",
    disabledClassName: "nav_is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        // debugger
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        const dropList = document.querySelectorAll(".header__nav-dropdown")
        dropList.forEach((el) => {
          console.log(el.dataset)
          if (el.dataset.target != path) {
            el.classList.remove(params.activeClassName)
          }
        })

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.classList.remove(params.disabledClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
          drop.classList.remove(params.activeClassName);
        }
      }
    });
  }

  setMenuListener();


  // Pass single element
  const element = document.querySelector('.selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: false,
    placeholderValue: 'Select a project',
    shouldSort: false,
    renderSelectedChoices: 'auto',
    position: 'bottom',

  });

  // меняем текст в кастом chechbox
  document.querySelectorAll('.galerey__check-input').forEach(function (checkbox) {
    checkbox.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path);

      document.querySelector(`[data-target="${path}"]`).classList.toggle('galerey__check-label-color-text')
    })
  })


  $(".js-accordion").accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: 'content'
  });

  // табы в аккордионе
  document.querySelectorAll('.catalog__painter-date-content-item').forEach(function (tabsBTN) {
    tabsBTN.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path);

      document.querySelectorAll('.catalog__painter-description').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__painter-description_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter-description_active')
    })
  })

  // кастом тултип
  tippy('.js-tooltip', {
    theme: 'purple',
    trigger: 'click',
    role: 'tooltip',
    arrow: true,
  });


  // кастом форма
  var selector = document.getElementById("phone");

  var im = new Inputmask("+7 (999) 999 99 99");
  im.mask(selector);

  const validation = new JustValidate('.contact__form',

    {
      errorFieldCssClass: 'is-invalid',
      // errorFieldStyle: {
      //     border: '1px solid red',
      // },
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: 'red',
        textDecoration: 'underlined',
      },
      focusInvalidField: true,
      lockForm: true,
      tooltip: {
        position: 'top',
      },
    },
  );



  validation
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Как вас зовут?',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Как вас зовут?',
      },
      {
        rule: 'required',
        errorMessage: 'Как вас зовут',
    },
    ])

    .addField('#phone', [
      {
        rule: "function",
        validator: function (name, value) {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
          console.log(phone.lenght)
        },
        errorMessage: 'Недопустимый формат',
      }
    ])

  // карта

  ymaps.ready(init);
  function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
      },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "200px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "120px", right: "20px" }
      }
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      {},
      {
        iconLayout: "default#image",
        // iconImageHref: "https://img.icons8.com/office/2x/one-free.png",
        iconImageSize: [20, 20],
        iconImageOffset: [-20, -40],
      }
    );

    myMap.geoObjects.add(myPlacemark);

    setTimeout(() => {
      myMap.container.fitToViewport();
    }, 5000);
  }

  // плавный скрол

  // document.querySelectorAll('.js-scroll-link').forEach(link => {
  //   link.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     const href = this.getAttribute('href').substring(1);
  //     const scrollTarget = document.getElementById(href);
  //     const elementPosition = scrollTarget.getBoundingClientRect().top;

  //     window.scrollBy({
  //       top: elementPosition,
  //       behavior: 'smooth'
  //     });
  //   });

  // бургер
  document.querySelector('#header-burger-open').addEventListener('click', function () {
    document.querySelector('.header__menu').classList.add('header__menu-is-active')
    document.querySelector('.header__burger-open').classList.remove('header__burger-is-active')
    document.querySelector('.header__burger-close').classList.add('header__burger-is-active')
  })
  document.querySelector('#header-burger-close').addEventListener('click', function () {
    document.querySelector('.header__menu').classList.remove('header__menu-is-active')
    document.querySelector('.header__burger-close').classList.remove('header__burger-is-active')
    document.querySelector('.header__burger-open').classList.add('header__burger-is-active')
  })

  // поиск в мобил
  document.querySelector('.header__visabl-search-menu-open').addEventListener('click', function () {
    document.querySelector('.header__visabl-search-menu-open').classList.add('header__visabl-search-menu-is-disable')
    document.querySelector('.header__visabl-search-menu-search').classList.remove('header__visabl-search-menu-is-disable')
    document.querySelector('.header__visabl-search-menu-close').classList.remove('header__visabl-search-menu-is-disable')
    document.querySelector('.header__search-form-menu').classList.add('header__search-form-menu-is-active')
    document.querySelector('.header__search-block-menu').classList.add('header__search-block-menu-is-active')
  })
  // работа в 320
  document.querySelector('.header__visabl-search-menu-open-320').addEventListener('click', function () {
    document.querySelector('.header__visabl-search-menu-open').classList.add('header__visabl-search-menu-is-disable')
    document.querySelector('.header__visabl-search-menu-search').classList.remove('header__visabl-search-menu-is-disable')
    document.querySelector('.header__visabl-search-menu-close').classList.remove('header__visabl-search-menu-is-disable')
    document.querySelector('.header__search-form-menu').classList.add('header__search-form-menu-is-active')
    document.querySelector('.header__search-block-menu').classList.add('header__search-block-menu-is-active')
    document.querySelector('.header__visabl-search-non-display-in-deskrop').classList.add('header__visabl-search-non-display-in-deskrop-disable')
  })
  document.querySelector('.header__visabl-search-menu-close').addEventListener('click', function () {
    document.querySelector('.header__visabl-search-menu-open').classList.remove('header__visabl-search-menu-is-disable')
    document.querySelector('.header__visabl-search-menu-search').classList.add('header__visabl-search-menu-is-disable')
    document.querySelector('.header__visabl-search-menu-close').classList.add('header__visabl-search-menu-is-disable')
    document.querySelector('.header__search-form-menu').classList.remove('header__search-form-menu-is-active')
    document.querySelector('.header__search-block-menu').classList.remove('header__search-block-menu-is-active')
    document.querySelector('.header__visabl-search-non-display-in-deskrop').classList.remove('header__visabl-search-non-display-in-deskrop-disable')
  })


  if (document.documentElement.clientWidth <= 1023 && document.documentElement.clientWidth > 440) {

    document.querySelector('.header__visabl-search-menu-open').addEventListener('click', function () {
      document.querySelector('.header__visabl-search-menu-open').classList.add('header__visabl-search-menu-is-disable')
      document.querySelector('.header__visabl-search-menu-search').classList.remove('header__visabl-search-menu-is-disable')
      document.querySelector('.header__visabl-search-menu-close').classList.remove('header__visabl-search-menu-is-disable')
      document.querySelector('.header__search-form-menu').classList.add('header__search-form-menu-is-active')
      document.querySelector('.header__burger').classList.add('header__burger-disabled')
      document.querySelector('.header__link-logo').classList.add('header__link-logo-disabled')
    })
    document.querySelector('.header__visabl-search-menu-close').addEventListener('click', function () {
      document.querySelector('.header__visabl-search-menu-open').classList.remove('header__visabl-search-menu-is-disable')
      document.querySelector('.header__visabl-search-menu-search').classList.add('header__visabl-search-menu-is-disable')
      document.querySelector('.header__visabl-search-menu-close').classList.add('header__visabl-search-menu-is-disable')
      document.querySelector('.header__search-form-menu').classList.remove('header__search-form-menu-is-active')
      document.querySelector('.header__burger').classList.remove('header__burger-disabled')
      document.querySelector('.header__link-logo').classList.remove('header__link-logo-disabled')
    })
  };


  // модальное окно

  const btns = document.querySelectorAll('.galerey__slide');
  const modalOverlay = document.querySelector('.galerey__modal-overlay');
  const modal = document.querySelectorAll('.galerey__modal');
  const closeBtns = document.querySelectorAll('.galerey__modal-close-icon')

  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();


      let path = e.currentTarget.getAttribute('data-path');

      modal.forEach((el) => {
        el.classList.remove('galerey__modal--visable')
      });

      // var modals = document.getElementById('your-modal-id-here');

      document.querySelector(`[data-target="${path}"]`).classList.add('galerey__modal--visable');
      modalOverlay.classList.add('galerey__modal-overlay--visable');
    });
  });

  modalOverlay.addEventListener('click', (e) => {


    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('galerey__modal-overlay--visable');
      modal.forEach((el) => {
        el.classList.remove('galerey__modal--visable')
      });
    }

  });

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
      modal.forEach((el) => {
        el.classList.remove('galerey__modal--visable')
      });
      modalOverlay.classList.remove('galerey__modal-overlay--visable');
    });

  })

})

