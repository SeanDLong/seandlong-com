document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('map-modal');
  var modalIframe = document.getElementById('map-modal-iframe');
  var closeBtn = modal.querySelector('.map-modal-close');

  function openModal(src) {
    modalIframe.src = src;
    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
    modalIframe.src = '';
  }

  document.querySelectorAll('.map-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openModal(trigger.getAttribute('data-src'));
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
});
