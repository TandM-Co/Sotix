const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
        return `<span class="circle circle__text mr-6 d-flex justify-content-center align-items-center">${index + 1}</span>`;
    },
  },
});
