/**
* Template Name: Ninestars
* Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

document.addEventListener('DOMContentLoaded', () => {
  const servicesList = document.querySelectorAll('.services-list a');
  const serviceContent = document.getElementById('service-content');

const contentData = {
  'backing-startups': `
     <h3>Backing Startups</h3><br>
    <div style="width: 100%; text-align: center;">
      <img src="assets1/img/services.jpg" alt="" class="img-fluid services-img" style="width: 70%; display: block; margin: 0 auto;">
    </div> 

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Startup Mentorship and Advisory</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Gain valuable insights and guidance from experienced entrepreneurs who can help navigate the complexities of launching and scaling your startup. Our advisory services are tailored to foster growth and innovation at every stage of your journey.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Startup Health Monitor</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Keep your business on track with our Startup Health Monitor, a comprehensive tool designed to assess vital metrics and performance indicators, ensuring you stay ahead of potential challenges and maintain robust growth.
    </p>
    
    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Product Development Support for Startups</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Accelerate your product development with expert support that transforms your vision into reality. Our team specializes in fine-tuning your product strategy and optimizing your development process for maximum impact.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Funding Assistance</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Secure the necessary funding to propel your startup forward. We provide strategic guidance on accessing venture capital, grants, and angel investments, aligning your financial needs with the right funding opportunities.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Valuation Support</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Determine the true value of your startup with our professional valuation services. We offer detailed analysis and expert advice to help you understand your company’s worth and position it attractively for investors.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Pitch Deck & Projection Creation</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Capture the attention of investors with a compelling pitch deck crafted by our experts. We focus on highlighting your startup’s unique value proposition, market potential, and growth strategy to secure the funding you need.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Strategic Management - MSME</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Tailor your strategic management practices to the unique needs of your MSME. Our services are designed to streamline operations, enhance competitive advantage, and drive sustainable business growth.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Brand Positioning</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Enhance your startup’s market presence and sales performance with our targeted support. We specialize in crafting customized marketing strategies and sales plans that resonate with your audience, driving growth and increasing revenue efficiently.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">COX Building & Co-Founder Dating</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      We empower individuals by enhancing their leadership and business skills, and we facilitate connections with complementary co-founders to foster successful partnerships.
    </p>
`,

  'incubation-centers': `
    <h3>Incubation Centers</h3><br>
    
    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Establishing Incubation Center</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Kickstart your incubation center with a solid foundation designed to nurture early-stage startups. We focus on creating an ecosystem that supports innovation, providing the necessary resources and mentorship to foster entrepreneurial success.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Structuring Incubation Center</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Design an effective structure for your incubation center that optimizes resource allocation and maximizes support for resident startups. Our approach ensures a balanced mix of technology, talent, and strategic guidance to facilitate rapid growth and development.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Scaling Incubation Center</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Expand the reach and impact of your incubation center globally with strategies tailored for growth. We help you scale operations efficiently, enhancing your capacity to support more startups and increasing the overall effectiveness of your programs.
    </p>
`,

  'corporate-consortium': `
    <h3>Corporate Consortium</h3><br>
    
    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Forge Strategic Partnerships and Collaborations</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Corporates actively collaborate with startups to co-develop products and explore new markets, leveraging the innovative prowess of startups to enhance their product offerings and operational efficiency.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Invest in and Acquire Innovative Startups</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Corporates strategically invest in or acquire startups to integrate cutting-edge technologies and entrepreneurial talent into their existing business frameworks, enhancing their competitive edge and fostering continuous innovation.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Establish Corporate-Sponsored Incubators and Accelerators</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Corporates initiate and support incubator and accelerator programs that equip startups with essential resources, mentorship, and industry insights to accelerate their development and align their innovations with corporate strategic goals.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Implement Licensing and Technology Transfer Agreements</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Corporates execute licensing agreements with startups to utilize breakthrough technologies, facilitating rapid integration into their operations and broadening their technological capabilities.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Integrate Startups into Corporate Supply Chains</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Corporates incorporate startups into their supply chains, leveraging innovative products or services to enhance their offerings, while providing startups with significant growth and scaling opportunities.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Provide Mentorship and Share Expertise</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Corporates offer targeted mentorship and share valuable industry expertise with startups, aiding them in overcoming business challenges and scaling effectively, while staying abreast of emerging trends and innovations.
    </p>

    <ul>
      <li><i class="bi bi-check-circle"></i> <span style="font-weight: bold;">Leverage CSR Initiatives to Support Startups</span></li>
    </ul>
    <p style="color: #000000bd;font-family: 'Raleway';">
      Corporates deploy CSR funds and initiatives to support startups that align with their social and environmental goals. By backing socially responsible startups, corporates not only foster innovation but also contribute to their CSR objectives, creating shared value and impacting the community positively.
    </p>
`,

  'greentrack-initiative': `
    <h3>Greentrack Initiative</h3><br>
    <p style="color: #000000bd;font-family: 'Raleway';">
      The <span style="font-weight:800;">Green Track Initiative</span> is our commitment to fostering sustainable startups that prioritize environmental responsibility and innovative green technologies. Through this initiative, we support startups dedicated to creating eco-friendly solutions that address critical environmental challenges. Our goal is to cultivate a new generation of businesses that not only drive economic growth but also contribute to a sustainable future for our planet. Join us on the Green Track and be part of a movement towards a greener, cleaner world.
      <br>
      <span style="font-weight:800;">How we do it ?</span>
    </p>
  `,
  'marketing': `
    <h3>Marketing</h3>
    <p>
      Detailed content about Marketing.
    </p>
  `
};

// // Set initial content to Web Design
// serviceContent.innerHTML = contentData['backing-startups'];

// servicesList.forEach(service => {
//   service.addEventListener('click', (e) => {
//     e.preventDefault();

//     servicesList.forEach(s => s.classList.remove('active'));
//     service.classList.add('active');

//     const contentKey = service.getAttribute('data-content');
//     serviceContent.innerHTML = contentData[contentKey];
//   });



const loadContent = (service) => {
  if (contentData[service]) {
    serviceContent.innerHTML = contentData[service];
    servicesList.forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-content="${service}"]`).classList.add('active');
    history.pushState(null, '', `?service=${service}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    serviceContent.innerHTML = contentData['backing-startups'];
  }
};

// Initial load based on URL parameter
const urlParams = new URLSearchParams(window.location.search);
const serviceParam = urlParams.get('service');
loadContent(serviceParam || 'backing-startups');

// Add click event listeners to service links
servicesList.forEach(service => {
  service.addEventListener('click', (e) => {
    e.preventDefault();
    const contentKey = service.getAttribute('data-content');
    loadContent(contentKey);
  });
});
});